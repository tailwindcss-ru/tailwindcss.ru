import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { Button } from '@/components/Button'
import clsx from 'clsx'
import { BasicLayout } from '@/layouts/BasicLayout'
import { ReactComponent as TelegramIcon } from '@/img/icons/telegram.svg'
import { ReactComponent as DiscordIcon } from '@/img/icons/discord.svg'
import { ReactComponent as GitHubIcon } from '@/img/icons/github.svg'

function CardGroup({ children, className }) {
  return (
    <ul className={clsx('grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start', className)}>
      {children}
    </ul>
  )
}

function Card({ title, superTitle, href, color, body, image, button }) {
  return (
    <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
      <div className="order-1 sm:ml-6 xl:ml-0">
        <h3 className="mb-1 text-slate-900 font-semibold dark:text-slate-200">
          {button ? (
            <>
              <span className={clsx('mb-1 block text-sm leading-6', color)}>{superTitle}</span>
              {title}
            </>
          ) : (
            <a
              href={href}
              className={clsx(
                'before:absolute before:inset-0',
                !button && 'hover:text-slate-600 dark:hover:text-white'
              )}
            >
              <span className={clsx('mb-1 block text-sm leading-6', color)}>{superTitle}</span>
              {title}
            </a>
          )}
        </h3>
        <div className="prose prose-slate prose-sm text-slate-600 dark:prose-dark">{body}</div>
        {button && (
          <Button href={href} className="mt-6">
            {button}
          </Button>
        )}
      </div>
      <img
        src={image}
        alt=""
        className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"
        width="1216"
        height="640"
      />
    </li>
  )
}

function Icon({ children, className }) {
  return (
    <div
      className={clsx(
        'relative pt-full rounded-full ring-1 ring-inset ring-slate-900/5',
        className
      )}
    >
      <div className="absolute inset-0 flex items-center justify-center">{children}</div>
    </div>
  )
}

export default function Resources() {
  return (
    <BasicLayout>
      <header className="mb-20 max-w-xl">
        <p className="mb-4 text-sm leading-6 font-semibold text-sky-500 dark:text-sky-400">
          Ресурсы
        </p>
        <h1 className="mb-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200">
          Все остальное, что вам нужно для создания потрясающих веб-сайтов Tailwind CSS
        </h1>
        <p className="text-lg text-slate-700 dark:text-slate-400">
          Мы думаем, что Tailwind - великолепный фреймворк CSS, но для создания визуально
          потрясающей работы вам нужно нечто большее, чем просто фреймворк CSS.
        </p>
      </header>

      <div className="space-y-16">
        <section>
          <h2 className="mb-2 text-2xl leading-7 tracking-tight text-slate-900 font-bold dark:text-slate-200">
            Ресурсы для дизайна
          </h2>
          <div className="mb-10 prose prose-slate text-slate-600 max-w-3xl dark:prose-dark">
            <p>
              Дизайн - это сложно, поэтому мы сделали несколько ресурсов, чтобы помочь вам в этом.
              Эти ресурсы - отличный способ помочь вам с вашими проектами и отличный способ поддержать разработку фреймворка.
            </p>
          </div>

          <ul className="sm:space-y-6">
            {[
              {
                title: 'Refactoring UI',
                description: 'Изучите дизайн пользовательского интерфейса',
                images: [
                  require('@/img/resources/refactoringui-small@75.jpg').default,
                  require('@/img/resources/refactoringui@75.jpg').default,
                ],
                color: 'text-blue-500',
                href: 'https://refactoringui.com',
                body: (
                  <>
                    <p>
                      Refactoring UI - это серия книг и видеороликов для разработчиков,
                      составленная Адамом Уотаном и Стивом Шогером. Он охватывает буквально все,
                      что мы знаем о том, как заставить вещи выглядеть потрясающе.
                    </p>
                    <p>
                      На данный момент почти 10 000 человек подхватили его и могут сказать
                      множество замечательных вещей о том, как это помогло им улучшить свою работу.
                    </p>
                  </>
                ),
              },
              {
                title: 'Tailwind UI',
                description: 'Красивые компоненты пользовательского интерфейса, созданные создателями Tailwind CSS.',
                images: [
                  require('@/img/resources/tailwindui-small@75.jpg').default,
                  require('@/img/resources/tailwindui@75.jpg').default,
                ],
                color: 'text-sky-500',
                href: 'https://tailwindui.com',
                body: (
                  <>
                    <p>
                      Пользовательский интерфейс Tailwind - это набор профессионально разработанных готовых
                      полностью адаптивных фрагментов HTML, которые вы можете добавить в свои проекты Tailwind.
                    </p>
                    <p>
                      В настоящее время доступно более 550 компонентов в трех различных категориях
                      (маркетинг, пользовательский интерфейс приложений и электронная коммерция),
                      и мы постоянно добавляем новые.
                    </p>
                  </>
                ),
              },
            ].map(({ title, description, images, color, body, href }) => (
              <li
                key={title}
                className="-mx-4 p-4 pb-10 bg-slate-50 flex flex-col-reverse items-start sm:mx-0 sm:p-10 sm:rounded-2xl xl:flex-row dark:bg-slate-800/50"
              >
                <div className="flex-auto">
                  <h3 className={clsx('mb-4 text-sm leading-6 font-semibold', color)}>{title}</h3>
                  <p className="mb-2 text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-200">
                    {description}
                  </p>
                  <div className="mb-6 text-sm leading-6 text-slate-600 space-y-4 dark:text-slate-400">
                    {body}
                  </div>
                  <Button
                    href={href}
                    color={[
                      'bg-slate-700 text-white hover:bg-slate-800 focus:ring-offset-2 focus:ring-offset-slate-50 focus:ring-slate-400 dark:focus:ring-offset-0',
                      'text-slate-300 group-hover:text-slate-200',
                    ]}
                    darkColor="gray"
                  >
                    Подробнее<span className="sr-only">, {title}</span>
                  </Button>
                </div>
                <div className="w-full flex-none mb-10 xl:mb-0 xl:ml-8 xl:w-[29rem]">
                  <div className="aspect-w-[1216] aspect-h-[606] sm:aspect-w-[1376] sm:aspect-h-[664] shadow-lg rounded-lg bg-slate-100 overflow-hidden dark:bg-slate-800">
                    <picture>
                      <source type="image/jpeg" srcSet={images[1]} media="(min-width: 640px)" />
                      <img src={images[0]} alt="" />
                    </picture>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-2xl leading-7 tracking-tight text-slate-900 font-bold dark:text-slate-200">
            Дополнительные ресурсы
          </h2>
          <div className="mb-10 prose prose-slate text-slate-600 max-w-3xl dark:prose-dark">
            <p>
              Tailwind - не единственный проект с открытым исходным кодом, который мы поддерживаем.
              Мы создали несколько других ресурсов, которые помогут вам в процессе проектирования и разработки.
            </p>
          </div>

          <CardGroup>
            {[
              {
                superTitle: 'Headless UI',
                title: 'Полностью не стилизованные, полностью доступные компоненты пользовательского интерфейса',
                body: (
                  <p>
                    Полностью не стилизованные, полностью доступные компоненты пользовательского интерфейса,
                    разработанные для красивой интеграции с Tailwind CSS.
                  </p>
                ),
                href: 'https://headlessui.dev',
                image: require('@/img/resources/headlessui@75.jpg').default,
                color: 'text-indigo-500',
              },
              {
                superTitle: 'Heroicons',
                title: 'Красивые SVG-иконки, созданные вручную создателями Tailwind CSS.',
                body: (
                  <p>
                    Набор из 450+ бесплатных иконок SVG под лицензией MIT.
                    Доступно в виде основных значков SVG и через собственные библиотеки React и Vue.
                  </p>
                ),
                href: 'https://heroicons.com',
                image: require('@/img/resources/heroicons@75.jpg').default,
                color: 'text-purple-500',
              },
              {
                superTitle: 'Hero Patterns',
                title: 'Бесшовные фоновые узоры SVG от создателей Tailwind CSS.',
                body: (
                  <p>
                    Коллекция из более чем 100 бесплатных высококачественных шаблонов SVG с лицензией MIT, которые вы можете использовать в своих веб-проектах.
                  </p>
                ),
                href: 'https://heropatterns.com',
                image: require('@/img/resources/heropatterns@75.jpg').default,
                color: 'text-cyan-500',
              },
            ].map((card) => (
              <Card
                key={card.title}
                button={
                  <>
                    Подробнее<span className="sr-only">, {card.title}</span>
                  </>
                }
                {...card}
              />
            ))}
          </CardGroup>
        </section>

        <section className="border-t border-slate-100 pt-16 dark:border-slate-200/5">
          <h2 className="mb-2 text-xl tracking-tight text-slate-900 font-bold dark:text-slate-200">
            Скринкасты
          </h2>
          <div className="mb-10 prose prose-slate text-slate-600 max-w-3xl dark:prose-dark">
            <p>
              Перейдите на наш официальный канал на YouTube и погрузитесь в десятки видеороликов,
              которые научат вас всему, от основ Tailwind до продвинутых концепций.
            </p>
          </div>

          <CardGroup className="mb-10">
            {[
              {
                superTitle: 'Основы',
                title: 'Перевод системы индивидуального дизайна на Tailwind CSS',
                body: (
                  <p>
                    Узнайте, как настроить Tailwind для создания собственной служебной инфраструктуры,
                    настроенной специально для вашего проекта.
                  </p>
                ),
                href: 'https://www.youtube.com/watch?v=cZc4Jn5nK3k',
                image: require('@/img/resources/translating-design-system@75.jpg').default,
                color: 'text-sky-500',
              },
              {
                superTitle: 'Основы',
                title: 'Добавление Tailwind CSS в существующий проект',
                body: (
                  <p>
                    Узнайте, как добавить Tailwind CSS в существующий проект,
                    не сталкиваясь с конфликтами имен или проблемами специфичности.
                  </p>
                ),
                href: 'https://www.youtube.com/watch?v=oG6XPy1t1KA',
                image: require('@/img/resources/existing-project@75.jpg').default,
                color: 'text-pink-500',
              },
              {
                superTitle: 'Как мы это построили',
                title:
                  'Создание интернет-магазина без головы с помощью Tailwind CSS, Shopify и Next.js',
                body: (
                  <p>
                    Выбирайте продукты из магазина Shopify с помощью GraphQL API и собирайте страницы с помощью Tailwind UI.
                  </p>
                ),
                href: 'https://www.youtube.com/watch?v=xNMYz74zNHM',
                image: require('@/img/resources/ecommerce-store@75.jpg').default,
                color: 'text-indigo-500',
              },
            ].map((card) => (
              <Card key={card.title} {...card} />
            ))}
          </CardGroup>

          <Button href="https://www.youtube.com/tailwindlabs">Смотрите все наши скринкасты</Button>
        </section>

        <section className="border-t border-slate-100 pt-16 dark:border-slate-200/5">
          <h2 className="mb-2 text-xl tracking-tight text-slate-900 font-bold dark:text-slate-200">
            Подключайтесь и вносите свой вклад
          </h2>
          <div className="mb-10 prose prose-slate text-slate-600 max-w-3xl dark:prose-dark">
            <p>
              Независимо от того, являетесь ли вы новичком или опытным пользователем,
              участие в сообществе Tailwind - отличный способ связаться с единомышленниками,
              которые создают потрясающие вещи с помощью фреймворка.
            </p>
          </div>

          <ul className="grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2">
            {[
              {
                title: 'Телеграм',
                href: 'https://t.me/tailwindcss_rus',
                description:
                  'Присоединяйтесь к чату в Telegram, чтобы поговорить о Tailwind и других связанных с ним темах.',
                icon: (
                  <Icon className="bg-sky-100">
                    <TelegramIcon className="w-6 h-auto" />
                  </Icon>
                ),
              },
              {
                title: 'Discord',
                href: '/discord',
                description:
                  'Присоединяйтесь к более чем 10 000 участников в группе Discord, чтобы поговорить о Tailwind и других связанных темах.',
                icon: (
                  <Icon className="bg-[#838CF1]/[0.15] dark:bg-indigo-700">
                    <DiscordIcon className="w-6 h-auto dark:fill-indigo-200" />
                  </Icon>
                ),
                className:
                  'ring-1 ring-slate-900/10 dark:bg-indigo-500 dark:ring-0 dark:highlight-white/20',
              },
              {
                title: 'GitHub Discussions',
                href: 'https://github.com/tailwindlabs/tailwindcss/discussions',
                description:
                  'Возникли проблемы с вашим проектом? Свяжитесь с другими членами сообщества Tailwind, чтобы получить некоторую помощь.',
                icon: (
                  <Icon className="bg-slate-100 dark:bg-slate-800">
                    <GitHubIcon className="w-7 h-auto dark:fill-slate-400" />
                  </Icon>
                ),
                className:
                  'ring-1 ring-slate-900/10 dark:bg-slate-600 dark:ring-0 dark:highlight-white/20',
              },
            ].map(({ title, href, description, icon, className }) => (
              <li key={title} className="relative flex flex-row-reverse">
                <div className="peer group flex-auto ml-6">
                  <h3 className="mb-2 font-semibold text-slate-900 dark:text-slate-200">
                    <a
                      href={href}
                      className="before:absolute before:-inset-3 before:rounded-2xl sm:before:-inset-4"
                    >
                      {title}
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
                    </a>
                  </h3>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {description}
                  </p>
                </div>
                <div
                  className={clsx(
                    'flex-none w-16 h-16 p-[0.1875rem] rounded-full shadow overflow-hidden pointer-events-none',
                    className
                  )}
                >
                  {icon}
                </div>
                <div className="absolute -z-10 -inset-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 opacity-0 peer-hover:opacity-100 sm:-inset-4" />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </BasicLayout>
  )
}

Resources.layoutProps = {
  meta: {
    title: 'Ресурсы',
  },
  Layout: DocumentationLayout,
}
