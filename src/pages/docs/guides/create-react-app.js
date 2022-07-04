import Link from 'next/link'
import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { FrameworkGuideLayout } from '@/layouts/FrameworkGuideLayout'
import { Steps } from '@/components/Steps'

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
        Установите <code>tailwindcss</code> и его одноранговые зависимости через npm,
        а затем запустите команду init, чтобы сгенерировать как <code>tailwind.config.js</code>,
        так и <code>postcss.config.js</code>.
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
      code: `  module.exports = {
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
      description="Настройка Tailwind CSS в проекте Create React App."
    >
      <div className="relative z-10 prose prose-slate mb-16 max-w-3xl dark:prose-dark">
        <p>
          Note that for new React projects, we highly recommend using{' '}
          <Link href="https://vitejs.dev">
            <a>Vite</a>
          </Link>
          ,{' '}
          <Link href="https://nextjs.org">
            <a>Next.js</a>
          </Link>
          ,{' '}
          <Link href="https://remix.run">
            <a>Remix</a>
          </Link>
          , or{' '}
          <Link href="https://parceljs.org">
            <a>Parcel</a>
          </Link>{' '}
          instead of Create React App. They provide an equivalent or better developer experience but
          with more flexibility, giving you more control over how Tailwind and PostCSS are
          configured.
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

UsingCRA.layoutProps = {
  meta: {
    title: 'Установите Tailwind CSS с помощью Create React App',
    section: 'Установка',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
