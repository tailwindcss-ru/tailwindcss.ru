import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { InstallationLayout } from '@/layouts/InstallationLayout'
import { Cta } from '@/components/Cta'
import { Steps } from '@/components/Steps'

let steps = [
  {
    title: 'Установка Tailwind CSS',
    body: () => (
      <p>
        Установите <code>tailwindcss</code> и его одноранговые зависимости через npm и создайте файл{' '} <code>tailwind.config.js</code>.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init',
    },
  },
  {
    title: 'Добавьте Tailwind в конфигурацию PostCSS',
    body: () => (
      <p>
        Добавьте <code>tailwindcss</code> и <code>autoprefixer</code> в свой файл{' '} <code>postcss.config.js</code>.
      </p>
    ),
    code: {
      name: 'postcss.config.js',
      lang: 'js',
      code: `  module.exports = {
    plugins: {
>     tailwindcss: {},
>     autoprefixer: {},
    }
  }`,
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
      name: 'main.css',
      lang: 'css',
      code: '@tailwind base;\n@tailwind components;\n@tailwind utilities;',
    },
  },
  {
    title: 'Начните процесс сборки',
    body: () => (
      <p>
        Запустите процесс сборки с помощью <code>npm run dev</code> или любой другой команды, настроенной в вашем файле <code>package.json</code>.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npm run dev',
    },
  },
  {
    title: 'Начните использовать Tailwind в своем HTML',
    body: () => (
      <p>
        Убедитесь, что ваш скомпилированный CSS включен в <code>{'<head>'}</code>{' '} <em>(ваш фреймворк может справиться с этим за вас)</em>, затем начните использовать служебные классы Tailwind для стилизации вашего контента.
      </p>
    ),
    code: {
      name: 'index.html',
      lang: 'html',
      code: `  <!doctype html>
  <html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="/dist/main.css" rel="stylesheet">
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

export default function UsingPostCss({ code }) {
  return (
    <InstallationLayout>
      <div className="relative z-10 prose mb-16 max-w-3xl">
        <p>
          Установка Tailwind CSS в качестве плагина PostCSS - самый простой способ интегрировать его с такими инструментами сборки, как webpack, Rollup, Vite и Parcel.
        </p>
      </div>
      <Steps steps={steps} code={code} />
      <Cta
        label="Изучите наши руководства по фреймворкам"
        href="/docs/installation/framework-guides"
        description={
          <>
            <strong className="text-gray-900 font-semibold">Вы застряли?</strong> Настройка Tailwind с помощью PostCSS может немного отличаться для разных инструментов сборки. Ознакомьтесь с нашими руководствами по фреймворкам, чтобы узнать, есть ли у нас более конкретные инструкции для вашей конкретной настройки.
          </>
        }
      />
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

UsingPostCss.layoutProps = {
  meta: {
    title: 'Установка: Использование PostCSS',
    section: 'Начало работы',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
