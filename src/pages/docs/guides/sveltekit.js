import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { FrameworkGuideLayout } from '@/layouts/FrameworkGuideLayout'
import { Steps } from '@/components/Steps'

let steps = [
  {
    title: 'Создайте свой проект',
    body: () => (
      <p>
        Начните с создания нового проекта SvelteKit, если он еще не настроен. Наиболее распространенный подход описан в{' '}
        <a href="https://kit.svelte.dev/docs#introduction-getting-started">
          начале работы со SvelteKit
        </a>{' '}.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npm init svelte@next my-app\ncd my-app',
    },
  },
  {
    title: 'Установите Tailwind CSS',
    body: () => (
      <p>
        Используя npm, установите <code>tailwindcss</code> и его одноранговые зависимости, а также{' '}
        <code>svelte-preprocess</code>, а затем выполните следующие команды, чтобы сгенерировать оба{' '}
        <code>tailwind.config.cjs</code> и <code>postcss.config.cjs</code>.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npm install -D tailwindcss postcss autoprefixer svelte-preprocess\nnpx tailwindcss init tailwind.config.cjs -p',
    },
  },
  {
    title: 'Enable use of PostCSS in <style> blocks',
    body: () => (
      <p>
        In your <code>svelte.config.js</code> file, import <code>svelte-preprocess</code> and
        configure it to process <code>&lt;style&gt;</code> blocks as PostCSS.
      </p>
    ),
    code: {
      name: 'svelte.config.js',
      lang: 'js',
      code: `> import preprocess from "svelte-preprocess";

  const config = {
>   preprocess: [
>     preprocess({
>       postcss: true,
>     }),
>   ],
  }`,
    },
  },
  {
    title: 'Настройте пути к шаблону',
    body: () => (
      <p>
        Добавьте пути ко всем файлам шаблонов в файл <code>tailwind.config.cjs</code>.
      </p>
    ),
    code: {
      name: 'tailwind.config.cjs',
      lang: 'javascript',
      code: `  module.exports = {
>   content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
      extend: {}
    },
    plugins: []
  };`,
    },
  },
  {
    title: 'Добавьте директивы Tailwind в свой CSS',
    body: () => (
      <p>
        Создайте файл <code>./src/app.css</code> и добавьте директивы <code>@tailwind</code> для каждого слоя Tailwind.
      </p>
    ),
    code: {
      name: 'app.css',
      lang: 'css',
      code: `@tailwind base;
@tailwind components;
@tailwind utilities;`,
    },
  },
  {
    title: 'Импортируйте файл CSS',
    body: () => (
      <p>
        Создайте файл <code>./src/routes/__layout.svelte</code> и импортируйте только что созданный{' '} <code>app.css</code>.
      </p>
    ),
    code: {
      name: '__layout.svelte',
      lang: 'html',
      code: `<script>
  import "../app.css";
</script>

<slot />`,
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
      name: 'index.svelte',
      lang: 'html',
      code: `<h1 class="text-3xl font-bold underline">
  Hello world!
</h1>`,
    },
  },
]

export default function UsingSvelteKit({ code }) {
  return (
    <FrameworkGuideLayout
      title="Установите Tailwind CSS с SvelteKit"
      description="Настройка Tailwind CSS в проекте SvelteKit."
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

UsingSvelteKit.layoutProps = {
  meta: {
    title: 'Установите Tailwind CSS с SvelteKit',
    section: 'Начало работы',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
