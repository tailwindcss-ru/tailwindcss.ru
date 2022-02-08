import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { FrameworkGuideLayout } from '@/layouts/FrameworkGuideLayout'
import { Steps } from '@/components/Steps'

let steps = [
  {
    title: 'Создайте свой проект',
    body: () => (
      <p>
        Начните с создания нового проекта Nuxt.js, если он у вас еще не настроен.
        Наиболее распространенный подход — использовать{' '}
        <a href="https://nuxtjs.org/guides/get-started/installation">Create Nuxt App</a>.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npx create-nuxt-app my-project\ncd my-project',
    },
  },
  {
    title: 'Установите Tailwind CSS',
    body: () => (
      <>
        <p>
          Используя npm, установите <code>tailwindcss</code> и его одноранговые зависимости, а также{' '}
          <code>@nuxt/postcss8</code>, а затем запустите команду init для создания файла{' '}
          <code>tailwind.config.js</code>.
        </p>
        <p className="mt-3 text-xs italic">
          Использование <code>@latest</code> необходимо, поскольку Nuxt по умолчанию устанавливает PostCSS v7 и Autoprefixer v9.
        </p>
      </>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npm install -D tailwindcss postcss@latest autoprefixer@latest @nuxt/postcss8\nnpx tailwindcss init',
    },
  },
  {
    title: 'Включить плагин Nuxt.js PostCSS',
    body: () => (
      <p>
        В файле <code>nuxt.config.js</code> включите <code>@nuxt/postcss8</code> подключаемый плагин.
      </p>
    ),
    code: {
      name: 'nuxt.config.js',
      lang: 'js',
      code: `  export default {
    buildModules: [
>     '@nuxt/postcss8',
      // ...
    ],
  }`,
    },
  },
  {
    title: 'Добавьте Tailwind в свою конфигурацию PostCSS',
    body: () => (
      <p>
        Добавьте <code>tailwindcss</code> и <code>autoprefixer</code> в объект{' '}
        <code>build.postcss.plugins</code> вашего файла <code>nuxt.config.js</code>.
      </p>
    ),
    code: {
      name: 'nuxt.config.js',
      lang: 'js',
      code: `  export default {
    build: {
>     postcss: {
>       plugins: {
>         tailwindcss: {},
>         autoprefixer: {},
>       },
>     },
    }
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
      code: `  module.exports = {
>   content: [
>     "./components/**/*.{js,vue,ts}",
>     "./layouts/**/*.vue",
>     "./pages/**/*.vue",
>     "./plugins/**/*.{js,ts}",
>     "./nuxt.config.{js,ts}",
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
        Создайте файл <code>./assets/css/main.css</code> и добавьте директивы <code>@tailwind</code>{' '}
        для каждого слоя Tailwind.
      </p>
    ),
    code: {
      name: 'main.css',
      lang: 'css',
      code: '@tailwind base;\n@tailwind components;\n@tailwind utilities;',
    },
  },
  {
    title: 'Импортируйте файл CSS',
    body: () => (
      <p>
        Добавьте только что созданный файл <code>./assets/css/main.css</code>
        в массив <code>css</code> в файле <code>nuxt.config.js</code>.
      </p>
    ),
    code: {
      name: 'nuxt.config.js',
      lang: 'js',
      code: `  export default {
    css: [
>     '@/assets/css/main.css',
    ],
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

export default function UsingNextJS({ code }) {
  return (
    <FrameworkGuideLayout
      title="Установите Tailwind CSS с Nuxt.js"
      description="Настройка Tailwind CSS в проекте Nuxt.js."
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
        if (code.lang && code.lang !== 'terminal') {
          return highlightCode(code.code, code.lang)
        }
        return code.code
      }),
    },
  }
}

UsingNextJS.layoutProps = {
  meta: {
    title: 'Установите Tailwind CSS с Nuxt.js',
    section: 'Установка',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
