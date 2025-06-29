import { Cta } from "@/components/cta";
import { type Step, Steps } from "@/components/installation-steps";
import dedent from "dedent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Установка Tailwind CSS с Vite",
  description:
    "Установка Tailwind CSS в качестве плагина Vite — это наиболее удобный способ интеграции с такими фреймворками, как Laravel, SvelteKit, React Router, Nuxt и SolidJS.",
  openGraph: {
    type: "article",
    title: "Установка с Vite",
    description: "Интеграция Tailwind CSS с такими фреймворками, как Laravel, SvelteKit, React Router и SolidJS.",
    images: "https://tailwindcss.ru/api/og?path=/docs/installation/using-vite",
    url: "https://tailwindcss.ru/docs/installation/using-vite",
  },
};

const steps: Step[] = [
  {
    title: "Создайте свой проект",
    body: (
      <p>
        Начните с создания нового проекта Vite, если у вас его еще нет. Наиболее распространенный подход — использовать{" "}
        <a href="https://vite.dev/guide/#scaffolding-your-first-vite-project">Create Vite</a>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: dedent`
        npm create vite@latest my-project
        cd my-project
      `,
    },
  },
  {
    title: "Установите Tailwind CSS",
    body: (
      <p>
        Установите <code>tailwindcss</code> и <code>@tailwindcss/vite</code> через npm.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: dedent`
        npm install tailwindcss @tailwindcss/vite
      `,
    },
  },
  {
    title: "Настройте плагин Vite",
    body: (
      <p>
        Добавьте плагин <code>@tailwindcss/vite</code> в конфигурацию Vite.
      </p>
    ),
    code: {
      name: "vite.config.ts",
      lang: "js",
      code: dedent`
        import { defineConfig } from 'vite'
        // [!code highlight:2]
        import tailwindcss from '@tailwindcss/vite'

        export default defineConfig({
          plugins: [
            // [!code highlight:2]
            tailwindcss(),
          ],
        })
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
          <link href="/src/style.css" rel="stylesheet">
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
      <div id="content-wrapper" className="prose relative z-10 mb-10 max-w-3xl" data-content="true">
        <h3 data-title="true" className="sr-only">
          Установка Tailwind CSS как плагина Vite
        </h3>
        <p>
          Установка Tailwind CSS как плагина Vite — наиболее простой способ его интеграции с такими фреймворками,
          как Laravel, SvelteKit, React Router, Nuxt и SolidJS.
        </p>
      </div>
      <Steps steps={steps} />
      <div className="my-4 md:my-16">
        <Cta label="Изучите наши руководства по фреймворкам" href="/docs/installation/framework-guides">
          <strong className="font-semibold text-gray-950 dark:text-white">Вы застряли?</strong> Настройка Tailwind с Vite может немного отличаться в зависимости от разных инструментов сборки. Проверьте наши руководства по фреймворкам, чтобы узнать, есть ли у нас более конкретные инструкции для вашей конкретной настройки.
        </Cta>
      </div>
    </>
  );
}
