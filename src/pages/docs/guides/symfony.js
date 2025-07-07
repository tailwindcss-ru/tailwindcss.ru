import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { FrameworkGuideLayout } from '@/layouts/FrameworkGuideLayout'
import { Steps } from '@/components/Steps'

let steps = [
  {
    title: 'Создайте свой проект',
    body: () => (
      <p>
        Начните с создания нового проекта Symfony, если у вас его еще нет. Самый распространенный
        подход — использовать <a href="https://symfony.com/download">установщик Symfony</a>.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'symfony new --webapp my-project\ncd my-project',
    },
  },
  {
    title: 'Установите Webpack Encore',
    body: () => (
      <p>
        Установите Webpack Encore, который занимается созданием ваших ресурсов. Дополнительную
        информацию смотрите в{' '}
        <a href="https://symfony.com/doc/current/frontend.html">документации</a>.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'composer require symfony/webpack-encore-bundle',
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
      code: 'npm install -D tailwindcss@3 postcss postcss-loader autoprefixer\nnpx tailwindcss init -p',
    },
  },
  {
    title: 'Включите поддержку PostCSS',
    body: () => (
      <p>
        В файле <code>webpack.config.js</code> включите загрузчик PostCSS. Дополнительную информацию
        смотрите в{' '}
        <a href="https://symfony.com/doc/current/frontend/encore/postcss.html">документации</a>.
      </p>
    ),
    code: {
      name: 'webpack.config.js',
      lang: 'js',
      code: `  Encore
    // ...
>   .enablePostCssLoader()
  ;`,
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
>     "./assets/**/*.js",
>     "./templates/**/*.html.twig",
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
        <code>./assets/styles/app.css</code>.
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
        Убедитесь, что ваш скомпилированный CSS включен в <code>{'<head>'}</code>, а затем начните
        использовать служебные классы Tailwind для оформления вашего контента.
      </p>
    ),
    code: {
      name: 'base.html.twig',
      lang: 'html',
      code: `  <!doctype html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    {% block stylesheets %}
      {{ encore_entry_link_tags('app') }}
    {% endblock %}
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

export default function UsingSymfony({ code }) {
  return (
    <FrameworkGuideLayout
      title="Установите Tailwind CSS c Symfony"
      description="Настройка Tailwind CSS в проекте Symfony."
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

UsingSymfony.layoutProps = {
  meta: {
    title: 'Установите Tailwind CSS c Symfony',
    description: 'Настройка Tailwind CSS в проекте Symfony.',
    section: 'Installation',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
