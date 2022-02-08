import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { FrameworkGuideLayout } from '@/layouts/FrameworkGuideLayout'
import { Steps } from '@/components/Steps'

let steps = [
  {
    title: 'Создайте свой проект',
    body: () => (
      <p>
        Начните с создания нового проекта Rails, если у вас его еще нет.
        Самый распространенный подход — использовать{' '}
        <a href="https://guides.rubyonrails.org/command_line.html">Rails Command Line</a>.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'rails new my-app\ncd my-app',
    },
  },
  {
    title: 'Установите Tailwind CSS',
    body: () => (
      <p>
        Установите gem <code>tailwindcss-rails</code>, а затем запустите команду установки, чтобы сгенерировать файл {' '}
        <code>tailwind.config.js</code> в директории <code>./config</code>.
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
        Добавьте пути ко всем файлам шаблонов в файл <code>./config/tailwind.config.js</code>{' '}.
      </p>
    ),
    code: {
      name: 'tailwind.config.js',
      lang: 'js',
      code: `  module.exports = {
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
        Add the <code>@tailwind</code> directives for each of Tailwind's layers to your{' '}
        <code>application.tailwind.css</code> file located in the{' '}
        <code>./app/assets/stylesheets</code> directory.
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
      description="Настройка Tailwind CSS в проекте Ruby on Rails v7+."
    >
      <div className="relative z-10 prose prose-slate mb-16 max-w-3xl dark:prose-dark">
        <p>
          Самый быстрый способ начать использовать Tailwind CSS в проекте Rails — использовать{' '}
          <a href="https://github.com/rails/tailwindcss-rails">Tailwind CSS для Rails</a>, запустив{' '}
          <code>rails new my-app --css tailwind</code>.
          Это автоматически настроит вашу настройку Tailwind на основе официального примера Rails.
          Если вы хотите настроить Tailwind вручную, перейдите к остальной части этого руководства.
        </p>
      </div>
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

UsingRails.layoutProps = {
  meta: {
    title: 'Установите Tailwind CSS с Ruby on Rails',
    section: 'Установка',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
