import NextLink from 'next/link'
import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { InstallationLayout } from '@/layouts/InstallationLayout'
import { Steps } from '@/components/Steps'
import { black } from 'tailwindcss/colors'
import { theme } from 'tailwind.config'

let steps = [
  {
    title: 'Добавьте сценарий Play CDN в свой HTML-код',
    body: () => (
      <p>
        Добавьте тег сценария Play CDN <code>&lt;head&gt;</code> вашего HTML-файла и начните использовать классы утилит Tailwind для стилизации вашего контента.
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
>   <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body>
>   <h1 class="text-3xl font-bold underline">
>     Привет мир!
>   </h1>
  </body>
  </html>`,
    },
  },
  {
    title: 'Try customizing your config',
    body: () => (
      <p>
        Отредактируйте объект <code>tailwind.config</code>, чтобы{' '}
        <NextLink href="/docs/configuration">
          <a>настроить конфигурацию</a>
        </NextLink>{' '}
        с помощью собственных токенов дизайна.
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
    <script src="https://cdn.tailwindcss.com"></script>
>   <script>
>     tailwind.config = {
>       theme: {
>         extend: {
>           colors: {
>             clifford: '#da373d',
>           }
>         }
>       }
>     }
>   </script>
  </head>
  <body>
    <h1 class="text-3xl font-bold underline **text-clifford**">
      Привет мир!
    </h1>
  </body>
  </html>`,
    },
  },
  {
    title: 'Try adding some custom CSS',
    body: () => (
      <p>
        Используйте <code>type="text/tailwindcss"</code>, чтобы добавить собственный CSS, который поддерживает все функции CSS Tailwinds.
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
    <script src="https://cdn.tailwindcss.com"></script>
    <script>/* ... */</script>
>   <style type="text/tailwindcss">
>     @layer utilities {
>       .content-auto {
>         content-visibility: auto;
>       }
>     }
>   </style>
  </head>
  <body>
>   <div class="lg:content-auto">
      <!-- ... -->
    </div>
  </body>
  </html>`,
    },
  },
]

export default function PlayCdn({ code }) {
  return (
    <InstallationLayout>
      <div className="relative z-10 prose mb-16 max-w-3xl">
        <p>
          Воспользуйтесь Play CDN, чтобы попробовать Tailwind прямо в браузере без каких-либо шагов сборки. Play CDN предназначен только для целей разработки и не является лучшим выбором для производства.
        </p>
      </div>
      <Steps steps={steps} code={code} />
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

PlayCdn.layoutProps = {
  meta: {
    title: 'Установка: Play CDN',
    section: 'Начало работы',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
