import { useRouteHash } from '@/hooks/useRouteHash'
import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { FrameworkGuideLayout } from '@/layouts/FrameworkGuideLayout'
import { Steps } from '@/components/Steps'
import { TabBar } from '@/components/Guides/TabBar.jsx'

let tabs = [
  {
    name: 'Использование Vite',
    href: '#vite',
    steps: [
      {
        title: 'Создайте свой проект',
        body: () => (
          <p>
            Начните с создания нового проекта Laravel, если у вас его еще нет. Самый
            распространенный подход — использовать{' '}
            <a href="https://laravel.com/docs/9.x#your-first-laravel-project">
              команду композера <code>create-project</code>
            </a>
            .
          </p>
        ),
        code: {
          name: 'Terminal',
          lang: 'terminal',
          code: 'composer create-project laravel/laravel my-project\ncd my-project',
        },
      },
      {
        title: 'Установите Tailwind CSS',
        body: () => (
          <p>
            Установите <code>tailwindcss</code> и его одноранговые зависимости через npm, а затем
            запустите команду init, чтобы сгенерировать как <code>tailwind.config.js</code>, так и{' '}
            <code>postcss.config.js</code>.
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
            Добавьте пути ко всем файлам вашего шаблона в файл <code>tailwind.config.js</code> .
          </p>
        ),
        code: {
          name: 'tailwind.config.js',
          lang: 'js',
          code: `  /** @type {import('tailwindcss').Config} */
  export default {
>   content: [
>     "./resources/**/*.blade.php",
>     "./resources/**/*.js",
>     "./resources/**/*.vue",
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
          name: 'app.blade.php',
          lang: 'html',
          code: `  <!doctype html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
>   @vite('resources/css/app.css')
  </head>
  <body>
>   <h1 class="text-3xl font-bold underline">
>     Hello world!
>   </h1>
  </body>
  </html>`,
        },
      },
    ],
  },
  {
    name: 'Использование Laravel Mix',
    href: '#mix',
    steps: [
      {
        title: 'Установите Tailwind CSS',
        body: () => (
          <p>
            Установите <code>tailwindcss</code> и его одноранговые зависимости через npm и создайте
            файл <code>tailwind.config.js</code>.
          </p>
        ),
        code: {
          name: 'Terminal',
          lang: 'terminal',
          code: 'npm install -D tailwindcss@3 postcss autoprefixer\nnpx tailwindcss init',
        },
      },
      {
        title: 'Добавьте Tailwind в конфигурацию Laravel Mix',
        body: () => (
          <p>
            В файле <code>webpack.mix.js</code> добавьте <code>tailwindcss</code> как плагин
            PostCSS.
          </p>
        ),
        code: {
          name: 'webpack.mix.js',
          lang: 'js',
          code: `  mix.js("resources/js/app.js", "public/js")
    .postCss("resources/css/app.css", "public/css", [
>     require("tailwindcss"),
    ]);`,
        },
      },
      {
        title: 'Настройте пути к шаблону',
        body: () => (
          <p>
            Добавьте пути ко всем файлам вашего шаблона в файл <code>tailwind.config.js</code> .
          </p>
        ),
        code: {
          name: 'tailwind.config.js',
          lang: 'js',
          code: `  /** @type {import('tailwindcss').Config} */
  export default {
>   content: [
>     "./resources/**/*.blade.php",
>     "./resources/**/*.js",
>     "./resources/**/*.vue",
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
            Запустите процесс сборки с помощью <code>npm run watch</code>.
          </p>
        ),
        code: {
          name: 'Terminal',
          lang: 'terminal',
          code: 'npm run watch',
        },
      },
      {
        title: 'Начните использовать Tailwind в своем проекте',
        body: () => (
          <p>
            Убедитесь, что ваш скомпилированный CSS включен в <code>{'<head>'}</code>, а затем
            начните использовать классы-утилиты Tailwind для оформления вашего контента.
          </p>
        ),
        code: {
          name: 'app.blade.php',
          lang: 'html',
          code: `  <!doctype html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
>   <link href="{{ asset('css/app.css') }}" rel="stylesheet">
  </head>
  <body>
>   <h1 class="text-3xl font-bold underline">
>     Hello world!
>   </h1>
  </body>
  </html>`,
        },
      },
    ],
  },
]

export default function UsingLaravel({ code }) {
  let hash = useRouteHash()

  let selectedTabIndex = tabs.findIndex((tab) => tab.href === hash)

  if (selectedTabIndex === -1) {
    selectedTabIndex = 0
  }

  return (
    <FrameworkGuideLayout
      title="Установите Tailwind CSS с Laravel"
      description="Настройте Tailwind CSS в проекте Laravel."
    >
      <TabBar tabs={tabs} selectedTabIndex={selectedTabIndex} />
      <Steps steps={tabs[selectedTabIndex].steps} code={code[selectedTabIndex]} />
    </FrameworkGuideLayout>
  )
}

export function getStaticProps() {
  let { highlightedCodeSnippets } = require('@/components/Guides/Snippets.js')

  return {
    props: {
      code: tabs.map((tab) => highlightedCodeSnippets(tab.steps)),
    },
  }
}

UsingLaravel.layoutProps = {
  meta: {
    title: 'Установите Tailwind CSS с Laravel',
    description: 'Настройте Tailwind CSS в проекте Laravel.',
    section: 'Установка',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
