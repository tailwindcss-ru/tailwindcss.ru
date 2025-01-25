import { css, js, Page, shell, Step, Tile } from "./utils";
import Logo from "@/docs/img/guides/meteor.react.svg";

export let tile: Tile = {
  title: "Meteor",
  description: "Полный стек JavaScript-фреймворк для разработки кроссплатформенных приложений.",
  Logo,
};

export let page: Page = {
  title: "Установите Tailwind CSS с помощью Meteor",
  description: "Настройка Tailwind CSS в проекте Meteor.",
};

export let steps: Step[] = [
  {
    title: "Создайте свой проект",
    body: (
      <p>
        Начните с создания нового проекта Meteor, если у вас его еще нет. Наиболее распространенный подход — использовать{" "}
        <a href="https://docs.meteor.com/about/install.html">Meteor CLI</a>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npx meteor create my-project
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
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npm install tailwindcss @tailwindcss/postcss postcss postcss-load-config
      `,
    },
  },
  {
    title: "Настройте плагины PostCSS",
    body: (
      <p>
        Создайте файл <code>postcss.config.mjs</code> в корне вашего проекта и добавьте плагин{" "}
        <code>@tailwindcss/postcss</code> в вашу конфигурацию PostCSS.
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
        Добавьте <code>@import</code> для Tailwind CSS в файл <code>./client/main.css</code>.
      </p>
    ),
    code: {
      name: "main.css",
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
        Запустите процесс сборки с помощью <code>npm run start</code>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npm run start
      `,
    },
  },
  {
    title: "Начните использовать Tailwind в своем проекте",
    body: <p>Начните использовать классы утилиты Tailwind для стилизации своего контента.</p>,
    code: {
      name: "App.jsx",
      lang: "jsx",
      code: js`
        export const App = () => (
          // [!code highlight:4]
          <h1 className="text-3xl font-bold underline">
            Hello world!
          </h1>
        )
      `,
    },
  },
];
