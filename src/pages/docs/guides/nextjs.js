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
      code: 'npx create-next-app my-project\ncd my-project',
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
      code: 'npm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init -p',
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
>     "./pages/**/*.{js,ts,jsx,tsx}",
>     "./components/**/*.{js,ts,jsx,tsx}",
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
        <code>./styles/globals.css</code> file.
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
      name: 'index.js',
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

export default function UsingNextJS({ code }) {
  return (
    <FrameworkGuideLayout
      title="Установите Tailwind CSS с Next.js"
      description="Настройка Tailwind CSS в проекте Next.js v10+."
    >
      <div className="relative z-10 max-w-3xl mb-16 prose prose-slate dark:prose-dark">
        <p>
          Самый быстрый способ начать использовать Tailwind CSS в проекте Next.js – использовать{' '}
          <a href="https://github.com/vercel/next.js/tree/c3e5caf1109a2eb42801de23fc78e42a08e5da6e/examples/with-tailwindcss">
            Пример Next.js + Tailwind CSS
          </a>
          . Это автоматически настроит вашу настройку Tailwind на основе официального примера
          Next.js. Если вы хотите настроить Tailwind вручную, перейдите к остальной части этого
          руководства.
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

UsingNextJS.layoutProps = {
  meta: {
    title: 'Установите Tailwind CSS с Next.js',
    section: 'Установка',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
