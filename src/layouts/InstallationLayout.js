import { BasicLayout } from '@/layouts/BasicLayout'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { IconContainer } from '@/components/home/common'

let tabs = {
  'Tailwind CLI': '/docs/installation',
  'Использование PostCSS': '/docs/installation/using-postcss',
  'Руководства по фреймворкам': '/docs/installation/framework-guides',
  'Play CDN': '/docs/installation/play-cdn',
}

let readNext = [
  {
    title: 'Основы Utility-First',
    href: '/docs/utility-first',
    body: () => (
      <p>
        Использование рабочего процесса «сначала утилиты» для создания сложных компонентов из ограниченного набора примитивных утилит.
      </p>
    ),
    icon: {
      className: 'dark:bg-indigo-500 dark:highlight-white/20',
      light: require('@/img/icons/home/utility-first.png').default.src,
      dark: require('@/img/icons/home/dark/utility-first.png').default.src,
    },
  },
  {
    title: 'Адаптивный дизайн',
    href: '/docs/responsive-design',
    body: () => (
      <p>
        Создавайте полностью отзывчивые пользовательские интерфейсы, которые адаптируются к любому размеру экрана, с помощью адаптивных модификаторов.
      </p>
    ),
    icon: {
      className: 'dark:bg-indigo-500 dark:highlight-white/20',
      light: require('@/img/icons/home/mobile-first.png').default.src,
      dark: require('@/img/icons/home/dark/mobile-first.png').default.src,
    },
  },
  {
    title: 'Наведение, фокус и другие состояния',
    href: '/docs/hover-focus-and-other-states',
    body: () => (
      <p>
        Стилизуйте элементы в интерактивных состояниях, таких как наведение, фокус и т. д., с помощью условных модификаторов.
      </p>
    ),
    icon: {
      className: 'dark:bg-blue-500 dark:highlight-white/20',
      light: require('@/img/icons/home/state-variants.png').default.src,
      dark: require('@/img/icons/home/dark/state-variants.png').default.src,
    },
  },
  {
    title: 'Темный режим',
    href: '/docs/dark-mode',
    body: () => (
      <p>Оптимизируйте свой сайт для темного режима прямо в своем HTML с помощью модификатора темного режима.</p>
    ),
    icon: {
      className: 'dark:bg-slate-600 dark:highlight-white/20',
      light: require('@/img/icons/home/dark-mode.png').default.src,
      dark: require('@/img/icons/home/dark/dark-mode.png').default.src,
    },
  },
  {
    title: 'Повторное использование стилей',
    href: '/docs/reusing-styles',
    body: () => (
      <p>
        Управляйте дублированием и поддерживайте свои проекты в сопровождении, создавая многократно используемые абстракции.
      </p>
    ),
    icon: {
      className: 'dark:bg-sky-500 dark:highlight-white/20',
      light: require('@/img/icons/home/component-driven.png').default.src,
      dark: require('@/img/icons/home/dark/component-driven.png').default.src,
    },
  },
  {
    title: 'Настройка фреймворка',
    href: '/docs/adding-custom-styles',
    body: () => (
      <p>Настройте фреймворк в соответствии с вашим брендом и дополните его своими собственными стилями.</p>
    ),
    icon: {
      className: 'dark:bg-pink-500 dark:highlight-white/30',
      light: require('@/img/icons/home/customization.png').default.src,
      dark: require('@/img/icons/home/dark/customization.png').default.src,
    },
  },
]

export function InstallationLayout({ children }) {
  let router = useRouter()

  return (
    <BasicLayout>
      <header id="header" className="mb-10 md:flex md:items-start">
        <div className="flex-auto max-w-4xl">
          <p className="mb-4 text-sm leading-6 font-semibold text-sky-500 dark:text-sky-400">
            Установка
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">
            Начните работу с Tailwind CSS
          </h1>
          <p className="mt-4 text-lg text-slate-700 dark:text-slate-400">
            Tailwind CSS работает, сканируя все ваши HTML-файлы, компоненты JavaScript и любые другие шаблоны на предмет имен классов, генерируя соответствующие стили и затем записывая их в статический CSS-файл.
          </p>
          <p className="mt-4 text-lg text-slate-700 dark:text-slate-400">
            Это быстро, гибко и надежно - с нулевым временем работы.
          </p>
        </div>
      </header>
      <section className="mb-16 relative">
        <div className="relative z-10">
          <h2
            data-docsearch-ignore
            className="text-slate-900 text-xl tracking-tight font-bold mb-3 dark:text-slate-200"
          >
            Установка
          </h2>
          <div className="flex overflow-auto mb-6 -mx-4 sm:-mx-6">
            <div className="flex-none min-w-full px-4 sm:px-6">
              <ul className="border-b border-slate-200 space-x-6 flex whitespace-nowrap dark:border-slate-200/5 mb-px">
                {Object.entries(tabs).map(([name, href]) => (
                  <li key={name}>
                    <h2>
                      <Link
                        href={href}
                        scroll={false}
                        className={clsx(
                          'flex text-sm leading-6 font-semibold pt-3 pb-2.5 border-b-2 -mb-px',
                          href === router.pathname
                            ? 'text-sky-500 border-current'
                            : 'text-slate-900 border-transparent hover:border-slate-300 dark:text-slate-200 dark:hover:border-slate-700'
                        )}
                      >
                        {name}
                      </Link>
                    </h2>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {children}
      </section>

      <section className="relative">
        <h2 className="text-slate-900 text-xl tracking-tight font-bold mb-3 dark:text-slate-200">
          Что читать дальше
        </h2>
        <div className="mb-10 max-w-2xl prose prose-slate xl:mb-0 dark:prose-dark">
          <p>
            Познакомьтесь с некоторыми из основных концепций, которые отличают Tailwind CSS от написания традиционного CSS.
          </p>
        </div>
        <ul className="mt-10 grid grid-cols-1 gap-x-16 gap-y-8 xl:grid-cols-2 xl:gap-y-10">
          {readNext.map((item) => (
            <li key={item.title} className="relative flex items-start">
              <IconContainer
                className={clsx('flex-none', item.icon.className)}
                light={item.icon.light}
                dark={item.icon.dark}
              />
              <div className="peer group flex-auto ml-6">
                <h3 className="mb-2 font-semibold text-slate-900 dark:text-slate-200">
                  <Link
                    href={item.href}
                    className="before:absolute before:-inset-3 before:rounded-2xl sm:before:-inset-4"
                  >
                    {item.title}
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
                </h3>
                <div className="prose prose-slate prose-sm text-slate-600 dark:prose-dark">
                  <item.body />
                </div>
              </div>
              <div className="absolute -z-10 -inset-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 opacity-0 peer-hover:opacity-100 sm:-inset-4" />
            </li>
          ))}
        </ul>
      </section>
    </BasicLayout>
  )
}
