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
    image: require('@/img/icons/home/utility-first.png').default,
  },
  {
    title: 'Адаптивный дизайн',
    href: '/docs/responsive-design',
    body: () => (
      <p>
        Создавайте полностью отзывчивые пользовательские интерфейсы, которые адаптируются к любому размеру экрана, с помощью адаптивных модификаторов.
      </p>
    ),
    image: require('@/img/icons/home/mobile-first.png').default,
  },
  {
    title: 'Наведение, фокус и другие состояния',
    href: '/docs/hover-focus-and-other-states',
    body: () => (
      <p>
        Стилизуйте элементы в интерактивных состояниях, таких как наведение, фокус и т. д., с помощью условных модификаторов.
      </p>
    ),
    image: require('@/img/icons/home/state-variants.png').default,
  },
  {
    title: 'Темный режим',
    href: '/docs/dark-mode',
    body: () => (
      <p>Оптимизируйте свой сайт для темного режима прямо в своем HTML с помощью модификатора темного режима.</p>
    ),
    image: require('@/img/icons/home/dark-mode.png').default,
  },
  {
    title: 'Повторное использование стилей',
    href: '/docs/reusing-styles',
    body: () => (
      <p>
        Управляйте дублированием и поддерживайте свои проекты в сопровождении, создавая многократно используемые абстракции.
      </p>
    ),
    image: require('@/img/icons/home/component-driven.png').default,
  },
  {
    title: 'Настройка фреймворка',
    href: '/docs/adding-custom-styles',
    body: () => (
      <p>Настройте фреймворк в соответствии с вашим брендом и дополните его своими собственными стилями.</p>
    ),
    image: require('@/img/icons/home/customization.png').default,
  },
]

export function InstallationLayout({ children }) {
  let router = useRouter()

  return (
    <BasicLayout>
      <header className="mb-10 md:flex md:items-start">
        <div className="flex-auto max-w-4xl">
          <p className="mb-4 text-sm leading-6 font-semibold text-sky-500">Установка</p>
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            Начните работу с Tailwind CSS
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Tailwind CSS работает, сканируя все ваши HTML-файлы, компоненты JavaScript и любые другие шаблоны на предмет имен классов, генерируя соответствующие стили и затем записывая их в статический CSS-файл.
          </p>
          <p className="mt-4 text-lg text-gray-700">
            Это быстро, гибко и надежно - с нулевым временем работы.
          </p>
        </div>
      </header>
      <section className="mb-16 relative">
        <div className="relative z-10">
          <h2 className="text-gray-900 text-xl tracking-tight font-bold mb-3">Установка</h2>
          <div className="flex overflow-auto mb-6 -mx-4 sm:-mx-6">
            <div className="flex-none min-w-full px-4 sm:px-6">
              <ul className="border-b border-gray-200 space-x-6 flex whitespace-nowrap">
                {Object.entries(tabs).map(([name, href]) => (
                  <li key={name}>
                    <Link href={href} scroll={false}>
                      <a
                        className={clsx(
                          'flex text-sm leading-6 font-semibold pt-3 pb-2.5 border-b-2 -mb-px',
                          href === router.pathname
                            ? 'text-sky-500 border-current'
                            : 'text-gray-900 border-transparent hover:border-gray-300'
                        )}
                      >
                        {name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {children}
      </section>

      <section className="relative">
        <h2 className="text-gray-900 text-xl tracking-tight font-bold mb-3">Что читать дальше</h2>
        <div className="mb-10 max-w-2xl prose xl:mb-0">
          <p>
            Познакомьтесь с некоторыми из основных концепций, которые отличают Tailwind CSS от написания традиционного CSS.
          </p>
        </div>
        <ul className="mt-10 grid grid-cols-1 gap-x-16 gap-y-8 xl:grid-cols-2 xl:gap-y-10">
          {readNext.map((item) => (
            <li key={item.title} className="relative flex items-start">
              <IconContainer className="flex-none">
                <img src={item.image} alt="" />
              </IconContainer>
              <div className="flex-auto ml-6">
                <h3 className="mb-2 font-semibold text-gray-900">
                  <Link href={item.href}>
                    <a className="before:absolute before:inset-0">{item.title}</a>
                  </Link>
                </h3>
                <div className="prose prose-sm text-gray-600">
                  <item.body />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </BasicLayout>
  )
}
