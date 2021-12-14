import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { InstallationLayout } from '@/layouts/InstallationLayout'
import Link from 'next/link'

import { ReactComponent as NextJsLogo } from '@/img/guides/nextjs.svg'
import { ReactComponent as LaravelLogo } from '@/img/guides/laravel.svg'
import { ReactComponent as ViteLogo } from '@/img/guides/vite.svg'
import { ReactComponent as NuxtJsLogo } from '@/img/guides/nuxtjs.svg'
import { ReactComponent as GatsbyLogo } from '@/img/guides/gatsby.svg'
import { ReactComponent as CraLogo } from '@/img/guides/cra.svg'

export default function FrameworkGuides() {
  return (
    <InstallationLayout>
      <div className="prose mb-16 max-w-3xl">
        <p>
          Руководства для конкретных платформ, в которых описывается рекомендуемый нами подход к установке Tailwind CSS в ряде популярных сред.
        </p>
      </div>
      <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 xl:grid-cols-3">
        {[
          {
            name: 'Next.js',
            slug: 'nextjs',
            description: 'Полнофункциональный фреймворк React с большим опытом разработки.',
            logo: NextJsLogo,
          },
          {
            name: 'Laravel',
            slug: 'laravel',
            description: 'Фреймворк веб-приложений PHP с выразительным элегантным синтаксисом.',
            logo: LaravelLogo,
          },
          {
            name: 'Vite',
            slug: 'vite',
            description: 'Быстрый и современный сервер разработки и инструмент сборки.',
            logo: ViteLogo,
          },
          {
            name: 'Nuxt.js',
            slug: 'nuxtjs',
            description: 'Интуитивно понятный фреймворк Vue для создания универсальных приложений.',
            logo: NuxtJsLogo,
          },
          {
            name: 'Gatsby',
            slug: 'gatsby',
            description: 'Фреймворк для создания статических сайтов с React и GraphQL.',
            logo: GatsbyLogo,
          },
          {
            name: 'Create React App',
            slug: 'create-react-app',
            description: 'Инструмент командной строки для создания нового одностраничного приложения React.',
            logo: CraLogo,
          },
        ].map(({ name, description, logo: Logo, slug }) => (
          <li key={name} className="relative flex flex-row-reverse">
            <div className="ml-6 flex-auto">
              <h3 className="mb-2 leading-6 text-gray-900 font-semibold">
                <Link href={`/docs/guides/${slug}`}>
                  <a className="before:absolute before:inset-0">{name}</a>
                </Link>
              </h3>
              <p className="text-sm leading-6 text-gray-700">{description}</p>
            </div>
            <div className="flex-none w-14 h-14 rounded-full bg-white ring-1 ring-gray-900/5 shadow flex items-center justify-center overflow-hidden">
              <Logo />
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-16 prose max-w-3xl">
        <p>
          Не видите выбранную вами схему? Вместо этого попробуйте использовать{' '}
          <Link href="/docs/installation">
            <a>Tailwind CLI</a>
          </Link>{' '}
          или установить Tailwind{' '}
          <Link href="/docs/installation/using-postcss">
            <a>как плагин PostCSS</a>
          </Link>{' '}.
        </p>
      </div>
    </InstallationLayout>
  )
}

FrameworkGuides.layoutProps = {
  meta: {
    title: 'Установка: Руководства по фреймворкам',
    section: 'Начало работы',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
