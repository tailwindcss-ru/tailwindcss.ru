import Link from 'next/link'
import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { FrameworkGuideLayout } from '@/layouts/FrameworkGuideLayout'
import { Steps } from '@/components/Steps'
import { Cta } from '@/components/Cta'

let steps = [
  {
    title: 'Создайте свой проект',
    body: () => (
      <p>
        Начните с создания нового проекта React с помощью{' '}
        <a href="https://create-react-app.dev/docs/getting-started">Create React App v5.0+</a>,
        если оно еще не настроено.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npx create-react-app my-project\ncd my-project',
    },
  },
  {
    title: 'Установите Tailwind CSS',
    body: () => (
      <p>
        Установите <code>tailwindcss</code> через npm, а затем запустите команду init, чтобы сгенерировать{' '}
        файл <code>tailwind.config.js</code>.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npm install -D tailwindcss@3\nnpx tailwindcss init',
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
      name: 'App.js',
      lang: 'jsx',
      code: `  export default function App() {
    return (
>     <h1 className="text-3xl font-bold underline">
>       Hello world!
>     </h1>
    )
  }`,
    },
  },
]

export default function UsingCRA({ code }) {
  return (
    <FrameworkGuideLayout
      title="Установите Tailwind CSS с помощью Create React App"
      description="Настройте Tailwind CSS в проекте Create React App."
    >
      <div hidden className="relative z-10 prose prose-slate mb-16 max-w-3xl dark:prose-dark">
        <p>
          Мы <strong>настоятельно рекомендуем</strong> использовать <Link href="https://vitejs.dev">Vite</Link>,{' '}
          <Link href="https://nextjs.org">Next.js</Link>,{' '}
          <Link href="https://remix.run">Remix</Link> или{' '}
          <Link href="https://parceljs.org">Parcel</Link> вместо Create React App. Они обеспечивают
          эквивалентный или лучший опыт разработки, но с большей гибкостью, что дает вам больше
          контроля над настройкой Tailwind и PostCSS. Приложение Create React не поддерживает
          пользовательские конфигурации PostCSS, поэтому вы не можете использовать
        </p>
      </div>

      <div className="mb-16 py-6 px-4 bg-amber-500/10 sm:p-6 lg:p-6 rounded-lg dark:bg-black/25 max-w-4xl">
        <div className="flex">
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            className="fill-amber-900 w-5 h-5 shrink-0 mt-1 mr-4 dark:fill-slate-400"
          >
            <path
              fillRule="evenodd"
              d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z"
              clipRule="evenodd"
            />
          </svg>

          <div className="text-sm leading-6 text-amber-900 dark:text-slate-400">
            <p className="font-bold dark:text-slate-200">
              Приложение Create React не поддерживает пользовательские конфигурации PostCSS
              и несовместимо со многими важными инструментами экосистемы PostCSS, такими как{' '}
              <code className="text-xs font-bold">`postcss-import`</code>.
            </p>
            <p className="mt-3">
              Мы <strong className="dark:text-slate-200">настоятельно рекомендуем</strong> использовать{' '}
              <Link href="/docs/guides/vite" className="underline font-bold dark:text-slate-200">
                Vite
              </Link>
              ,{' '}
              <Link href="/docs/guides/parcel" className="underline font-bold dark:text-slate-200">
                Parcel
              </Link>
              ,{' '}
              <Link href="/docs/guides/nextjs" className="underline font-bold dark:text-slate-200">
                Next.js
              </Link>
              , или{' '}
              <Link href="/docs/guides/remix" className="underline font-bold dark:text-slate-200">
                Remix
              </Link>{' '}
              вместо Create React App. Они обеспечивают эквивалентный или лучший опыт разработки,
              но с большей гибкостью, что дает вам больше контроля над настройкой Tailwind и PostCSS.
            </p>
          </div>
        </div>
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

UsingCRA.layoutProps = {
  meta: {
    title: 'Установите Tailwind CSS с приложением Create React',
    description: 'Настройте Tailwind CSS в проекте Create React App.',
    section: 'Установка',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
