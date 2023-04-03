import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { FrameworkGuideLayout } from '@/layouts/FrameworkGuideLayout'
import { Steps } from '@/components/Steps'

let steps = [
  {
    title: 'Создайте свой проект',
    body: () => (
      <p>
        Начните с{' '}
        <a href="https://docs.adonisjs.com/guides/installation">создания нового проекта AdonisJS</a>,
        если он еще не настроен. Выберите <code>web</code> для структуры проекта и{' '}
        <code>y</code>, когда будет предложено включить Webpack Encore.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npm init adonis-ts-app@latest my-project\ncd my-project',
    },
  },
  {
    title: 'Установите Tailwind CSS',
    body: () => (
      <p>
        Используя npm, установите <code>tailwindcss</code> и его одноранговые зависимости, а также{' '}
        <code>postcss-loader</code>, а затем запустите команду init для создания обоих{' '}
        <code>tailwind.config.js</code> и <code>postcss.config.js</code>.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npm install -D tailwindcss postcss postcss-loader autoprefixer\nnpx tailwindcss init -p',
    },
  },
  {
    title: 'Включите поддержку PostCSS',
    body: () => (
      <p>
        В файле <code>webpack.config.js</code> включите загрузчик PostCSS.
        Дополнительную информацию смотрите в{' '}
        <a href="https://symfony.com/doc/current/frontend/encore/postcss.html">
          документации Webpack Encore
        </a>.
      </p>
    ),
    code: {
      name: 'webpack.config.js',
      lang: 'js',
      code: `  /*
  |--------------------------------------------------------------------------
  | CSS loaders
  |--------------------------------------------------------------------------
  |
  | Uncomment one of the following line of code to enable support for
  | PostCSS or CSS.
  |
  */
> Encore.enablePostCssLoader();
  // Encore.configureCssLoader(() => {})`,
    },
  },
  {
    title: 'Настройте пути к шаблону',
    body: () => (
      <p>
        Добавьте пути ко всем файлам вашего шаблона в файл <code>tailwind.config.js</code>.
      </p>
    ),
    code: {
      name: 'tailwind.config.js',
      lang: 'js',
      code: `  /** @type {import('tailwindcss').Config} */
  module.exports = {
>   content: [
>     "./resources/**/*.{edge,js,ts,jsx,tsx,vue}",
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
        Добавьте директивы <code>@tailwind</code> для каждого из слоев Tailwind в ваш файл{' '}
        <code>./resources/css/app.css</code>.
      </p>
    ),
    code: {
      name: 'app.css',
      lang: 'css',
      code: '@tailwind base;\n@tailwind components;\n@tailwind utilities;',
    },
  },
  {
    title: 'Начните процесс сборки',
    body: () => (
      <p>
        Запустите процесс сборки с помощью <code>npm run dev</code>.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npm run dev',
    },
  },
  {
    title: 'Начните использовать Tailwind в своем проекте',
    body: () => (
      <p>
        Убедитесь, что ваш скомпилированный CSS включен в <code>{'<head>'}</code>, а затем
        начните использовать служебные классы Tailwind для оформления вашего контента.
      </p>
    ),
    code: {
      name: 'welcome.edge',
      lang: 'html',
      code: `  <!doctype html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    @entryPointStyles('app')
  </head>
  <body>
>   <h1 class="text-3xl font-bold underline">
>     Hello world!
>   </h1>
  </body>
  </html>`,
    },
  },
]

export default function UsingAdonis({ code }) {
  return (
    <FrameworkGuideLayout
      title="Установите Tailwind CSS c AdonisJS"
      description="Настройка Tailwind CSS в проекте AdonisJS."
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

UsingAdonis.layoutProps = {
  meta: {
    title: 'Установите Tailwind CSS c Adonis',
    section: 'Installation',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
