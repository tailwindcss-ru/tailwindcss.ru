import { css, html, js, Page, shell, Step, Tile } from "./utils";
import Logo from "@/docs/img/guides/parcel.react.svg";

export let tile: Tile = {
  title: "Parcel",
  description: "Инструмент сборки с нулевой конфигурацией для веб-сайтов.",
  Logo,
};

export let page: Page = {
  title: "Установите Tailwind CSS с помощью Parcel",
  description: "Настройка Tailwind CSS в проекте Parcel.",
};

export let steps: Step[] = [
  {
    title: "Создайте свой проект",
    body: (
      <p>
        Начните с создания нового проекта Parcel, если у вас его еще нет. Наиболее распространенный подход —
        добавить Parcel в качестве dev-зависимости к вашему проекту, как описано в их{" "}
        <a href="https://parceljs.org/getting-started/webapp/">руководстве по началу работы</a>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        mkdir my-project
        cd my-project
        npm init -y
        npm install parcel
        mkdir src
        touch src/index.html
      `,
    },
  },
  {
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
        npm install tailwindcss @tailwindcss/postcss
      `,
    },
  },
  {
    title: "Настройте PostCSS",
    body: (
      <p>
        Создайте файл <code>.postcssrc</code> в корневом каталоге проекта и включите плагин{" "}
        <code>@tailwindcss/postcss</code>.
      </p>
    ),
    code: {
      name: ".postcssrc",
      lang: "json",
      code: js`
        {
          "plugins": {
            "@tailwindcss/postcss": {}
          }
        }
      `,
    },
  },
  {
    title: "Импортируйте Tailwind CSS",
    body: (
      <p>
        Создайте файл <code>./src/index.css</code> и добавьте <code>@import</code> для Tailwind CSS.
      </p>
    ),
    code: {
      name: "index.css",
      lang: "css",
      code: css`
        @import "tailwindcss";
      `,
    },
  },
  {
    title: "Начните процесс сборки",
    body: (
      <p>
        Запустите процесс сборки с помощью <code>npx parcel src/index.html</code>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npx parcel src/index.html
      `,
    },
  },
  {
    title: "Начните использовать Tailwind в своем проекте",
    body: (
      <p>
        Добавьте свой CSS-файл в <code>{"<head>"}</code> и начните использовать классы утилиты
        Tailwind для стилизации своего контента.
      </p>
    ),
    code: {
      name: "index.html",
      lang: "html",
      code: html`
        <!doctype html>
        <html>
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <!-- [!code highlight:2] -->
            <link href="./index.css" type="text/css" rel="stylesheet" />
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
