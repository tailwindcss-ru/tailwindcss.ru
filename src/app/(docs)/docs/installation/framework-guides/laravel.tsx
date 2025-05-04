import { css, html, js, Page, shell, Step, Tab, Tile } from "./utils";
import Logo from "@/docs/img/guides/laravel.react.svg";

export let tile: Tile = {
  title: "Laravel",
  description: "Фреймворк веб-приложений PHP с выразительным, элегантным синтаксисом.",
  Logo,
};

export let page: Page = {
  title: "Установите Tailwind CSS с помощью Laravel",
  description: "Настройка Tailwind CSS в проекте Laravel.",
};

export let tabs: Tab[] = [
  {
    slug: "vite",
    title: "Используя Vite",
  },
  {
    slug: "mix",
    title: "Используя Laravel Mix",
  },
];

export let steps: Step[] = [
  {
    tabs: ["vite"],
    title: "Создайте свой проект",
    body: (
      <p>
        Начните с создания нового проекта Laravel, если у вас его еще нет. Наиболее распространенный подход — использовать{" "}
        <a href="https://laravel.com/docs#creating-an-application">установщик Laravel</a>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        laravel new my-project
        cd my-project
      `,
    },
  },

  {
    tabs: ["vite"],
    title: "Установите Tailwind CSS",
    body: (
      <p>
        Установите <code>@tailwindcss/vite</code> и его зависимости через npm.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npm install tailwindcss @tailwindcss/vite
      `,
    },
  },
  {
    tabs: ["mix"],
    title: "Установите Tailwind CSS",
    body: (
      <p>
        Установите <code>@tailwindcss/postcss</code> и его зависимости через npm.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npm install tailwindcss @tailwindcss/postcss postcss
      `,
    },
  },

  {
    tabs: ["vite"],
    title: "Настройте плагин Vite",
    body: (
      <p>
        Добавьте плагин <code>@tailwindcss/vite</code> в конфигурацию Vite.
      </p>
    ),
    code: {
      name: "vite.config.ts",
      lang: "ts",
      code: js`
        import { defineConfig } from 'vite'
        // [!code highlight:2]
        import tailwindcss from '@tailwindcss/vite'

        export default defineConfig({
          plugins: [
            // [!code highlight:2]
            tailwindcss(),
            // …
          ],
        })
      `,
    },
  },

  {
    tabs: ["mix"],
    title: "Добавьте Tailwind в конфигурацию Laravel Mix",
    body: (
      <p>
        В файле <code>webpack.mix.js</code> добавьте <code>tailwindcss</code> как плагин PostCSS.
      </p>
    ),
    code: {
      name: "webpack.mix.js",
      lang: "js",
      code: js`
        mix
          .js("resources/js/app.js", "public/js")
          .postCss("resources/css/app.css", "public/css", [
            // [!code highlight:2]
            require("@tailwindcss/postcss"),
          ]);
      `,
    },
  },

  {
    title: "Импортируйте Tailwind CSS",
    body: (
      <p>
        Добавьте <code>@import</code> в <code>./resources/css/app.css</code>, который импортирует Tailwind CSS.
        Кроме того, скажите Tailwind CSS сканировать ваш каталог <code>resources/views</code> на наличие утилит.
      </p>
    ),
    code: {
      name: "app.css",
      lang: "css",
      code: css`
        @import "tailwindcss";
        @source "../views";
      `,
    },
  },

  {
    tabs: ["vite"],
    title: "Начните процесс сборки",
    body: (
      <p>
        Запустите процесс сборки с помощью <code>npm run dev</code>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npm run dev
      `,
    },
  },

  {
    tabs: ["mix"],
    title: "Начните процесс сборки",
    body: (
      <p>
        Запустите процесс сборки с помощью <code>npm run watch</code>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npm run watch
      `,
    },
  },

  {
    tabs: ["vite"],
    title: "Начните использовать Tailwind в своем проекте",
    body: (
      <p>
        Убедитесь, что ваш скомпилированный CSS включен в <code>{"<head>"}</code>,
        а затем начните использовать классы утилит Tailwind для стилизации вашего контента.
      </p>
    ),
    code: {
      name: "app.blade.php",
      lang: "blade",
      code: html`
        <!doctype html>
        <html>
          <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <!-- [!code highlight:2] -->
            @vite('resources/css/app.css')
          </head>
          <body>
            <!-- [!code highlight:4] -->
            <h1 class="text-3xl font-bold underline">
              <!-- prettier-ignore -->
              Hello world!
            </h1>
          </body>
        </html>
      `,
    },
  },
  {
    tabs: ["mix"],
    title: "Начните использовать Tailwind в своем проекте",
    body: (
      <p>
        Убедитесь, что ваш скомпилированный CSS включен в <code>{"<head>"}</code>,
        а затем начните использовать классы утилиты Tailwind для стилизации вашего контента.
      </p>
    ),
    code: {
      name: "app.blade.php",
      lang: "blade",
      code: html`
        <!doctype html>
        <html>
          <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <!-- [!code highlight:2] -->
            <link href="{{ asset('css/app.css') }}" rel="stylesheet" />
          </head>
          <body>
            <!-- [!code highlight:4] -->
            <h1 class="text-3xl font-bold underline">
              <!-- prettier-ignore -->
              Hello world!
            </h1>
          </body>
        </html>
      `,
    },
  },
];
