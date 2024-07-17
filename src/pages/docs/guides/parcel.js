import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { FrameworkGuideLayout } from '@/layouts/FrameworkGuideLayout'
import { Steps } from '@/components/Steps'

let steps = [
  {
    title: 'Создайте свой проект',
    body: () => (
      <p>
        Начните с создания нового проекта Parcel, если у вас его еще нет. Наиболее распространенный
        подход — добавить Parcel в качестве dev-dependency в ваш проект, как описано в их{' '}
        <a href="https://parceljs.org/getting-started/webapp/">руководстве по началу работы</a>.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'mkdir my-project\ncd my-project\nnpm init -y\nnpm install -D parcel\nmkdir src\ntouch src/index.html',
    },
  },
  {
    title: 'Установите Tailwind CSS',
    body: () => (
      <p>
        Установите <code>tailwindcss</code> и его одноранговые зависимости через npm, а затем
        запустите команду init для создания <code>tailwind.config.js</code>.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npm install -D tailwindcss postcss\nnpx tailwindcss init',
    },
  },
  {
    title: 'Конфигурация PostCSS',
    body: () => (
      <p>
        Создайте файл <code>.postcssrc</code> в корне проекта и включите плагин{' '}
        <code>tailwindcss</code>.
      </p>
    ),
    code: {
      name: '.postcssrc',
      lang: 'json',
      code: `{
  "plugins": {
    "tailwindcss": {}
  }
}`,
    },
  },
  {
    title: 'Конфигурация путей к шаблону',
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
>     "./src/**/*.{html,js,ts,jsx,tsx}",
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
        Создайте файл <code>./src/index.css</code> и добавьте директивы
        <code>@tailwind</code> для каждого слоя Tailwind.
      </p>
    ),
    code: {
      name: 'index.css',
      lang: 'css',
      code: '@tailwind base;\n@tailwind components;\n@tailwind utilities;',
    },
  },
  {
    title: 'Начните процесс сборки',
    body: () => (
      <p>
        Запустите процесс сборки с помощью <code>npx parcel src/index.html</code>.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npx parcel src/index.html',
    },
  },
  {
    title: 'Начните использовать Tailwind в своем проекте',
    body: () => (
      <p>
        Добавьте свой файл CSS в <code>{'<head>'}</code> и начните использовать служебные классы
        Tailwind для стилизации своего контента.
      </p>
    ),
    code: {
      name: 'index.html',
      lang: 'html',
      code: `  <!doctype html>
  <html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
>   <link href="./index.css" type="text/css" rel="stylesheet">
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

export default function UsingParcel({ code }) {
  return (
    <FrameworkGuideLayout
      title="Установите Tailwind CSS с Parcel"
      description="Настройте Tailwind CSS в проекте Parcel."
    >
      <Steps steps={steps} code={code} />
    </FrameworkGuideLayout>
  )
}

export function getStaticProps() {
  let { highlightedCodeSnippets } = require('@/components/Guides/Snippets.js')

  return {
    props: {
      code: highlightedCodeSnippets(steps),
    },
  }
}

UsingParcel.layoutProps = {
  meta: {
    title: 'Установите Tailwind CSS c Parcel',
    description: 'Настройка Tailwind CSS в проекте Parcel.',
    section: 'Установка',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
