import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { FrameworkGuideLayout } from '@/layouts/FrameworkGuideLayout'
import { Steps } from '@/components/Steps'

let steps = [
  {
    title: 'Создайте свой проект',
    body: () => (
      <p>
        Начните с создания нового проекта Qwik, если он у вас еще не настроен. Самый
        распространенный подход — использовать{' '}
        <a href="https://qwik.builder.io/docs/getting-started/">Create Qwik</a>.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npm create qwik@latest my-project\ncd my-project',
    },
  },
  {
    title: 'Установите Tailwind CSS',
    body: () => (
      <p>
        Установите <code>tailwindcss</code> и его одноранговые зависимости через npm, а затем
        запустите команду init, чтобы сгенерировать как <code>tailwind.config.js</code> и{' '}
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
    title: 'Настройте пути к шаблонам',
    body: () => (
      <p>
        Добавьте пути ко всем файлам шаблонов в файл <code>tailwind.config.js</code>.
      </p>
    ),
    code: {
      name: 'tailwind.config.js',
      lang: 'js',
      code: `  /** @type {import('tailwindcss').Config} */
  module.exports = {
>   content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
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
        Добавьте директивы <code>@tailwind</code> для каждого слоя Tailwind в ваш файл{' '}
        <code>./src/global.css</code>.
      </p>
    ),
    code: {
      name: 'global.css',
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
      <p>Начните использовать служебные классы Tailwind для стилизации вашего контента.</p>
    ),
    code: {
      name: 'index.tsx',
      lang: 'tsx',
      code: `  import { component$ } from '@builder.io/qwik'

  export default component$(() => {
    return (
>     <h1 class="text-3xl font-bold underline">
>       Hello World!
>     </h1>
    )
  })`,
    },
  },
]

export default function UsingQwik({ code }) {
  return (
    <FrameworkGuideLayout
      title="Установите Tailwind CSS с помощью Qwik"
      description="Настройка Tailwind CSS в проекте Qwik."
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

UsingQwik.layoutProps = {
  meta: {
    title: 'Установите Tailwind CSS с помощью Qwik',
    description: 'Настройка Tailwind CSS в проекте Qwik.',
    section: 'Getting Started',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
