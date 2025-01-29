import { Metadata } from "next";
import { TabBar } from "@/components/installation-tabs";

export const metadata: Metadata = {
  title: {
    template: "%s - Tailwind CSS",
    default: "Installation",
  },
  openGraph: {
    type: "article",
    title: {
      template: "%s - Installation",
      default: "Installation",
    },
  },
};

const tabs = {
  "Использование Vite": "/docs/installation/using-vite",
  "Использование PostCSS": "/docs/installation/using-postcss",
  "Tailwind CLI": "/docs/installation/tailwind-cli",
  "Руководства по фреймворкам": "/docs/installation/framework-guides",
  "Play CDN": "/docs/installation/play-cdn",
};

const readNext = [
  {
    title: "Стилизация с использованием классов утилит",
    href: "/docs/styling-with-utility-classes",
    body: (
      <p>Использование рабочего процесса, основанного на утилитах, для создания сложных компонентов из ограниченного набора примитивных утилит.</p>
    ),
    // icon: {
    //   className: "dark:bg-indigo-500 dark:highlight-white/20",
    //   // light: require("@/img/icons/home/utility-first.png").default.src,
    //   // dark: require("@/img/icons/home/dark/utility-first.png").default.src,
    // },
    icon: require("@/components/home/icons/css-grid-icon").default,
  },
  {
    title: "Адаптивный дизайн",
    href: "/docs/responsive-design",
    body: <p>Создавайте полностью адаптивные пользовательские интерфейсы, которые адаптируются к любому размеру экрана, используя адаптивные модификаторы.</p>,
    icon: {
      className: "dark:bg-indigo-500 dark:highlight-white/20",
      // light: require("@/img/icons/home/mobile-first.png").default.src,
      // dark: require("@/img/icons/home/dark/mobile-first.png").default.src,
    },
  },
  {
    title: "Наведение, фокус и другие состояния",
    href: "/docs/hover-focus-and-other-states",
    body: <p>Создавайте стили элементов в интерактивных состояниях, таких как наведение, фокус и т. д., используя условные модификаторы.</p>,
    icon: {
      className: "dark:bg-blue-500 dark:highlight-white/20",
      // light: require("@/img/icons/home/state-variants.png").default.src,
      // dark: require("@/img/icons/home/dark/state-variants.png").default.src,
    },
  },
  {
    title: "Темный режим",
    href: "/docs/dark-mode",
    body: <p>Оптимизируйте свой сайт для темного режима непосредственно в HTML-коде, используя модификатор темного режима.</p>,
    icon: {
      className: "dark:bg-slate-600 dark:highlight-white/20",
      // light: require("@/img/icons/home/dark-mode.png").default.src,
      // dark: require("@/img/icons/home/dark/dark-mode.png").default.src,
    },
  },
  {
    title: "Переиспользование стилей",
    href: "/docs/reusing-styles",
    body: <p>Управляйте дублированием и поддерживайте удобство поддержки проектов, создавая повторно используемые абстракции.</p>,
    icon: {
      className: "dark:bg-sky-500 dark:highlight-white/20",
      // light: require("@/img/icons/home/component-driven.png").default.src,
      // dark: require("@/img/icons/home/dark/component-driven.png").default.src,
    },
  },
  {
    title: "Кастомизация фреймворка",
    href: "/docs/adding-custom-styles",
    body: <p>Настройте структуру в соответствии с вашим брендом и дополните ее собственными стилями.</p>,
    icon: {
      className: "dark:bg-pink-500 dark:highlight-white/30",
      // light: require("@/img/icons/home/customization.png").default.src,
      // dark: require("@/img/icons/home/dark/customization.png").default.src,
    },
  },
];

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Add a placeholder div so the Next.js router can find the scrollable element. */}
      <div hidden />

      <div className="isolate mx-auto grid w-full max-w-2xl grid-cols-1 gap-10 pt-10 md:pb-24 xl:max-w-5xl">
        <div className="px-4 sm:px-6">
          <p
            data-section="true"
            className="font-mono text-xs/6 font-medium tracking-widest text-gray-600 uppercase dark:text-gray-400"
          >
            Установка
          </p>
          <h1 className="mt-2 text-3xl font-medium tracking-tight text-gray-950 dark:text-white">
            Начните работу с Tailwind CSS
          </h1>
          <p data-description="true" className="mt-6 text-base/7 text-gray-700 dark:text-gray-300">
            Tailwind CSS работает путем сканирования всех ваших HTML-файлов, JavaScript-компонентов и любых других
            шаблонов на наличие классов, генерации соответствующих стилей и последующей записи их в статический CSS-файл.
          </p>
          <p className="mt-4 text-base/7 text-gray-700 dark:text-gray-300">
            Он быстрый, гибкий и надежный — без необходимости использования runtime.
          </p>

          <div className="mt-10" data-content="true">
            <section className="relative mb-16">
              <div className="relative z-10">
                <h2
                  data-docsearch-ignore
                  className="mb-6 text-lg font-semibold tracking-tight text-gray-950 dark:text-white"
                >
                  Установка
                </h2>
                <TabBar
                  tabs={Object.entries(tabs).map(([title, url]) => ({
                    title,
                    url,
                  }))}
                />
              </div>
              {children}
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
