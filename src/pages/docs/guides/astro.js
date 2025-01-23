import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { FrameworkGuideLayout } from '@/layouts/FrameworkGuideLayout'
import { Steps } from '@/components/Steps'

let steps = [
  {
    title: 'Создайте свой проект',
    body: () => (
      <p>
        Начните с создания нового проекта Astro, если он у вас еще не настроен. Самый
        распространенный подход — использовать{' '}
        <a href="https://docs.astro.build/en/getting-started/#start-your-first-project">
          create astro
        </a>
        .
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npm create astro@latest my-project\ncd my-project',
    },
  },
  {
    title: 'Установите Tailwind CSS',
    body: () => (
      <p>
        Запустите команду <code>astro add</code>, чтобы установить <code>tailwindcss</code> и{' '}
        <code>@astrojs/tailwind</code>, а также создать файл <code>tailwind.config.cjs</code>.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npx astro add tailwind',
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
      name: 'index.astro',
      lang: 'html',
      code: `<h1 class="text-3xl font-bold underline">
  Hello world!
</h1>`,
    },
  },
]

export default function UsingAstro({ code }) {
  return (
    <FrameworkGuideLayout
      title="Установите Tailwind CSS с помощью Astro"
      description="Настройка Tailwind CSS в проекте Astro."
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

UsingAstro.layoutProps = {
  meta: {
    title: 'Установите Tailwind CSS с помощью Astro',
    description: 'Настройка Tailwind CSS в проекте Astro.',
    section: 'Getting Started',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
