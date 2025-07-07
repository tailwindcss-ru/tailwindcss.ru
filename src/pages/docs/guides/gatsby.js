import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { FrameworkGuideLayout } from '@/layouts/FrameworkGuideLayout'
import { Steps } from '@/components/Steps'

let steps = [
  {
    title: 'Создайте свой проект',
    body: () => (
      <p>
        Начните с создания нового проекта Gatsby, если у вас его еще нет. Наиболее распространенный подход — использовать{' '}
        <a href="https://www.gatsbyjs.com/docs/reference/gatsby-cli/#how-to-use-gatsby-cli">Gatsby CLI</a>.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'gatsby new my-project\ncd my-project',
    },
  },
  {
    title: 'Установите Tailwind CSS',
    body: () => (
      <p>
        Используя npm, установите <code>tailwindcss</code> и его одноранговые зависимости, а также{' '}
        <code>gatsby-plugin-postcss</code>, а затем запустите команду init для создания обоих{' '}
        <code>tailwind.config.js</code> и <code>postcss.config.js</code>.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npm install -D tailwindcss@3 postcss autoprefixer gatsby-plugin-postcss\nnpx tailwindcss init -p',
    },
  },
  {
    title: 'Включить плагин Gatsby PostCSS',
    body: () => (
      <p>
        В файле <code>gatsby-config.js</code> включите <code>gatsby-plugin-postcss</code>.
        Дополнительную информацию смотрите в{' '}
        <a href="https://www.gatsbyjs.com/plugins/gatsby-plugin-postcss/">
          документации подключаемого плагина
        </a>{''}.
      </p>
    ),
    code: {
      name: 'gatsby-config.js',
      lang: 'js',
      code: `  module.exports = {
    plugins: [
>     'gatsby-plugin-postcss',
      // ...
    ],
  }`,
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
>     "./src/pages/**/*.{js,jsx,ts,tsx}",
>     "./src/components/**/*.{js,jsx,ts,tsx}",
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
        Создайте файл <code>./src/styles/global.css</code> и добавьте директивы <code>@tailwind</code>{' '}
        для каждого слоя Tailwind.
      </p>
    ),
    code: {
      name: 'global.css',
      lang: 'css',
      code: '@tailwind base;\n@tailwind components;\n@tailwind utilities;',
    },
  },
  {
    title: 'Импортируйте файл CSS',
    body: () => (
      <p>
        Создайте файл <code>gatsby-browser.js</code> в корне вашего проекта, если он еще не существует, и импортируйте только что созданный файл <code>./src/styles/global.css</code>.
      </p>
    ),
    code: {
      name: 'gatsby-browser.js',
      lang: 'css',
      code: `> import './src/styles/global.css'`,
    },
  },
  {
    title: 'Начните процесс сборки',
    body: () => (
      <p>
        Запустите процесс сборки с помощью <code>gatsby develop</code>.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'gatsby develop',
    },
  },
  {
    title: 'Начните использовать Tailwind в своем проекте',
    body: () => <p>Начните использовать классы утилит Tailwind для оформления своего контента.</p>,
    code: {
      name: 'index.js',
      lang: 'jsx',
      code: `  export default function IndexPage() {
    return (
      <Layout>
>       <h1 className="text-3xl font-bold underline">
>         Hello world!
>       </h1>
      </Layout>
    )
  }`,
    },
  },
]

export default function UsingGatsby({ code }) {
  return (
    <FrameworkGuideLayout
      title="Установите Tailwind CSS с Gatsby"
      description="Настройте Tailwind CSS в проекте Gatsby."
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

UsingGatsby.layoutProps = {
  meta: {
    title: 'Установите Tailwind CSS с Gatsby',
    description: 'Настройте Tailwind CSS в проекте Gatsby.',
    section: 'Установка',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
