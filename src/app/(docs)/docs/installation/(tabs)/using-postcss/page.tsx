import { Cta } from "@/components/cta";
import { type Step, Steps } from "@/components/installation-steps";
import dedent from "dedent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Установка Tailwind CSS с PostCSS",
  description:
    "Установка Tailwind CSS как плагина PostCSS — наиболее простой способ его интеграции с такими фреймворками, как Next.js и Angular.",
  openGraph: {
    type: "article",
    title: "Установка с помощью PostCSS",
    description: "Интегрируйте Tailwind CSS с такими фреймворками, как Next.js и Angular.",
    images: "https://tailwindcss.com/api/og?path=/docs/installation/using-postcss",
    url: "https://tailwindcss.com/docs/installation/using-postcss",
  },
};

const steps: Step[] = [
  {
    title: "Установите Tailwind CSS",
    body: (
      <p>
        Установите <code>tailwindcss</code>, <code>@tailwindcss/postcss</code> и <code>postcss</code> через npm.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: dedent`
        npm install tailwindcss @tailwindcss/postcss postcss
      `,
    },
  },
  {
    title: "Добавьте Tailwind в конфигурацию PostCSS",
    body: (
      <p>
        Добавьте <code>@tailwindcss/postcss</code> в файл <code>postcss.config.mjs</code> или в любое место
        в вашем проекте, где настроен PostCSS.
      </p>
    ),
    code: {
      name: "postcss.config.mjs",
      lang: "js",
      code: dedent`
        export default {
          plugins: {
            // [!code highlight:2]
            "@tailwindcss/postcss": {},
          }
        }
      `,
    },
  },
  {
    title: "Импортируйте Tailwind CSS",
    body: (
      <p>
        Добавьте <code>@import</code> в свой CSS-файл, который импортирует Tailwind CSS.
      </p>
    ),
    code: {
      name: "CSS",
      lang: "css",
      code: dedent`
        @import "tailwindcss";
      `,
    },
  },
  {
    title: "Начните процесс сборки",
    body: (
      <p>
        Запустите процесс сборки с помощью <code>npm run dev</code> или любой другой команды,{" "}
        настроенной в файле <code>package.json</code>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: dedent`
        npm run dev
      `,
    },
  },
  {
    title: "Начните использовать Tailwind в своем HTML",
    body: (
      <p>
        Убедитесь, что ваш скомпилированный CSS включен в <code>{"<head>"}</code>{" "}
        <em>(ваша платформа может сделать это за вас)</em>, затем начните использовать классы утилиты Tailwind
        для стилизации вашего контента.
      </p>
    ),
    code: {
      name: "HTML",
      lang: "html",
      code: dedent`
        <!doctype html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <!-- [!code highlight:2] -->
          <link href="/dist/styles.css" rel="stylesheet">
        </head>
        <body>
          <!-- [!code highlight:4] -->
          <h1 class="text-3xl font-bold underline">
            Hello world!
          </h1>
        </body>
        </html>
      `,
    },
  },
];

export default function Page() {
  return (
    <>
      <div id="content-wrapper" className="prose relative z-10 mb-10 max-w-3xl">
        <h3 className="sr-only">Установите Tailwind CSS как плагина PostCSS</h3>
        <p>
          Установка Tailwind CSS как плагина PostCSS — наиболее простой способ его интеграции с такими фреймворками,
          как Next.js и Angular.
        </p>
      </div>
      <Steps steps={steps} />
      <div className="my-4 md:my-16">
        <Cta label="Explore our framework guides" href="/docs/installation/framework-guides">
          <strong className="font-semibold text-gray-950 dark:text-white">Вы застряли?</strong> Настройка Tailwind с PostCSS может немного отличаться в зависимости от различных инструментов сборки. Проверьте наши руководства по фреймворкам, чтобы узнать, есть ли у нас более конкретные инструкции для вашей конкретной настройки.
        </Cta>
      </div>
    </>
  );
}
