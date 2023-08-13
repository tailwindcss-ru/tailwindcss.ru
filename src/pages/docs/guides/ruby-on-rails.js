import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { FrameworkGuideLayout } from '@/layouts/FrameworkGuideLayout'
import { Steps } from '@/components/Steps'

let steps = [
  {
    title: 'Создайте свой проект',
    body: () => (
      <p>
        Начните с создания нового проекта Rails, если у вас его еще нет. Самый распространенный
        подход — использовать{' '}
        <a href="https://guides.rubyonrails.org/command_line.html">Rails Command Line</a>.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'rails new my-project\ncd my-project',
    },
  },
  {
    title: 'Установите Tailwind CSS',
    body: () => (
      <p>
        Установите gem <code>tailwindcss-rails</code>, а затем запустите команду установки, чтобы
        сгенерировать файл <code>tailwind.config.js</code> в каталоге <code>./config</code>.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: './bin/bundle add tailwindcss-rails\n./bin/rails tailwindcss:install',
    },
  },
  {
    title: 'Настройте пути к шаблону',
    body: () => (
      <p>
        Добавьте пути ко всем файлам шаблонов в файл <code>./config/tailwind.config.js</code> .
      </p>
    ),
    code: {
      name: 'tailwind.config.js',
      lang: 'js',
      code: `  /** @type {import('tailwindcss').Config} */
  module.exports = {
>   content: [
>     './app/helpers/**/*.rb',
>     './app/javascript/**/*.js',
>     './app/views/**/*',
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
        Добавьте директивы <code>@tailwind</code> для каждого слоя Tailwind в ваш{' '}
        файл <code>application.tailwind.css</code>, расположенный в каталоге{' '}
        <code>./app/assets/stylesheets</code>.
      </p>
    ),
    code: {
      name: 'application.tailwind.css',
      lang: 'css',
      code: '@tailwind base;\n@tailwind components;\n@tailwind utilities;',
    },
  },
  {
    title: 'Начните процесс сборки',
    body: () => (
      <p>
        Запустите процесс сборки с помощью <code>./bin/dev</code>.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: './bin/dev',
    },
  },
  {
    title: 'Начните использовать Tailwind в своем проекте',
    body: () => <p>Начните использовать классы утилит Tailwind для оформления своего контента.</p>,
    code: {
      name: 'index.html.erb',
      lang: 'html',
      code: `<h1 class="text-3xl font-bold underline">
    Hello world!
</h1>`,
    },
  },
]

export default function UsingRails({ code }) {
  return (
    <FrameworkGuideLayout
      title="Установите Tailwind CSS с Ruby on Rails"
      description="Настройте Tailwind CSS в проекте Ruby on Rails v7+."
    >
      <div className="relative z-10 max-w-3xl mb-16 prose prose-slate dark:prose-dark">
        <p>
          Самый быстрый способ начать использовать Tailwind CSS в проекте Rails — использовать{' '}
          <a href="https://github.com/rails/tailwindcss-rails">Tailwind CSS для Rails</a>, запустив{' '}
          <code>rails new my-project --css tailwind</code>. Это автоматически настроит вашу настройку
          Tailwind на основе официального примера Rails. Если вы хотите настроить Tailwind вручную,
          перейдите к остальной части этого руководства.
        </p>
      </div>
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

UsingRails.layoutProps = {
  meta: {
    title: 'Установите Tailwind CSS c Ruby on Rails',
    description: 'Настройка Tailwind CSS в проекте Ruby on Rails v7+.',
    section: 'Установка',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
