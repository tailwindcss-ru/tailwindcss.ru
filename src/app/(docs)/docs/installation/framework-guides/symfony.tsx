import { css, html, js, Page, shell, Step, Tile, twig } from "./utils";
import Logo from "@/docs/img/guides/symfony.react.svg";
import LogoDark from "@/docs/img/guides/symfony-white.react.svg";

export let tile: Tile = {
  title: "Symfony",
  description: "PHP-фреймворк для создания веб-сайтов и веб-приложений.",
  Logo,
  LogoDark,
};

export let page: Page = {
  title: "Установите Tailwind CSS с помощью Symfony",
  description: "Настройка Tailwind CSS в проекте Symfony.",
};

export let steps: Step[] = [
  {
    title: "Создайте свой проект",
    body: (
      <p>
        Начните с создания нового проекта Symfony, если у вас его еще нет. Наиболее распространенный подход — использовать{" "}
        <a href="https://symfony.com/download">установщик Symfony</a>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        symfony new --webapp my-project
        cd my-project
      `,
    },
  },
  {
    title: "Установите Webpack Encore",
    body: (
      <p>
        Установите Webpack Encore, который занимается сборкой ваших ресурсов. Подробнее смотрите в{" "}
        <a href="https://symfony.com/doc/current/frontend.html">документации</a>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        composer remove symfony/ux-turbo symfony/asset-mapper symfony/stimulus-bundle
        composer require symfony/webpack-encore-bundle symfony/ux-turbo symfony/stimulus-bundle
      `,
    },
  },
  {
    title: "Установите Tailwind CSS",
    body: (
      <p>
        Используя npm, установите <code>@tailwindcss/postcss</code> и его одноранговые зависимости, а также{" "}
        <code>postcss-loader</code>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npm install tailwindcss @tailwindcss/postcss postcss postcss-loader
      `,
    },
  },
  {
    title: "Включите поддержку PostCSS",
    body: (
      <p>
        В файле <code>webpack.config.js</code> включите PostCSS Loader. Подробнее смотрите в{" "}
        <a href="https://symfony.com/doc/current/frontend/encore/postcss.html">документации</a>.
      </p>
    ),
    code: {
      name: "webpack.config.js",
      lang: "js",
      code: js`
        Encore
          .enablePostCssLoader()
        ;
      `,
    },
  },
  {
    title: "Настройте плагины PostCSS",
    body: (
      <p>
        Создайте файл <code>postcss.config.mjs</code> в корне вашего проекта и добавьте плагин {" "} <code>@tailwindcss/postcss</code> в вашу конфигурацию PostCSS.
      </p>
    ),
    code: {
      name: "postcss.config.mjs",
      lang: "js",
      code: js`
        export default {
          plugins: {
            // [!code highlight:2]
            "@tailwindcss/postcss": {},
          },
        };
      `,
    },
  },
  {
    title: "Импортируйте Tailwind CSS",
    body: (
      <p>
        Добавьте <code>@import</code> в <code>./assets/styles/app.css</code>, который импортирует Tailwind CSS.
      </p>
    ),
    code: {
      name: "app.css",
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
    title: "Начните использовать Tailwind в своем проекте",
    body: (
      <p>
        Убедитесь, что ваш скомпилированный CSS включен в <code>{"<head>"}</code> , а затем начните использовать классы утилиты Tailwind для стилизации вашего контента.
      </p>
    ),
    code: {
      name: "base.html.twig",
      lang: "twig",
      code: twig`
        <!doctype html>
        <html>
          <head>
            <meta charset="utf-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <!-- [!code highlight:4] -->
            {% block stylesheets %}
              {{ encore_entry_link_tags('app') }}
            {% endblock %}
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
