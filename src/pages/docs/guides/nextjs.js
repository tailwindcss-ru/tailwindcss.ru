import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { FrameworkGuideLayout } from '@/layouts/FrameworkGuideLayout'
import { Steps } from '@/components/Steps'

let steps = [
  {
    title: 'Создайте свой проект',
    body: () => (
      <p>
        Начните с создания нового проекта Next.js, если у вас его еще нет. Наиболее распространенный
        подход — использовать{' '}
        <a href="https://nextjs.org/docs/api-reference/create-next-app">Create Next App</a>.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npx create-next-app@latest my-project --typescript --eslint\ncd my-project',
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
        Добавьте пути ко всем файлам вашего шаблона в файл <code>tailwind.config.js</code>.
      </p>
    ),
    code: {
      name: 'tailwind.config.js',
      lang: 'js',
      code: `  /** @type {import('tailwindcss').Config} */
  module.exports = {
>   content: [
>     "./app/**/*.{js,ts,jsx,tsx,mdx}",
>     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
>     "./components/**/*.{js,ts,jsx,tsx,mdx}",
>
>     // Or if using \`src\` directory:
>     "./src/**/*.{js,ts,jsx,tsx,mdx}",
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
        Добавьте директивы <code>@tailwind</code> для каждого слоя Tailwind в свой файл{' '}
        <code>globals.css</code> file.
      </p>
    ),
    code: {
      name: 'globals.css',
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
    body: () => <p>Начните использовать классы утилит Tailwind для оформления своего контента.</p>,
    code: {
      name: 'index.tsx',
      lang: 'jsx',
      code: `  export default function Home() {
    return (
>     <h1 className="text-3xl font-bold underline">
>       Hello world!
>     </h1>
    )
  }`,
    },
  },
]

export default function UsingNextJs({ code }) {
  return (
    <FrameworkGuideLayout
      title="Установите Tailwind CSS с помощью Next.js"
      description="Настройте Tailwind CSS в проекте Next.js."
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

UsingNextJs.layoutProps = {
  meta: {
    title: 'Установите Tailwind CSS с помощью Next.js',
    description: 'Настройте Tailwind CSS в проекте Next.js v10+.',
    section: 'Установка',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
