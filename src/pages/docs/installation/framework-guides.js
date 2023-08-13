import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { InstallationLayout } from '@/layouts/InstallationLayout'
import Link from 'next/link'

import { ReactComponent as AstroLogo } from '@/img/guides/astro.svg'
import { ReactComponent as AstroLogoWhite } from '@/img/guides/astro-white.svg'
import { ReactComponent as AdonisLogo } from '@/img/guides/adonis.svg'
import { ReactComponent as AngularLogo } from '@/img/guides/angular.svg'
import { ReactComponent as AngularLogoWhite } from '@/img/guides/angular-white.svg'
import { ReactComponent as CraLogo } from '@/img/guides/cra.svg'
import { ReactComponent as EmberLogo } from '@/img/guides/ember.svg'
import { ReactComponent as GatsbyLogo } from '@/img/guides/gatsby.svg'
import { ReactComponent as LaravelLogo } from '@/img/guides/laravel.svg'
import { ReactComponent as MeteorLogo } from '@/img/guides/meteor.svg'
import { ReactComponent as NextJsLogo } from '@/img/guides/nextjs.svg'
import { ReactComponent as NextJsLogoWhite } from '@/img/guides/nextjs-white.svg'
import { ReactComponent as NuxtJsLogo } from '@/img/guides/nuxtjs.svg'
import { ReactComponent as ParcelLogo } from '@/img/guides/parcel.svg'
import { ReactComponent as PhoenixLogo } from '@/img/guides/phoenix.svg'
import { ReactComponent as QwikLogo } from '@/img/guides/qwik.svg'
import { ReactComponent as RailsLogo } from '@/img/guides/rails.svg'
import { ReactComponent as RailsLogoWhite } from '@/img/guides/rails-white.svg'
import { ReactComponent as RemixLogo } from '@/img/guides/remix.svg'
import { ReactComponent as RemixLogoWhite } from '@/img/guides/remix-white.svg'
import { ReactComponent as SolidJSLogo } from '@/img/guides/solidjs.svg'
import { ReactComponent as SvelteLogo } from '@/img/guides/svelte.svg'
import { ReactComponent as SymfonyLogo } from '@/img/guides/symfony.svg'
import { ReactComponent as SymfonyLogoWhite } from '@/img/guides/symfony-white.svg'
import { ReactComponent as ViteLogo } from '@/img/guides/vite.svg'

export default function FrameworkGuides() {
  return (
    <InstallationLayout>
      <div id="content-wrapper" className="prose prose-slate mb-10 max-w-3xl dark:prose-dark">
        <h3 className="sr-only">Руководства по фреймворку</h3>
        <p>
          Руководства для конкретных платформ, в которых описывается рекомендуемый нами подход к
          установке Tailwind CSS в ряде популярных сред.
        </p>
      </div>
      <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 xl:grid-cols-3">
        {[
          {
            name: 'Next.js',
            slug: 'nextjs',
            description: 'Полнофункциональный фреймворк React с большим опытом разработки.',
            logo: NextJsLogo,
            logoDark: NextJsLogoWhite,
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
            name: 'SolidJS',
            slug: 'solidjs',
            description:
              'Инструмент для создания простых, производительных и реактивных пользовательских интерфейсов.',
            logo: SolidJSLogo,
          },
          {
            name: 'SvelteKit',
            slug: 'sveltekit',
            description:
              'Самый быстрый способ создавать приложения любого размера с помощью Svelte.js.',
            logo: SvelteLogo,
          },
          {
            name: 'Angular',
            slug: 'angular',
            description: 'Платформа для создания мобильных и настольных веб-приложений.',
            logo: AngularLogo,
            logoDark: AngularLogoWhite,
          },
          {
            name: 'Ruby on Rails',
            slug: 'ruby-on-rails',
            description:
              'Фреймворк полного стека со всеми инструментами, необходимыми для создания удивительных веб-приложений.',
            logo: RailsLogo,
            logoDark: RailsLogoWhite,
          },
          {
            name: 'Remix',
            slug: 'remix',
            description:
              'Фреймворк с полным стеком, ориентированный на основы веб-технологий и современный UX.',
            logo: RemixLogo,
            logoDark: RemixLogoWhite,
          },
          {
            name: 'Phoenix',
            slug: 'phoenix',
            description: 'Фреймворк для создания многофункциональных интерактивных приложений с помощью Elixir.',
            logo: PhoenixLogo,
          },
          {
            name: 'Parcel',
            slug: 'parcel',
            description: 'Инструмент сборки с нулевой конфигурацией для Интернета.',
            logo: ParcelLogo,
          },
          {
            name: 'Symfony',
            slug: 'symfony',
            description: 'Фреймворк PHP для создания веб-сайтов и веб-приложений.',
            logo: SymfonyLogo,
            logoDark: SymfonyLogoWhite,
          },
          {
            name: 'Meteor',
            slug: 'meteor',
            description: 'Полный стек JavaScript-фреймворка для разработки кроссплатформенных приложений.',
            logo: MeteorLogo,
          },
          {
            name: 'Create React App',
            slug: 'create-react-app',
            description: 'Инструмент CLI для создания нового одностраничного приложения React.',
            logo: CraLogo,
          },
          {
            name: 'AdonisJS',
            slug: 'adonisjs',
            description: 'Полнофункциональный веб-фреймворк для Node.js.',
            logo: AdonisLogo,
          },
          {
            name: 'Ember.js',
            slug: 'emberjs',
            description: 'Фреймворк JavaScript для амбициозных веб-разработчиков.',
            logo: EmberLogo,
          },
          {
            name: 'Astro',
            slug: 'astro',
            description: 'The all-in-one web framework designed for speed.',
            logo: AstroLogo,
            logoDark: AstroLogoWhite,
          },
          {
            name: 'Qwik',
            slug: 'qwik',
            description: 'Build instantly-interactive web apps without effort.',
            logo: QwikLogo,
          },
        ].map(({ name, description, logo: Logo, logoDark: LogoDark, slug }) => (
          <li key={name} className="relative flex flex-row-reverse">
            <div className="peer group ml-6 flex-auto">
              <h4 className="mb-2 leading-6 text-slate-900 font-semibold dark:text-slate-200">
                <Link
                  href={`/docs/guides/${slug}`}
                  className="before:absolute before:-inset-3 before:rounded-2xl"
                >
                  {name}
                  <svg
                    viewBox="0 0 3 6"
                    className="ml-3 w-auto h-1.5 overflow-visible inline -mt-px text-slate-400 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100"
                  >
                    <path
                      d="M0 0L3 3L0 6"
                      fill="none"
                      strokeWidth="2"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </h4>
              <p className="text-sm leading-6 text-slate-700 dark:text-slate-400">{description}</p>
            </div>
            <div className="flex-none w-14 h-14 rounded-full bg-white ring-1 ring-slate-900/5 shadow flex items-center justify-center overflow-hidden dark:bg-slate-800 dark:highlight-white/5">
              {LogoDark !== undefined ? (
                <>
                  <Logo className="block dark:hidden" />
                  <LogoDark className="hidden dark:block" />
                </>
              ) : (
                <Logo className="dark:block" />
              )}
            </div>
            <div className="absolute -z-10 -inset-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 opacity-0 peer-hover:opacity-100" />
          </li>
        ))}
      </ul>
      <div className="mt-16 prose prose-slate max-w-3xl dark:prose-dark">
        <p>
          Не видите выбранный вами фреймворк? Попробуйте использовать{' '}
          <Link href="/docs/installation">Tailwind CLI</Link> или установить вместо этого Tailwind{' '}
          <Link href="/docs/installation/using-postcss">в качестве подключаемого модуля PostCSS plugin</Link>.
        </p>
      </div>
    </InstallationLayout>
  )
}

FrameworkGuides.layoutProps = {
  meta: {
    title: 'Руководства по фреймворку',
    description:
      'Руководства для конкретных платформ, которые охватывают рекомендуемый нами подход к установке Tailwind CSS в ряде популярных сред.',
    section: 'Начало работы',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
