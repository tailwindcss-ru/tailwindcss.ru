import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { FrameworkGuideLayout } from '@/layouts/FrameworkGuideLayout'
import { Steps } from '@/components/Steps'

let steps = [
  {
    title: 'Создайте свой проект',
    body: () => (
      <p>
        Начните с создания нового проекта Remix, если у вас его еще нет.
        Самый распространенный подход — использовать <a href="https://remix.run/docs/en/v1">Create Remix</a>.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npx create-remix@latest my-project\ncd my-project',
    },
  },
  {
    title: 'Установите Tailwind CSS',
    body: () => (
      <p>
        Установите <code>tailwindcss</code>, его одноранговые зависимости и <code>concurrently</code> через npm,
        а затем запустите команду init, чтобы сгенерировать как <code>tailwind.config.js</code>, так и <code>postcss.config.js</code>.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npm install -D tailwindcss postcss autoprefixer concurrently\nnpx tailwindcss init -p',
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
>     "./app/**/*.{js,ts,jsx,tsx}",
>   ],
    theme: {
      extend: {},
    },
    plugins: [],
  }`,
    },
  },
  {
    title: 'Обновите скрипты package.json',
    body: () => (
      <p>
        Обновите сценарии в файле <code>package.json</code>, чтобы создать CSS для разработки и продакшена.
      </p>
    ),
    code: {
      name: 'package.json',
      lang: 'json5',
      code: `  {
    "scripts": {
>     "build": "npm run build:css && remix build",
>     "build:css": "tailwindcss -m -i ./styles/app.css -o app/styles/app.css",
>     "dev": "concurrently \\\"npm run dev:css\\\" \\\"remix dev\\\"",
>     "dev:css": "tailwindcss -w -i ./styles/app.css -o app/styles/app.css",
    }
  }`,
    },
  },
  {
    title: 'Добавьте директивы Tailwind в свой CSS',
    body: () => (
      <p>
        Создайте файл <code>./styles/app.css</code> и добавьте директивы <code>@tailwind</code> для каждого слоя Tailwind.
      </p>
    ),
    code: {
      name: 'app.css',
      lang: 'css',
      code: '@tailwind base;\n@tailwind components;\n@tailwind utilities;',
    },
  },
  {
    title: 'Импортируйте файл CSS',
    body: () => (
      <p>
        Импортируйте скомпилированный файл <code>./app/styles/app.css</code> в свой файл <code>./app/root.jsx</code>.
      </p>
    ),
    code: {
      name: 'root.jsx',
      lang: 'js',
      code: `import styles from "./styles/app.css"

export function links() {
  return [{ rel: "stylesheet", href: styles }]
}`,
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
      name: 'index.jsx',
      lang: 'jsx',
      code: `  export default function Index() {
    return (
>     <h1 className="text-3xl font-bold underline">
>       Hello world!
>     </h1>
    )
  }`,
    },
  },
]

export default function UsingRemix({ code }) {
  return (
    <FrameworkGuideLayout
      title="Установите Tailwind CSS с Remix"
      description="Настройка Tailwind CSS в проекте Remix."
    >
      <Steps steps={steps} code={code} />
    </FrameworkGuideLayout>
  )
}

export function getStaticProps() {
  let { highlightCode } = require('../../../../remark/utils')

  return {
    props: {
      code: steps.map(({ code }) => {
        let isArray = Array.isArray(code)
        code = isArray ? code : [code]
        code = code.map((code) => {
          if (code.lang && code.lang !== 'terminal') {
            return highlightCode(code.code, code.lang)
          }
          return code.code
        })
        return isArray ? code : code[0]
      }),
    },
  }
}

UsingRemix.layoutProps = {
  meta: {
    title: 'Установите Tailwind CSS с Remix',
    section: 'Установка',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
