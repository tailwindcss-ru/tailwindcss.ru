import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { FrameworkGuideLayout } from '@/layouts/FrameworkGuideLayout'
import { Steps } from '@/components/Steps'

let steps = [
  {
    title: 'Создайте свой проект',
    body: () => (
      <p>
        Начните с создания нового проекта SvelteKit, если он еще не настроен. Наиболее
        распространенный подход описан в{' '}
        <a href="https://kit.svelte.dev/docs#introduction-getting-started">
          начале работы со SvelteKit
        </a>{' '}
        .
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npx sv create my-project\ncd my-project',
    },
  },
  {
    title: 'Установите Tailwind CSS',
    body: () => (
      <p>
        Установите <code>tailwindcss</code> и его одноранговые зависимости, а затем создайте файлы{' '}
        <code>tailwind.config.js</code> и <code>postcss.config.js</code>.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npm install -D tailwindcss@3 postcss autoprefixer\nnpx tailwindcss init -p',
    },
  },
  {
    title: 'Включить использование PostCSS в блоках <style>',
    body: () => (
      <p>
        В файле <code>svelte.config.js</code> импортируйте <code>vitePreprocess</code>, чтобы
        разрешить обработку блоков <code>&lt;style&gt;</code> как PostCSS.
      </p>
    ),
    code: {
      name: 'svelte.config.js',
      lang: 'js',
      code: `  import adapter from '@sveltejs/adapter-auto';
> import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
  /** @type {import('@sveltejs/kit').Config} */
  const config = {
    kit: {
      adapter: adapter()
    },
>   preprocess: vitePreprocess()
  };
  export default config;`,
    },
  },
  {
    title: 'Настройте пути к шаблону',
    body: () => (
      <p>
        Добавьте пути ко всем файлам вашего шаблона в файл <code>tailwind.config.js</code> file.
      </p>
    ),
    code: {
      name: 'tailwind.config.js',
      lang: 'javascript',
      code: `  /** @type {import('tailwindcss').Config} */
  export default {
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
        Создайте файл <code>./src/app.css</code> и добавьте директивы <code>@tailwind</code> для
        каждого слоя Tailwind.
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
        Создайте файл <code>./src/routes/+layout.svelte</code> и импортируйте только что созданный
        файл <code>app.css</code>.
      </p>
    ),
    code: {
      name: '+layout.svelte',
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
    body: () => (
      <p>
        Начните использовать классы-утилиты Tailwind для стилизации своего контента, установив{' '}
        <code>lang="postcss"</code> для всех блоков <code>&lt;style&gt;</code>,
        которые должны обрабатываться Tailwind.
      </p>
    ),
    code: {
      name: '+page.svelte',
      lang: 'html',
      code: `> <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>

> <style lang="postcss">
    :global(html) {
      background-color: theme(colors.gray.100);
    }
  </style>`,
    },
  },
]

export default function UsingSvelteKit({ code }) {
  return (
    <FrameworkGuideLayout
      title="Установите Tailwind CSS с SvelteKit"
      description="Настройте Tailwind CSS в проекте SvelteKit."
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

UsingSvelteKit.layoutProps = {
  meta: {
    title: 'Установите Tailwind CSS c SvelteKit',
    description: 'Настройка Tailwind CSS в проекте SvelteKit.',
    section: 'Начало работы',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
