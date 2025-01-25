import { css, js, shell, html, type Page, type Step, type Tile } from "./utils";
import Logo from "@/docs/img/guides/adonis.react.svg";
import LogoDark from "@/docs/img/guides/adonis-white.react.svg";

export let tile: Tile = {
  title: "AdonisJS",
  description: "Полнофункциональный веб-фреймворк для Node.js.",

  Logo,
  LogoDark,
};

export let page: Page = {
  title: "Установите Tailwind CSS с помощью AdonisJS",
  description: "Настройка Tailwind CSS в проекте AdonisJS.",
};

export let steps: Step[] = [
  {
    title: "Создайте свой проект",
    body: (
      <p>
        Начните с создания нового проекта AdonisJS, если у вас его еще нет. Наиболее распространенный подход —
        использовать <a href="https://docs.adonisjs.com/guides/getting-started/installation">Create AdonisJS</a>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npm init adonisjs@latest my-project -- --kit=web
        cd my-project
      `,
    },
  },
  {
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
        import adonisjs from '@adonisjs/vite/client'
        // [!code highlight:2]
        import tailwindcss from '@tailwindcss/vite'

        export default defineConfig({
          plugins: [
            // [!code highlight:2]
            tailwindcss(),
            adonisjs({
              // …
            }),
          ],
        })
      `,
    },
  },
  {
    title: "Импортируйте Tailwind CSS",
    body: (
      <p>
        Добавьте <code>@import</code> в <code>./resources/css/app.css</code>, который импортирует стили Tailwind CSS.
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
    title: "Начните процесс сборки",
    body: (
      <p>
        Запустите процесс сборки с помощью <code>npm run dev</code>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: "npm run dev",
    },
  },
  {
    title: "Начните использовать Tailwind в своем проекте",
    body: (
      <p>
        Убедитесь, что ваш скомпилированный CSS включен в <code>{"<head>"}</code> , а затем начните использовать
        классы утилиты Tailwind для стилизации вашего контента.
      </p>
    ),
    code: {
      name: "home.edge",
      lang: "edge",
      code: html`
        <!doctype html>
        <html>
          <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <!-- [!code highlight:2] -->
            @vite(['resources/css/app.css', 'resources/js/app.js'])
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
