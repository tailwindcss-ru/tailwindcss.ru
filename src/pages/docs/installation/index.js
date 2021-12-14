import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { InstallationLayout } from '@/layouts/InstallationLayout'
import { Cta } from '@/components/Cta'
import { Steps } from '@/components/Steps'

let steps = [
  {
    title: 'Установка Tailwind CSS',
    body: () => (
      <p>
        Установите <code>tailwindcss</code> через npm и создайте файл <code>tailwind.config.js</code>{' '}.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npm install -D tailwindcss\nnpx tailwindcss init',
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
      code: `  module.exports = {
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
        Добавьте директивы <code>@tailwind</code> для каждого макета Tailwind в свой основной файл CSS.
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
    body: () => <p>Запустите инструмент CLI, чтобы просканировать файлы шаблонов на предмет классов и создать свой CSS.</p>,
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch',
    },
  },
  {
    title: 'Начните использовать Tailwind в своем HTML',
    body: () => (
      <p>
        Добавьте свой скомпилированный файл CSS в <code>{'<head>'}</code> и начните использовать классы утилиты Tailwind для стилизации вашего контента.
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
>   <link href="/dist/output.css" rel="stylesheet">
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
      <div className="relative z-10 prose mb-16 max-w-3xl">
        <p>
          Самый простой и быстрый способ начать работу с Tailwind CSS с нуля - использовать инструмент Tailwind CLI.
        </p>
      </div>
      <Steps steps={steps} code={code} />
      {/*
        <Cta
          label="Read the documentation"
          href="/docs/tailwind-cli"
          description={
            <>
              <strong className="text-gray-900 font-semibold">
                Это только начало возможностей Tailwind CLI.
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

TailwindCli.layoutProps = {
  meta: {
    title: 'Установка: Tailwind CLI',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
