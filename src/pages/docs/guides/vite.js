import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { FrameworkGuideLayout } from '@/layouts/FrameworkGuideLayout'
import { Steps } from '@/components/Steps'

let steps = [
  {
    title: 'Создайте свой проект',
    body: () => (
      <p>
        Начните с создания нового проекта Vite, если у вас его еще нет.
        Самый распространенный подход — использовать{' '}
        <a href="https://github.com/vitejs/vite/tree/main/packages/create-vite#readme">
          Create Vite
        </a>.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npm init vite my-project\ncd my-project',
    },
  },
  {
    title: 'Установите Tailwind CSS',
    body: () => (
      <p>
        Установите <code>tailwindcss</code> и его одноранговые зависимости через npm, а затем запустите команду init,
        чтобы сгенерировать как <code>tailwind.config.js</code>, так и <code>postcss.config.js</code>.
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
        Создайте файл <code>./src/index.css</code> и добавьте директивы <code>@tailwind</code> для каждого слоя Tailwind.
      </p>
    ),
    code: {
      name: 'index.css',
      lang: 'css',
      code: '@tailwind base;\n@tailwind components;\n@tailwind utilities;',
    },
  },
  {
    title: 'Импортируйте файл CSS',
    body: () => (
      <p>
        Импортируйте только что созданный файл <code>./src/index.css</code> в ваш файл{' '}
        <code>./src/main.js</code>.
      </p>
    ),
    code: {
      name: 'main.js',
      lang: 'js',
      code: `  import { createApp } from 'vue'
  import App from './App.vue'
> import './index.css'

  createApp(App).mount('#app')`,
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
      name: 'App.vue',
      lang: 'html',
      code: `  <template>
>   <h1 class="text-3xl font-bold underline">
>     Hello world!
>   </h1>
  </template>`,
    },
  },
]

export default function UsingVite({ code }) {
  return (
    <FrameworkGuideLayout
      title="Установите Tailwind CSS с Vue и and Vite"
      description="Настройка Tailwind CSS в проекте Vue 3 и Vite."
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

UsingVite.layoutProps = {
  meta: {
    title: 'Установите Tailwind CSS с Vue 3 и Vite',
    section: 'Установка',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
