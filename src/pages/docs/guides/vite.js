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
            Начните с создания нового проекта Vite, если у вас его еще нет. Самый распространенный
            подход — использовать{' '}
            <a href="https://github.com/vitejs/vite/tree/main/packages/create-vite#readme">
              Create Vite
            </a>
            .
          </p>
        ),
        code: {
          name: 'Терминал',
          lang: 'terminal',
          code: 'npm create vite@latest my-project -- --template react\ncd my-project',
        },
      },
      {
        title: 'Установите Tailwind CSS',
        body: () => (
          <p>
            Установите <code>tailwindcss</code> и его одноранговые зависимости через npm, а затем
            запустите команду init, чтобы сгенерировать как <code>tailwind.config.cjs</code>, так и{' '}
            <code>postcss.config.cjs</code>.
          </p>
        ),
        code: {
          name: 'Терминал',
          lang: 'terminal',
          code: 'npm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init -p',
        },
      },
      {
        title: 'Настройте пути к шаблону',
        body: () => (
          <p>
            Добавьте пути ко всем файлам вашего шаблона в файл <code>tailwind.config.cjs</code> .
          </p>
        ),
        code: {
          name: 'tailwind.config.cjs',
          lang: 'js',
          code: `  /** @type {import('tailwindcss').Config} */
  module.exports = {
>   content: [
>     "./index.html",
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
          name: 'Терминал',
          lang: 'terminal',
          code: 'npm run dev',
        },
      },
      {
        title: 'Начните использовать Tailwind в своем проекте',
        body: () => (
          <p>Начните использовать служебные классы Tailwind для оформления своего контента.</p>
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
    name: 'Используя Vue',
    href: '#vue',
    steps: [
      {
        title: 'Создайте свой проект',
        body: () => (
          <p>
            Начните с создания нового проекта Vite, если у вас его еще нет. Самый распространенный
            подход — использовать{' '}
            <a href="https://github.com/vitejs/vite/tree/main/packages/create-vite#readme">
              Создать Vite
            </a>
            .
          </p>
        ),
        code: {
          name: 'Терминал',
          lang: 'terminal',
          code: 'npm create vite@latest my-project -- --template vue\ncd my-project',
        },
      },
      {
        title: 'Установите Tailwind CSS',
        body: () => (
          <p>
            Установите <code>tailwindcss</code> и его одноранговые зависимости через npm, а затем
            запустите команду init, чтобы сгенерировать как <code>tailwind.config.cjs</code>, так и{' '}
            <code>postcss.config.cjs</code>.
          </p>
        ),
        code: {
          name: 'Терминал',
          lang: 'terminal',
          code: 'npm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init -p',
        },
      },
      {
        title: 'Настройте пути к шаблону',
        body: () => (
          <p>
            Добавьте пути ко всем файлам вашего шаблона в файл <code>tailwind.config.cjs</code> .
          </p>
        ),
        code: {
          name: 'tailwind.config.cjs',
          lang: 'js',
          code: `  /** @type {import('tailwindcss').Config} */
  module.exports = {
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
            Добавьте директивы <code>@tailwind</code> для каждого из слоев Tailwind в ваш файл{' '}
            <code>./src/style.css</code>.
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
            Run your build process with <code>npm run dev</code>.
          </p>
        ),
        code: {
          name: 'Терминал',
          lang: 'terminal',
          code: 'npm run dev',
        },
      },
      {
        title: 'Начните использовать Tailwind в своем проекте',
        body: () => (
          <p>Начните использовать служебные классы Tailwind для оформления своего контента.</p>
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

export default function UsingVite({ code }) {
  let hash = useRouteHash()

  let selectedTabIndex = tabs.findIndex((tab) => tab.href === hash)

  if (selectedTabIndex === -1) {
    selectedTabIndex = 0
  }

  return (
    <FrameworkGuideLayout
      title="Установите Tailwind CSS с Vite"
      description="Настройка Tailwind CSS в проекте Vite."
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

UsingVite.layoutProps = {
  meta: {
    title: 'Установите Tailwind CSS с Vite',
    section: 'Установка',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
