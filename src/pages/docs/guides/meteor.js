import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { FrameworkGuideLayout } from '@/layouts/FrameworkGuideLayout'
import { Steps } from '@/components/Steps'

let steps = [
  {
    title: 'Создайте свой проект',
    body: () => (
      <p>
        Начните с создания нового проекта Meteor, если у вас его еще нет.
        Самый распространенный подход — использовать{' '}
        <a href="https://www.meteor.com/developers/install">Meteor CLI</a>.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'meteor create my-project\ncd my-project',
    },
  },
  {
    title: 'Установите Tailwind CSS',
    body: () => (
      <p>
        Установите <code>tailwindcss</code>и его одноранговые зависимости через npm, а затем запустите команду init,
        чтобы сгенерировать как <code>tailwind.config.js</code>, так и <code>postcss.config.js</code>.
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
  module.exports = {
>   content: [
>     "./imports/ui/**/*.{js,jsx,ts,tsx}",
>     "./client/*.html",
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
        <code>./client/main.css</code>.
      </p>
    ),
    code: {
      name: 'main.css',
      lang: 'css',
      code: '@tailwind base;\n@tailwind components;\n@tailwind utilities;',
    },
  },
  {
    title: 'Начните процесс сборки',
    body: () => (
      <p>
        Запустите процесс сборки с помощью <code>npm run start</code>.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npm run start',
    },
  },
  {
    title: 'Начните использовать Tailwind в своем проекте',
    body: () => <p>Начните использовать служебные классы Tailwind для оформления своего контента.</p>,
    code: {
      name: 'App.jsx',
      lang: 'jsx',
      code: `  export const App = () => (
>   <h1 className="text-3xl font-bold underline">
>     Hello world!
>   </h1>
  )`,
    },
  },
]

export default function UsingMeteor({ code }) {
  return (
    <FrameworkGuideLayout
      title="Установите Tailwind CSS c Meteor"
      description="Настройка Tailwind CSS в проекте Meteor."
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

UsingMeteor.layoutProps = {
  meta: {
    title: 'Установите Tailwind CSS c Meteor',
    description: 'Настройка Tailwind CSS в проекте Meteor.',
    section: 'Начало работы',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
