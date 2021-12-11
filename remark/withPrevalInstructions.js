const fs = require('fs')
const fm = require('front-matter')
const redent = require('redent')
const visit = require('unist-util-visit')

const unified = require('unified')
const markdown = unified().use(require('remark-parse'))

const stubs = {
  tailwind: fs.readFileSync(require.resolve('tailwindcss/stubs/simpleConfig.stub'), 'utf8'),
  postcss: fs.readFileSync(require.resolve('tailwindcss/stubs/defaultPostCssConfig.stub'), 'utf8'),
}

// Злоупотребление плагином фронтальной части для синтаксического анализа Yaml,
// чтобы нам не приходилось загружать другой инструмент yaml.
// Тише, никому не говори!
function yaml(input) {
  return fm(['---', input, '---'].join('\n')).attributes
}

function md(input) {
  // The regex replace will deduce two or more \n to a single \n
  return markdown.parse(redent(input).replace(/^\n+/gm, '\n')).children
}

function joinAsSpeech(words, separator = ' и ') {
  let all = words.slice()
  let last = all.pop()

  return [all.join(', '), last].filter(Boolean).join(separator)
}

function escapeRegex(input) {
  return input.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')
}

function diff(blob, changes) {
  // Re-indent with 2 spaces, so that we have breathing room for the - and + signs.
  let next = blob
    .split('\n')
    .map((line) => `  ${line}`)
    .join('\n')

  for (let [needle, replacement] of changes) {
    next = next
      .replace(
        new RegExp(`([  ]*)${escapeRegex(needle)}`),
        [
          needle
            .split('\n')
            .map((line) => `- $1${line}`)
            .join('\n'),
          replacement
            .split('\n')
            .map((line) => `+ $1${line}`)
            .join('\n'),
        ].join('\n')
      )
      // $1 contained 2 spaces to many
      .replace(/^([-+])\s{3}/gm, '$1 ')
  }

  return next
}

function quote(char = "'") {
  return (line) => char + line + char
}

function indent(amount = 2) {
  return (line) => ' '.repeat(amount) + line
}

function error(input) {
  return `<div class="fixed top-0 left-0 right-0 p-4 z-50 bg-red-500 text-white text-2xl">Страницы содержат проблемы!</div><span class="font-bold bg-red-100 bg-opacity-50 ring-4 ring-red-600 ring-opacity-75 rounded-2xl px-2">${input}</span>`
}

function code(language, contents, { file = null, indent = 8 } = {}) {
  let diffIndentation = language.includes('diff-') ? '  ' : ''
  let comment = {
    js: (data) => `// ${data}`,
    css: (data) => `/* ${data} */`,
    html: (data) => `<!-- ${data} -->`,
    php: (data) => (file && file.endsWith('.blade.php') ? `{{-- ${data} --}}` : `// ${data}`),
  }

  return [
    '```' + language,
    file && diffIndentation + comment[language.replace('diff-', '')](file),
    contents.trimEnd(),
    '```',
  ]
    .filter(Boolean)
    .join('\n')
    .split('\n')
    .map((line, idx) => (idx === 0 ? line : `${' '.repeat(indent)}${line}`))
    .join('\n')
}

function createPrevals({ tool: pageTool = error('UNKNOWN') } = {}) {
  return {
    installation({
      tool = pageTool,
      reference = null,
      script,
      npmInstall = false,
      disclaimer = null,
    }) {
      return md(`
        ## Создание вашего проекта

        Начните с создания нового проекта ${tool}, если у вас его еще нет.
        ${
          reference !== null
            ? `Самый распространенный подход - использовать [${reference.name}](${reference.link}):`
            : ''
        }


        ${disclaimer !== null ? code('shell', `${script} my-project`) : ''}
        ${disclaimer !== null ? disclaimer : ''}

        ${disclaimer !== null ? 'Затем смените каталоги на свой новый проект:' : ''}
        ${disclaimer !== null ? code('shell', 'cd my-project') : ''}

        ${
          disclaimer === null
            ? code('shell', [`${script} my-project`, 'cd my-project'].join('\n'))
            : ''
        }

        ${npmInstall ? `Затем установите клиентские зависимости ${tool}, используя \`npm\`:` : ''}
        ${npmInstall ? code('shell', 'npm install') : ''}
      `)
    },
    configuration({
      purge = [],
      version = 'последняя',
      types = ['страницы', 'компоненты'],
      postcss = true,
    }) {
      let files = ['tailwind.config.js', postcss && 'postcss.config.js']
        .filter(Boolean)
        .map(quote('`'))
      let multipleFiles = files.length > 1

      return md(`
        ### Создайте свою конфигурацию ${multipleFiles ? 'файлов' : 'файл'}

        Затем сгенерируйте свои(й) ${joinAsSpeech(files)} ${multipleFiles ? 'файлы' : 'файл'}:

        ${code(
          'shell',
          `npx tailwindcss${version === 'compat-7' ? '-cli@latest' : ''} init ${
            postcss ? '-p' : ''
          }`
        )}

        Это создаст минимальный файл \`tailwind.config.js\` в корне вашего проекта:

        ${code('js', stubs.tailwind, { file: 'tailwind.config.js' })}

        Узнайте больше о настройке Tailwind в [документации по конфигурации](/docs/configuration).

        ${
          postcss
        ? 'Он также создаст файл `postcss.config.js`, который включает уже настроенные файлы `tailwindcss` и `autoprefixer`:'
            : ''
        }
        ${postcss ? code('js', stubs.postcss, { file: 'postcss.config.js' }) : ''}
        ${
          postcss
        ? "Если вы планируете использовать какие-либо другие плагины PostCSS, вам следует прочитать нашу документацию по [использованию PostCSS в качестве препроцессора](/docs/using-with-preprocessors) для получения более подробной информации о том, как лучше всего заказать их вместе с Tailwind."
            : ''
        }

        ### Настройте Tailwind, чтобы удалить неиспользуемые стили в продакшене

        В вашем файле \`tailwind.config.js\`, настройте опцию \`content\`, указав пути ко всем вашим ${joinAsSpeech(
          types
        )}, чтобы Tailwind мог изменять дерево неиспользуемых стилей в производственных сборках:

        ${code(
          'diff-js',
          diff(stubs.tailwind, [
            [
              'purge: [],',
              `purge: [${
                purge.length > 2
                  ? // Use multiple lines once we hit 3 lines of purging
                    '\n' + purge.map(quote("'")).map(indent(2)).join(',\n') + ',\n'
                  : // Keep it all inline
                    purge.map(quote("'")).join(', ')
              }],`,
            ],
          ]),
          { file: 'tailwind.config.js' }
        )}

        Прочтите наше отдельное руководство по [оптимизации для продакшена](/docs/optimizing-for-production), чтобы узнать больше о древовидных неиспользуемых стилях для лучшей производительности.
      `)
    },
    setup({
      dependencies = [],
      uninstall = [],
      soon = false,
      tool = pageTool,
      version = 'latest',
    }) {
      let knownDependencies = {
        latest: ['tailwindcss@latest', 'postcss@latest', 'autoprefixer@latest'],
        'compat-7': [
          'tailwindcss@npm:@tailwindcss/postcss7-compat',
          'postcss@^7',
          'autoprefixer@^9',
        ],
      }

      if (typeof version === 'string') {
        version = { [tool]: version }
      }

      let hasMultipleVersion = Object.keys(version).length > 1
      let installCode = Object.entries(version)
        .map(([name, mode]) => {
          if (knownDependencies[mode] === undefined) {
            throw new Error(
              `Неизвестная версия "${mode}". Только действующие версии: ${joinAsSpeech(
                Object.values(knownDependencies).map(quote('`'))
              )}`
            )
          }

          return [
            hasMultipleVersion && `# Если вы на ${name}`,
            `npm install -D ${[...dependencies, ...knownDependencies[mode]].join(' ')}`,
          ]
            .filter(Boolean)
            .join('\n')
        })
        .join('\n\n')

      let outdatedVersions = Object.keys(version)
        .filter((name) => version[name] === 'compat-7')
        .flatMap((version) => version.split(/\s(?:и|или)\s/)) // "Next.js или старше" -> ["Next.js", "старше"]
        .filter(Boolean)
      let information =
        outdatedVersions.length > 0
          ? `${joinAsSpeech(outdatedVersions)} ${
          outdatedVersions.length === 1 ? "не" : "не"
            } пока поддерживает PostCSS 8${
              soon ? " _(но это скоро)_" : ''
            } поэтому вам необходимо установить [сборку совместимости с Tailwind CSS v2.0 PostCSS 7](/docs/installation#post-css-7-compatibility-build), как мы показали выше.`
          : ''

      return md(`
        ## Настройка Tailwind CSS

        *Tailwind CSS требует Node.js 12.13.0 или выше.*

        ### Установка Tailwind через npm

        ${
          uninstall.length > 0
            ? `Если у вас уже установлен(ы) ${joinAsSpeech(uninstall.map(quote('`')))} ${
                uninstall.length === 1 ? 'модуль' : 'модули'
              } по какой-либо причине, важно удалить его перед установкой самого Tailwind:`
            : ''
        }
        ${uninstall.length > 0 ? code('shell', `npm uninstall ${uninstall.join(' ')}`) : ''}

        ${uninstall.length > 0 ? 'Далее устанавливаем' : 'Устанавливаем'} ${joinAsSpeech(
        [...dependencies.map(quote('`')), 'Tailwind'],
        ', а также '
      )} его одноранговые зависимости, используя \`npm\`:

        ${code('shell', installCode)}

        ${information}
      `)
    },
    include({ file, create = false, tool = pageTool, withChromiumBug = false, level = 3 }) {
      return md(`
        ${'#'.repeat(level)} Включите Tailwind в свой CSS

        ${
          create
            ? `Создать \`${file}\` файл`
            : `Откройте файл \`${file}\`, который ${tool} генерирует для вас по умолчанию`
        }
        , и используйте директиву \`@tailwind\`, чтобы включить утилиты Tailwind \`base\`, \`components\` и \`utilities\` стили, заменяющие исходное содержимое файла:

        ${code(
          'css',
          [
            ...(withChromiumBug ? ['', '/*! @import */'] : []),
            '@tailwind base;',
            '@tailwind components;',
            '@tailwind utilities;',
          ].join('\n'),
          { file }
        )}

        ${
          withChromiumBug
            ? "_Из-за [ошибки в Chromium](https://bugs.chromium.org/p/chromium/issues/detail?id=1131113) важно, чтобы вы включили странный символ `/*! @import */` комментарий, чтобы избежать проблем с производительностью в Chrome DevTools во время разработки. Это уже исправлено в Canary, но в целом еще не выпущено._"
            : ''
        }

        Tailwind заменит эти директивы во время сборки на все стили, которые он генерирует на основе вашей настроенной дизайн-системы.

        Прочтите нашу документацию по [добавлению базовых стилей](/docs/adding-base-styles), [извлечению компонентов](/docs/extracting-components), и [добавлению новых утилит](/docs/adding-new-utilities) для лучшие практики по расширению Tailwind с помощью вашего собственного CSS.
      `)
    },
    finish({ scripts = [], tool = pageTool }) {
      return md(`
        Вы закончили! Теперь, когда ты бежишь ${joinAsSpeech(
          scripts.map(quote('`')),
          ' или '
        )}, Tailwind CSS будет готов к использованию в вашем проекте ${tool}.

        [Далее узнайте о рабочем процессе "сначала утилиты" &rarr;](/docs/utility-first)
      `)
    },
  }
}

module.exports.withPrevalInstructions = () => {
  return (tree, VFile) => {
    let context = VFile.contents.match(/export const meta = ([{[])(.*)/)
    if (context !== null) {
      try {
        context = JSON.parse(context[1] + context[2])
      } catch (err) {
        context = {}
      }
    } else {
      context = {}
    }

    let prevals = createPrevals(context)

    visit(tree, 'code', (node, index, parent) => {
      if (node.lang !== 'preval') return
      if (prevals[node.meta] === undefined)
        throw new Error(
          `Предыдущая инструкция "${node.meta}" не обрабатывается должным образом!\n\n\tСмотрите: ./remark/withPrevalInstructions.js`
        )

      parent.children.splice(index, 1, ...[].concat(prevals[node.meta](yaml(node.value), node)))
    })
  }
}
