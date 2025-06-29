import { astro, css, js, Page, shell, Step, Tile } from "./utils";
import Logo from "@/docs/img/guides/gatsby.react.svg";

export let tile: Tile = {
  title: "Gatsby",
  description: "Фреймворк для создания статических сайтов с React и GraphQL.",
  Logo,
};

export let page: Page = {
  title: "Установка Tailwind CSS с Gatsby",
  description: "Настройка Tailwind CSS в проекте Gatsby.",
};

export let steps: Step[] = [
  {
    title: "Создайте ваш проект",
    body: (
      <p>
        Начните с создания нового проекта Gatsby, если у вас еще нет настроенного. Самый распространенный подход — использовать{" "}
        <a href="https://www.gatsbyjs.com/docs/reference/gatsby-cli/#how-to-use-gatsby-cli">Gatsby CLI</a>.
      </p>
    ),
    code: {
      name: "Терминал",
      lang: "shell",
      code: shell`
        gatsby new my-project
        cd my-project
      `,
    },
  },
  {
    title: "Установите Tailwind CSS",
    body: (
      <p>
        Используя npm, установите <code>@tailwindcss/postcss</code>, его peer зависимости и{" "}
        <code>gatsby-plugin-postcss</code>.
      </p>
    ),
    code: {
      name: "Терминал",
      lang: "shell",
      code: shell`
        npm install @tailwindcss/postcss tailwindcss postcss gatsby-plugin-postcss
      `,
    },
  },
  {
    title: "Включите Gatsby PostCSS плагин",
    body: (
      <p>
        В вашем файле <code>gatsby-config.js</code> включите <code>gatsby-plugin-postcss</code>. Смотрите{" "}
        <a href="https://www.gatsbyjs.com/plugins/gatsby-plugin-postcss/">документацию плагина</a> для получения дополнительной
        информации.
      </p>
    ),
    code: {
      name: "gatsby-config.js",
      lang: "js",
      code: js`
        module.exports = {
          plugins: [
            // [!code highlight:2]
            'gatsby-plugin-postcss',
            // ...
          ],
        }
      `,
    },
  },
  {
    title: "Настройте PostCSS плагины",
    body: (
      <p>
        Создайте файл <code>postcss.config.js</code> в корне вашего проекта и добавьте{" "}
        <code>@tailwindcss/postcss</code> плагин в вашу PostCSS конфигурацию.
      </p>
    ),
    code: {
      name: "postcss.config.js",
      lang: "js",
      code: js`
        module.exports = {
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
        Создайте файл <code>./src/styles/global.css</code> и добавьте <code>@import</code> для Tailwind CSS.
      </p>
    ),
    code: {
      name: "global.css",
      lang: "css",
      code: css`
        @import "tailwindcss";
      `,
    },
  },
  {
    title: "Импортируйте CSS файл",
    body: (
      <p>
        Создайте файл <code>gatsby-browser.js</code> в корне вашего проекта, если он еще не существует, и импортируйте
        ваш недавно созданный файл <code>./src/styles/global.css</code>.
      </p>
    ),
    code: {
      name: "gatsby-browser.js",
      lang: "js",
      code: js`
        import './src/styles/global.css';
      `,
    },
  },
  {
    title: "Запустите процесс сборки",
    body: (
      <p>
        Запустите процесс сборки с помощью <code>gatsby develop</code>.
      </p>
    ),
    code: {
      name: "Терминал",
      lang: "shell",
      code: shell`
        gatsby develop
      `,
    },
  },
  {
    title: "Начните использовать Tailwind в вашем проекте",
    body: <p>Начните использовать утилитарные классы Tailwind для стилизации вашего контента.</p>,
    code: {
      name: "index.js",
      lang: "js",
      code: js`
        export default function IndexPage() {
          return (
            <Layout>
              /* [!code highlight:4] */
              <h1 className="text-3xl font-bold underline">
                Привет, мир!
              </h1>
            </Layout>
          )
        }
      `,
    },
  },
];
