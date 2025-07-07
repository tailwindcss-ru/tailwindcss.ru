import { useRouteHash } from '@/hooks/useRouteHash'
import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { FrameworkGuideLayout } from '@/layouts/FrameworkGuideLayout'
import { Steps } from '@/components/Steps'
import { TabBar } from '@/components/Guides/TabBar.jsx'

let tabs = [
  {
    name: 'Стандартная установка',
    href: '#standard',
    steps: [
      {
        title: 'Создайте свой проект',
        body: () => (
          <p>
            Начните с создания нового проекта Nuxt, если он у вас еще не настроен. Самый
            распространенный подход — использовать{' '}
            <a href="https://nuxt.com/docs/getting-started/installation">
              интерфейс командной строки Nuxt
            </a>
            .
          </p>
        ),
        code: {
          name: 'Terminal',
          lang: 'terminal',
          code: 'npx nuxi init my-project\ncd my-project',
        },
      },
      {
        title: 'Установите Tailwind CSS',
        body: () => (
          <p>
            Установите <code>tailwindcss</code> и его одноранговые зависимости через npm, а затем
            запустите команду init для создания файла <code>tailwind.config.js</code>.
          </p>
        ),
        code: {
          name: 'Terminal',
          lang: 'terminal',
          code: 'npm install -D tailwindcss@3 postcss autoprefixer\nnpx tailwindcss init',
        },
      },
      {
        title: 'Добавьте Tailwind в свою конфигурацию PostCSS',
        body: () => (
          <p>
            Добавьте <code>tailwindcss</code> и <code>autoprefixer</code> в объект{' '}
            <code>postcss.plugins</code> в файле <code>nuxt.config.js</code>.
          </p>
        ),
        code: {
          name: 'nuxt.config.js',
          lang: 'js',
          code: `  // https://nuxt.com/docs/api/configuration/nuxt-config
  export default defineNuxtConfig({
    devtools: { enabled: true },
>   postcss: {
>     plugins: {
>       tailwindcss: {},
>       autoprefixer: {},
>     },
>   },
  })`,
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
>     "./components/**/*.{js,vue,ts}",
>     "./layouts/**/*.vue",
>     "./pages/**/*.vue",
>     "./plugins/**/*.{js,ts}",
>     "./app.vue",
>     "./error.vue",
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
            Создайте файл <code>./assets/css/main.css</code> и добавьте директивы{' '}
            <code>@tailwind</code> для каждого слоя Tailwind.
          </p>
        ),
        code: {
          name: 'main.css',
          lang: 'css',
          code: '@tailwind base;\n@tailwind components;\n@tailwind utilities;',
        },
      },
      {
        title: 'Добавьте файл CSS глобально',
        body: () => (
          <p>
            Добавьте только что созданный файл <code>./assets/css/main.css</code>в массив{' '}
            <code>css</code> в файле <code>nuxt.config.js</code>.
          </p>
        ),
        code: {
          name: 'nuxt.config.js',
          lang: 'js',
          code: `  // https://nuxt.com/docs/api/configuration/nuxt-config
  export default defineNuxtConfig({
    devtools: { enabled: true },
>   css: ['~/assets/css/main.css'],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  })`,
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
          <p>Начните использовать служебные классы Tailwind для оформления своего контента.</p>
        ),
        code: {
          name: 'app.vue',
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
  {
    name: 'Использование модулей Nuxt',
    href: '#modules',
    steps: [
      {
        title: 'Создайте свой проект',
        body: () => (
          <p>
            Начните с создания нового проекта Nuxt, если он у вас еще не настроен. Самый
            распространенный подход — использовать{' '}
            <a href="https://nuxt.com/docs/getting-started/installation">
              интерфейс командной строки Nuxt
            </a>
            .
          </p>
        ),
        code: {
          name: 'Terminal',
          lang: 'terminal',
          code: 'npx nuxi init my-project\ncd my-project',
        },
      },
      {
        title: 'Установите Tailwind CSS',
        body: () => (
          <p>
            Используя nuxi, установите модуль <code>@nuxtjs/tailwindcss</code>, а затем запустите
            команду init, чтобы создать файл <code>tailwind.config.js</code>.
          </p>
        ),
        code: {
          name: 'Terminal',
          lang: 'terminal',
          code: 'npm install\nnpx nuxi module add @nuxtjs/tailwindcss\nnpx tailwindcss init',
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
          name: 'app.vue',
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

export default function UsingNuxtJs({ code }) {
  let hash = useRouteHash()

  let selectedTabIndex = tabs.findIndex((tab) => tab.href === hash)

  if (selectedTabIndex === -1) {
    selectedTabIndex = 0
  }

  return (
    <FrameworkGuideLayout
      title="Установите Tailwind CSS с помощью Nuxt"
      description="Настройка Tailwind CSS в проекте Nuxt."
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

UsingNuxtJs.layoutProps = {
  meta: {
    title: 'Установите Tailwind CSS с помощью Nuxt',
    description: 'Настройка Tailwind CSS в проекте Nuxt.',
    section: 'Installation',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
