import NextLink from 'next/link'
import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { InstallationLayout } from '@/layouts/InstallationLayout'
import { Steps } from '@/components/Steps'

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
    title: 'Попробуйте настроить свою конфигурацию',
    body: () => (
      <p>
        Отредактируйте объект <code>tailwind.config</code>, чтобы{' '}
        <NextLink href="/docs/configuration">настроить свою конфигурацию</NextLink> с помощью собственных маркеров дизайна.
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
    title: 'Попробуйте добавить пользовательский CSS',
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
  {
    title: 'Попробуйте использовать сторонний плагин',
    body: () => (
      <p>
        Включите сторонние подключаемые модули, например формы и типографику, с помощью параметра запроса <code>плагинов</code>.
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
>   <script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp,container-queries"></script>
  </head>
  <body>
>   <div class="prose">
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
      <div
        id="content-wrapper"
        className="relative z-10 prose prose-slate mb-16 max-w-3xl dark:prose-dark"
      >
        <h3 className="sr-only">Play CDN</h3>
        <p>
          Воспользуйтесь Play CDN, чтобы попробовать Tailwind прямо в браузере без каких-либо шагов сборки. Play CDN предназначен только для целей разработки и не является лучшим выбором для производства.
        </p>
      </div>
      <Steps level={4} steps={steps} code={code} />
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

PlayCdn.layoutProps = {
  meta: {
    title: 'Попробуйте Tailwind CSS с помощью Play CDN',
    description: 'Используйте Play CDN, чтобы попробовать Tailwind прямо в браузере, не выполняя никаких действий по сборке.',
    section: 'Начало работы',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
