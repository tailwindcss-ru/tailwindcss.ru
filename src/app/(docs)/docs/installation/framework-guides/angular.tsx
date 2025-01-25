import { css, html, js, shell, Page, Step, Tile } from "./utils";
import Logo from "@/docs/img/guides/angular.react.svg";
import LogoDark from "@/docs/img/guides/angular-white.react.svg";

export let tile: Tile = {
  title: "Angular",
  description: "Платформа для создания мобильных и десктопных веб-приложений.",
  Logo,
  LogoDark,
};

export let page: Page = {
  title: "Установите Tailwind CSS с помощью Angular",
  description: "Настройка Tailwind CSS в проекте Angular.",
};

export let steps: Step[] = [
  {
    title: "Создайте свой проект",
    body: (
      <p>
        Начните с создания нового проекта Angular, если у вас его еще нет. Наиболее распространенный подход — использовать{" "}
        <a href="https://angular.dev/tools/cli/setup-local">Angular CLI</a>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        ng new my-project --style css
        cd my-project
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

    // ПРИМЕЧАНИЕ: Флаг `--force` используется для обеспечения успешной установки. Angular имеет зависимость от `tailwindcss` v3, что приводит к ошибкам при установке `tailwindcss` v4.
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npm install tailwindcss @tailwindcss/postcss postcss --force
      `,
    },
  },
  {
    title: "Настройте плагины PostCSS",
    body: (
      <p>
        Создайте файл <code>.postcssrc.json</code> в корне вашего проекта и добавьте плагин{" "}
        <code>@tailwindcss/postcss</code> в вашу конфигурацию PostCSS.
      </p>
    ),
    code: {
      name: ".postcssrc.json",
      lang: "js",
      code: js`
        {
          "plugins": {
            // [!code highlight:2]
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
        Добавьте <code>@import</code> в <code>./src/styles.css</code>, который импортирует Tailwind CSS.
      </p>
    ),
    code: {
      name: "styles.css",
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
        Запустите процесс сборки с помощью <code>ng serve</code>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        ng serve
      `,
    },
  },
  {
    title: "Начните использовать Tailwind в своем проекте",
    body: <p>Начните использовать классы утилиты Tailwind для стилизации вашего контента.</p>,
    code: {
      name: "app.component.html",
      lang: "html",
      code: html`
        <!-- [!code highlight:4] -->
        <h1 class="text-3xl font-bold underline">
          <!-- prettier-ignore -->
          Hello world!
        </h1>
      `,
    },
  },
];
