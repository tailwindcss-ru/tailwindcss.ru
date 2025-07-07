import { Steps } from '@/components/Steps'
import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { InstallationLayout } from '@/layouts/InstallationLayout'
import Link from 'next/link'

let steps = [
  {
    title: 'Установите Tailwind CSS',
    body: () => (
      <p>
        Установите <code>tailwindcss</code> через npm и создайте файл{' '}
        <code>tailwind.config.js</code> .
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npm install -D tailwindcss@3\nnpx tailwindcss init',
    },
  },
  {
    title: 'Настройте пути к шаблонам',
    body: () => (
      <p>
        Добавьте пути ко всем вашим файлам шаблонов в файл <code>tailwind.config.js</code>.
      </p>
    ),
    code: {
      name: 'tailwind.config.js',
      lang: 'js',
      code: `  /** @type {import('tailwindcss').Config} */
 export default {
>   content: ["./src/**/*.{html,js}"],
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
        Добавьте директивы <code>@tailwind</code> для каждого макета Tailwind в свой основной файл
        CSS.
      </p>
    ),
    code: {
      name: 'src/input.css',
      lang: 'css',
      code: '@tailwind base;\n@tailwind components;\n@tailwind utilities;',
    },
  },
  {
    title: 'Запустите процесс сборки Tailwind CLI',
    body: () => (
      <p>
        Запустите инструмент CLI, чтобы просканировать файлы шаблонов на предмет классов и создать
        свой CSS.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npx tailwindcss -i ./src/input.css -o ./src/output.css --watch',
    },
  },
  {
    title: 'Начните использовать Tailwind в своем HTML',
    body: () => (
      <p>
        Добавьте свой скомпилированный файл CSS в <code>{'<head>'}</code> и начните использовать
        классы утилиты Tailwind для стилизации вашего контента.
      </p>
    ),
    code: {
      name: 'src/index.html',
      lang: 'html',
      code: `  <!doctype html>
  <html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
>   <link href="./output.css" rel="stylesheet">
  </head>
  <body>
>   <h1 class="text-3xl font-bold underline">
>     Привет мир!
>   </h1>
  </body>
  </html>`,
    },
  },
]

export default function TailwindCli({ code }) {
  return (
    <InstallationLayout>
      <div
        id="content-wrapper"
        className="relative z-10 max-w-3xl mb-16 prose prose-slate dark:prose-dark"
      >
        <h3 className="sr-only">Installing Tailwind CLI</h3>
        <p>
          Самый простой и быстрый способ начать работу с Tailwind CSS с нуля — использовать инструмент командной строки Tailwind. Интерфейс командной строки также доступен в виде{' '}
          <Link href="/blog/standalone-cli">автономного исполняемого файла</Link>, если вы хотите использовать его без установки Node.js.
        </p>
      </div>
      <Steps level={4} steps={steps} code={code} />
      {/*
        <Cta
          label="Read the documentation"
          href="/docs/tailwind-cli"
          description={
            <>
              <strong className="font-semibold text-slate-900">
                Это только начало возможностей интерфейса командной строки Tailwind.
              </strong>{' '}
              Чтобы узнать больше обо всех его возможностях, ознакомьтесь с документацией Tailwind CLI.
            </>
          }
        />
      */}
    </InstallationLayout>
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

TailwindCli.layoutProps = {
  meta: {
    title: 'Установка',
    description:
      'Самый простой и быстрый способ начать работу с Tailwind CSS с нуля — использовать инструмент командной строки Tailwind.',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
