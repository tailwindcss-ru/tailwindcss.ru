import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { FrameworkGuideLayout } from '@/layouts/FrameworkGuideLayout'
import { Steps } from '@/components/Steps'

let steps = [
  {
    title: 'Создайте свой проект',
    body: () => (
      <p>
        Начните с создания нового проекта SolidJS, если он еще не настроен.
        Самый распространенный подход — использовать{' '}
        <a href="https://www.solidjs.com/guides/getting-started">шаблон SolidJS Vite</a>.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npx degit solidjs/templates/js my-project\ncd my-project',
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
>     "./src/**/*.{js,jsx,ts,tsx}",
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
        <code>./src/index.css</code>.
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
    body: () => <p>Начните использовать служебные классы Tailwind для оформления своего контента.</p>,
    code: {
      name: 'App.jsx',
      lang: 'jsx',
      code: `  export default function App() {
    return (
>     <h1 class="text-3xl font-bold underline">
>       Hello world!
>     </h1>
    )
  }`,
    },
  },
]

export default function UsingSolidJS({ code }) {
  return (
    <FrameworkGuideLayout
      title="Установите Tailwind CSS c SolidJS"
      description="Настройка Tailwind CSS в проекте SolidJS."
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

UsingSolidJS.layoutProps = {
  meta: {
    title: 'Установите Tailwind CSS c SolidJS',
    description: 'Настройка Tailwind CSS в проекте SolidJS.',
    section: 'Installation',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
