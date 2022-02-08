import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { FrameworkGuideLayout } from '@/layouts/FrameworkGuideLayout'
import { Steps } from '@/components/Steps'
import pkg from 'tailwindcss/package.json?fields=version'

let steps = [
  {
    title: 'Создайте свой проект',
    body: () => (
      <p>
        Начните с создания нового проекта Phoenix, если он еще не настроен.
        Вы можете следовать их <a href="https://hexdocs.pm/phoenix/installation.html">руководству по установке</a>,
        чтобы приступить к работе.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'mix phx.new myproject\ncd myproject',
    },
  },
  {
    title: 'Установите плагин Tailwind',
    body: () => (
      <p>
        Добавьте подключаемый модуль Tailwind в свои зависимости и запустите <code>mix deps.get</code>, чтобы установить его.
      </p>
    ),
    code: {
      name: 'mix.exs',
      lang: 'elixir',
      code: `  defp deps do
    [
>     {:tailwind, "~> 0.1", runtime: Mix.env() == :dev}
    ]
  end`,
    },
  },
  {
    title: 'Настройте плагин Tailwind',
    body: () => (
      <p>
        В файле <code>config.exs</code> вы можете указать, какую версию Tailwind CSS вы хотите использовать,
        путь к вашей конфигурации Tailwind и настроить пути к ресурсам.
      </p>
    ),
    code: {
      name: 'config.exs',
      lang: 'elixir',
      code: `config :tailwind, version: "${pkg.version}", default: [
  args: ~w(
    --config=tailwind.config.js
    --input=css/app.css
    --output=../priv/static/assets/app.css
  ),
  cd: Path.expand("../assets", __DIR__)
]`,
    },
  },
  {
    title: 'Обновите сценарий развертывания',
    body: () => (
      <p>
        Настройте псевдоним для создания своего CSS при развертывании.
      </p>
    ),
    code: {
      name: 'mix.exs',
      lang: 'elixir',
      code: `  defp aliases do
    [
>     "assets.deploy": ["tailwind default --minify", "esbuild default --minify", "phx.digest"]
    ]
  ]`,
    },
  },
  {
    title: 'Включить наблюдатель(watcher ) в разработке',
    body: () => (
      <p>
        Добавьте Tailwind в свой список наблюдателей в файле <code>./config/dev.exs</code>.
      </p>
    ),
    code: {
      name: 'dev.exs',
      lang: 'elixir',
      code: `  watchers: [
>   tailwind: {Tailwind, :install_and_run, [:default, ~w(--watch)]}
  ]`,
    },
  },
  {
    title: 'Установите Tailwind CSS',
    body: () => (
      <p>
        Запустите команду установки, чтобы загрузить автономный интерфейс командной строки Tailwind
        и создать файл <code>tailwind.config.js</code> в каталоге <code>./assets</code>.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: `mix tailwind.install`,
    },
  },
  {
    title: 'Настройте пути к шаблону',
    body: () => (
      <p>
        Добавьте пути ко всем файлам вашего шаблона в файл <code>./assets/tailwind.config.js</code>.
      </p>
    ),
    code: {
      name: 'tailwind.config.js',
      lang: 'js',
      code: `  module.exports = {
>   content: [
>     './js/**/*.js',
>     '../lib/*_web.ex',
>     '../lib/*_web/**/*.*ex',
>   ],
    theme: {
      extend: {},
    },
    plugins: [],
  }`,
    },
  },
  {
    title: 'Добавьте директивы Tailwind в свой CSS',
    body: () => (
      <p>
        Добавьте директивы <code>@tailwind</code>{' '}
        для каждого слоя Tailwind в <code>./assets/css/app.css</code>
      </p>
    ),
    code: {
      name: 'app.css',
      lang: 'css',
      code: '@tailwind base;\n@tailwind components;\n@tailwind utilities;',
    },
  },
  {
    title: 'Удалить импорт CSS по умолчанию',
    body: () => (
      <p>
        Удалите импорт CSS из <code>./assets/js/app.js</code>, так как теперь Tailwind сделает это за вас.
      </p>
    ),
    code: {
      name: 'app.js',
      lang: 'diff-js',
      code: `- // Remove this line if you add your own CSS build pipeline (e.g postcss).
- import "../css/app.css"`,
    },
  },
  {
    title: 'Начните процесс сборки',
    body: () => (
      <p>
        Запустите процесс сборки с помощью <code>mix phx.server</code>.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'mix phx.server',
    },
  },
  {
    title: 'Начните использовать Tailwind в своем проекте',
    body: () => <p>Начните использовать классы утилит Tailwind для оформления своего контента.</p>,
    code: {
      name: 'index.html.heex',
      lang: 'html',
      code: `<h1 class="text-3xl font-bold underline">
  Hello world!
</h1>`,
    },
  },
]

export default function UsingPhoenix({ code }) {
  return (
    <FrameworkGuideLayout
      title="Установите Tailwind CSS с Phoenix"
      description="Настройка Tailwind CSS в проекте Phoenix."
    >
      <Steps steps={steps} code={code} />
    </FrameworkGuideLayout>
  )
}

export function getStaticProps() {
  let { highlightCode } = require('../../../../remark/utils')

  return {
    props: {
      code: steps.map(({ code }) => {
        if (code.lang && code.lang !== 'terminal') {
          return highlightCode(code.code, code.lang)
        }
        return code.code
      }),
    },
  }
}

UsingPhoenix.layoutProps = {
  meta: {
    title: 'Установите Tailwind CSS с Phoenix',
    section: 'Установка',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
