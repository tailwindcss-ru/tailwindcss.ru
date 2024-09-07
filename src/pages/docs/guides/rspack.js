import { useRouteHash } from '@/hooks/useRouteHash'
import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { FrameworkGuideLayout } from '@/layouts/FrameworkGuideLayout'
import { Steps } from '@/components/Steps'
import { TabBar } from '@/components/Guides/TabBar.jsx'

let tabs = [
  {
    name: 'Использование React',
    href: '#react',
    steps: [
      {
        title: 'Создайте свой проект',
        body: () => (
          <p>
            Начните с создания нового проекта Rspack, если у вас его еще нет. Наиболее
            распространенный подход — использовать{' '}
            <a href="https://rspack.dev/guide/start/quick-start#using-the-rspack-cli">Rspack CLI</a>
            .
          </p>
        ),
        code: {
          name: 'Terminal',
          lang: 'terminal',
          code: 'npm create rspack@latest',
        },
      },
      {
        title: 'Установите Tailwind CSS',
        body: () => (
          <p>
            Установите <code>tailwindcss</code> и его одноранговые зависимости, затем сгенерируйте{' '}
            файлы <code>tailwind.config.js</code> и <code>postcss.config.js</code>.
          </p>
        ),
        code: {
          name: 'Terminal',
          lang: 'terminal',
          code: 'npm install -D tailwindcss postcss postcss-loader autoprefixer\nnpx tailwindcss init -p',
        },
      },
      {
        title: 'Включить поддержку PostCSS',
        body: () => (
          <p>
            В файле <code>rspack.config.js</code> включите загрузчик PostCSS. Для получения
            дополнительной информации смотрите{' '}
            <a href="https://rspack.dev/guide/tech/css#tailwind-css">документацию</a> .
          </p>
        ),
        code: {
          name: 'rspack.config.js',
          lang: 'js',
          code: `  module.exports = {
    // ...
    module: {
      rules: [
>       {
>         test: /\\.css$/,
>         use: ["postcss-loader"],
>         type: "css",
>       },
    // ...`,
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
  export default {
>   content: [
>     "./src/**/*.{js,ts,jsx,tsx}",
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
            Добавьте директивы <code>@tailwind</code> для каждого слоя Tailwind в ваш файл{' '}
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
        body: () => (
          <p>Начните использовать служебные классы Tailwind для стилизации вашего контента.</p>
        ),
        code: {
          name: 'App.jsx',
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
    ],
  },
  {
    name: 'Использование Vue',
    href: '#vue',
    steps: [
      {
        title: 'Создайте свой проект',
        body: () => (
          <p>
            Начните с создания нового проекта Rspack, если у вас его еще нет. Наиболее
            распространенный подход — использовать{' '}
            <a href="https://rspack.dev/guide/start/quick-start#using-the-rspack-cli">Rspack CLI</a>
            .
          </p>
        ),
        code: {
          name: 'Terminal',
          lang: 'terminal',
          code: 'npm create rspack@latest',
        },
      },
      {
        title: 'Установите Tailwind CSS',
        body: () => (
          <p>
            Установите <code>tailwindcss</code> и его одноранговые зависимости, затем сгенерируйте{' '}
            файлы <code>tailwind.config.js</code> и <code>postcss.config.js</code>.
          </p>
        ),
        code: {
          name: 'Terminal',
          lang: 'terminal',
          code: 'npm install -D tailwindcss postcss postcss-loader autoprefixer\nnpx tailwindcss init -p',
        },
      },
      {
        title: 'Включите поддержку PostCSS',
        body: () => (
          <p>
            В файле <code>rspack.config.js</code> включите загрузчик PostCSS. Для получения
            дополнительной информации смотрите{' '}
            <a href="https://rspack.dev/guide/tech/css#tailwind-css">документацию</a> .
          </p>
        ),
        code: {
          name: 'rspack.config.js',
          lang: 'js',
          code: `  module.exports = {
    // ...
    module: {
      rules: [
>       {
>         test: /\\.css$/,
>         use: ["postcss-loader"],
>         type: "css",
>       },
    // ...`,
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
  export default {
>   content: [
>     "./index.html",
>     "./src/**/*.{vue,js,ts,jsx,tsx}",
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
            Добавьте директивы <code>@tailwind</code> для каждого слоя Tailwind в ваш файл{' '}
            <code>./src/index.css</code>.
          </p>
        ),
        code: {
          name: 'style.css',
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
          name: 'App.vue',
          lang: 'html',
          code: `  <template>
>   <h1 class="text-3xl font-bold underline">
>     Hello world!
>   </h1>
  </template>`,
        },
      },
    ],
  },
]

export default function UsingRspack({ code }) {
  let hash = useRouteHash()

  let selectedTabIndex = tabs.findIndex((tab) => tab.href === hash)

  if (selectedTabIndex === -1) {
    selectedTabIndex = 0
  }

  return (
    <FrameworkGuideLayout
      title="Установите Tailwind CSS с помощью Rspack"
      description="Настройка Tailwind CSS в проекте Rspack."
    >
      <TabBar tabs={tabs} selectedTabIndex={selectedTabIndex} />
      <Steps steps={tabs[selectedTabIndex].steps} code={code[selectedTabIndex]} />
    </FrameworkGuideLayout>
  )
}

export function getStaticProps() {
  let { highlightedCodeSnippets } = require('@/components/Guides/Snippets.js')

  return {
    props: {
      code: tabs.map((tab) => highlightedCodeSnippets(tab.steps)),
    },
  }
}

UsingRspack.layoutProps = {
  meta: {
    title: 'Установите Tailwind CSS с помощью Rspack',
    description: 'Настройка Tailwind CSS в проекте Rspack.',
    section: 'Installation',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
