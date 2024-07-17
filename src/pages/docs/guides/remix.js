import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { FrameworkGuideLayout } from '@/layouts/FrameworkGuideLayout'
import { Steps } from '@/components/Steps'

let steps = [
  {
    title: 'Создайте свой проект',
    body: () => (
      <p>
        Начните с создания нового проекта Remix, если у вас его еще нет. Самый распространенный
        подход — использовать <a href="https://remix.run/docs">Создать Remix</a>.
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
        Установите <code>tailwindcss</code> через npm, а затем запустите команду init для генерации
        файлов <code>tailwind.config.ts</code> и <code>postcss.config.js</code>.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init --ts -p',
    },
  },
  {
    title: 'Настройте пути к шаблону',
    body: () => (
      <p>
        Добавьте пути ко всем файлам шаблонов в файл <code>tailwind.config.ts</code>.
      </p>
    ),
    code: {
      name: 'tailwind.config.ts',
      lang: 'ts',
      code: `  import type { Config } from 'tailwindcss'

  export default {
>   content: ['./app/**/*.{js,jsx,ts,tsx}'],
    theme: {
      extend: {},
    },
    plugins: [],
  } satisfies Config`,
    },
  },
  {
    title: 'Добавьте директивы Tailwind в свой CSS',
    body: () => (
      <p>
        Создайте файл <code>./app/tailwind.css</code> и добавьте директивы <code>@tailwind</code>
        для каждого слоя Tailwind.
      </p>
    ),
    code: {
      name: 'tailwind.css',
      lang: 'css',
      code: '@tailwind base;\n@tailwind components;\n@tailwind utilities;',
    },
  },
  {
    title: 'Импортируйте файл CSS',
    body: () => (
      <p>
        Импортируйте вновь созданный файл <code>./app/tailwind.css</code> в свой файл{' '}
        <code>./app/root.tsx</code>.
      </p>
    ),
    code: {
      name: 'root.tsx',
      lang: 'tsx',
      code: `import type { LinksFunction } from "@remix-run/node";
import stylesheet from "~/tailwind.css?url";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];`,
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
      name: '_index.tsx',
      lang: 'tsx',
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
      description="Настройте Tailwind CSS в проекте Remix."
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

UsingRemix.layoutProps = {
  meta: {
    title: 'Установите Tailwind CSS c Remix',
    description: 'Настройка Tailwind CSS в проекте Remix.',
    section: 'Установка',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
