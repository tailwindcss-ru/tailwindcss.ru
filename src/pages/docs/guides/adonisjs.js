import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { FrameworkGuideLayout } from '@/layouts/FrameworkGuideLayout'
import { Steps } from '@/components/Steps'

let steps = [
  {
    title: 'Создайте свой проект',
    body: () => (
      <p>
        Начните с создания нового проекта AdonisJS, если он у вас еще не настроен. Самый
        распространенный подход — использовать{' '}
        <a href="https://docs.adonisjs.com/guides/installation">Create AdonisJS</a>.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npm init adonisjs@latest my-project -- --kit=web\ncd my-project',
    },
  },
  {
    title: 'Установите Tailwind CSS',
    body: () => (
      <p>
        Установите <code>tailwindcss</code> и его одноранговые зависимости, затем сгенерируйте файлы{' '}
        <code>tailwind.config.js</code> и <code>postcss.config.js</code>.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npm install -D tailwindcss@3 postcss autoprefixer\nnpx tailwindcss init -p',
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
  export default {
>   content: [
>     "./resources/**/*.edge",
>     "./resources/**/*.{js,ts,jsx,tsx,vue}",
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
        Убедитесь, что ваш скомпилированный CSS включен в <code>{'<head>'}</code>, а затем начните
        использовать служебные классы Tailwind для оформления вашего контента.
      </p>
    ),
    code: {
      name: 'home.edge',
      lang: 'html',
      code: `  <!doctype html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
>   @vite(['resources/css/app.css', 'resources/js/app.js'])
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
