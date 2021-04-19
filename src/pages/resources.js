import { Community } from '@/components/Community'
import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import Link from 'next/link'
import { ReactComponent as RefactoringUi } from '@/img/resources/refactoring-ui.svg'
import { ReactComponent as TailwindUi } from '@/img/resources/tailwind-ui.svg'
import { ReactComponent as HeadlessUi } from '@/img/resources/headless-ui.svg'
import { ReactComponent as Heroicons } from '@/img/resources/heroicons.svg'
import { ReactComponent as Heropatterns } from '@/img/resources/heropatterns.svg'

function Logo({ title, component: Component }) {
  return (
    <div className="w-60 max-w-full">
      <div className="relative" style={{ paddingTop: `${(60 / 240) * 100}%` }}>
        <span className="sr-only">{title}</span>
        <Component className="absolute inset-0 w-full h-full" />
      </div>
    </div>
  )
}

export default function Resources() {
  return (
    <div className="px-4 sm:px-6 md:px-8 pt-10 pb-16">
      <h1 className="text-3xl text-gray-900 font-extrabold mb-4">Ресурсы</h1>
      <div className="max-w-3xl">
        <div className="text-lg mb-5 space-y-5">
          <p>
            Мы думаем, что Tailwind - потрясающий фреймворк CSS, но для создания визуально потрясающей работы вам нужно нечто большее, чем просто фреймворк CSS.
          </p>
          <p>
            Вот несколько ресурсов, которые помогут вывести ваши проекты Tailwind на новый уровень.
          </p>
        </div>
        <p>
          Чтобы ознакомиться с активами бренда Tailwind CSS и правилами использования, посетите нашу{' '}
          <Link href="/brand">
            <a className="text-cyan-700 font-medium shadow-link">страницу бренда</a>
          </Link>
          .
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 md:gap-6 xl:gap-8 my-8 sm:my-12">
        <section>
          <h2 className="text-xl text-gray-900 font-bold mb-4">Изучение UI-дизайна</h2>
          <a
            href="https://refactoringui.com/book"
            className="h-40 sm:h-56 xl:h-64 bg-gray-900 bg-cover rounded-3xl mb-6 flex items-center justify-center"
            style={{
              backgroundImage: `url(${require('@/img/resources/refactoring-ui-bg.png').default})`,
            }}
          >
            <Logo title="Refactoring UI" component={RefactoringUi} />
          </a>
          <div className="space-y-5">
            <p>
              Refactoring UI - это серия книг и видеороликов для разработчиков, составленная Адамом Уотаном и Стивом Шогером.
              Он охватывает буквально все, что мы знаем о том, как заставить вещи выглядеть потрясающе.
            </p>
            <p>
              На данный момент почти 10 000 человек подхватили его и могут сказать много замечательных вещей о том, как это помогло им улучшить свою работу.
            </p>
          </div>
        </section>
        <section>
          <h2 className="text-xl text-gray-900 font-bold mb-4">Официальные компоненты Tailwind CSS</h2>
          <a
            href="https://tailwindui.com/"
            className="h-40 sm:h-56 xl:h-64 bg-gray-300 rounded-3xl mb-6 overflow-hidden flex"
          >
            <div className="relative flex-none flex items-center justify-center px-6 xl:px-10">
              <div className="bg-gray-900 absolute inset-0 -left-64 transform -skew-x-20" />
              <Logo title="Tailwind UI" component={TailwindUi} />
            </div>
            <div
              className="flex-auto bg-cover -ml-12"
              style={{
                backgroundImage: `url(${require('@/img/resources/tailwind-ui.jpg').default})`,
              }}
            />
          </a>
          <div className="space-y-5">
            <p>
              Пользовательский интерфейс Tailwind - это набор профессионально разработанных, предварительно созданных,
              полностью адаптивных фрагментов HTML, которые вы можете добавить в свои проекты Tailwind.
            </p>
            <p>
              В настоящее время доступно более 350 компонентов в двух разных категориях
              (маркетинг и пользовательский интерфейс приложений), и мы постоянно добавляем новые.
            </p>
          </div>
        </section>
      </div>
      <div className="grid sm:grid-cols-3 gap-8 sm:gap-6 xl:gap-8 pb-10 border-b border-gray-200">
        <section>
          <h2 className="text-xl text-gray-900 font-bold mb-4">
            JavaScript<span className="sr-only">: Headless UI</span>
          </h2>
          <a
            href="https://headlessui.dev/"
            className="h-40 xl:h-48 rounded-3xl bg-gray-900 mb-6 flex items-center justify-center p-6"
          >
            <Logo title="Headless UI" component={HeadlessUi} />
          </a>
          <p>
            Полностью не стилизованные, полностью доступные компоненты пользовательского интерфейса,
            разработанные для красивой интеграции с Tailwind CSS.
          </p>
        </section>
        <section>
          <h2 className="text-xl text-gray-900 font-bold mb-4">
            Иконки<span className="sr-only">: Heroicons</span>
          </h2>
          <a
            href="https://heroicons.com/"
            className="relative flex h-40 xl:h-48 rounded-3xl bg-gradient-to-br from-violet-600 to-purple-500 mb-6"
          >
            <div
              className="absolute inset-0 flex items-center justify-center p-6 bg-contain"
              style={{
                backgroundImage: `url(${require('@/img/resources/heroicons-bg.svg').default})`,
              }}
            >
              <Logo title="Heroicons" component={Heroicons} />
            </div>
          </a>
          <p>
            Набор бесплатных высококачественных иконок SVG, лицензированных MIT, для использования в ваших веб-проектах.
          </p>
        </section>
        <section>
          <h2 className="text-xl text-gray-900 font-bold mb-4">
            Узоры<span className="sr-only">: Heropatterns</span>
          </h2>
          <a
            href="https://www.heropatterns.com/"
            className="relative flex h-40 xl:h-48 rounded-3xl bg-gradient-to-br from-cyan-600 to-teal-500 mb-6"
          >
            <div
              className="absolute inset-0 flex items-center justify-center p-6 bg-cover"
              style={{
                backgroundImage: `url(${require('@/img/resources/heropatterns-bg.svg').default})`,
              }}
            >
              <Logo title="Heropatterns" component={Heropatterns} />
            </div>
          </a>
          <p>
            Набор бесплатных высококачественных шаблонов SVG с лицензией MIT, которые вы можете использовать в своих веб-проектах.
          </p>
        </section>
      </div>
      <section>
        <h2 className="text-2xl tracking-tight font-extrabold text-gray-900 mt-10 mb-8">
          Вовлекайтесь
        </h2>
        <Community />
      </section>
    </div>
  )
}

Resources.layoutProps = {
  meta: {
    title: 'Resources',
  },
  Layout: DocumentationLayout,
}
