import { css, html, js, Page, shell, Step, Tab, Tile } from "./utils";
import Logo from "@/docs/img/guides/rspack.react.svg";

export let tile: Tile = {
  title: "Rspack",
  description: "Быстрый веб-упаковщик на основе Rust.",
  Logo,
};

export let page: Page = {
  title: "Установите Tailwind CSS с помощью Rspack",
  description: "Настройка Tailwind CSS в проекте Rspack.",
};

export let tabs: Tab[] = [
  {
    slug: "react",
    title: "Используя React",
  },
  {
    slug: "vue",
    title: "Используя Vue",
  },
];

export let steps: Step[] = [
  {
    title: "Создайте свой проект",
    body: (
      <p>
        Начните с создания нового проекта Rspack, если у вас его еще нет. Наиболее распространенный подход — использовать{" "}
        <a href="https://rspack.dev/guide/start/quick-start#using-the-rspack-cli">Rspack CLI</a>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npm create rspack@latest
      `,
    },
  },

  {
    title: "Установите Tailwind CSS",
    body: (
      <p>
        Установите <code>@tailwindcss/postcss</code> и его одноранговые зависимости.
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
        В файле <code>rspack.config.js</code> включите загрузчик PostCSS. Подробнее смотрите в{" "}
        <a href="https://rspack.dev/guide/tech/css#tailwind-css">документации</a>.
      </p>
    ),
    code: {
      name: "rspack.config.ts",
      lang: "ts",
      code: js`
        export default defineConfig({
          // ...
          module: {
            rules: [
              // [!code highlight:6]
              {
                test: /\.css$/,
                use: ["postcss-loader"],
                type: "css",
              },
              // ...
            ],
          },
        }
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
    tabs: ["react"],
    title: "Импортируйте Tailwind CSS",
    body: (
      <p>
        Добавьте <code>@import</code> в <code>./src/index.css</code>, который импортирует Tailwind CSS.
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
    tabs: ["vue"],
    title: "Импортируйте Tailwind CSS",
    body: (
      <p>
        Добавьте <code>@import</code> в <code>./src/style.css</code>, который импортирует Tailwind CSS.
      </p>
    ),
    code: {
      name: "style.css",
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
    tabs: ["react"],
    title: "Начните использовать Tailwind в своем проекте",
    body: <p>Начните использовать классы утилиты Tailwind для стилизации своего контента.</p>,
    code: {
      name: "App.jsx",
      lang: "jsx",
      code: js`
        export default function App() {
          return (
            // [!code highlight:4]
            <h1 className="text-3xl font-bold underline">
              Hello world!
            </h1>
          )
        }
      `,
    },
  },
  {
    tabs: ["vue"],
    title: "Начните использовать Tailwind в своем проекте",
    body: <p>Начните использовать классы утилиты Tailwind для стилизации своего контента.</p>,
    code: {
      name: "App.vue",
      lang: "vue",
      code: html`
        <template>
          <!-- [!code highlight:4] -->
          <h1 class="text-3xl font-bold underline">
            <!-- prettier-ignore -->
            Hello world!
          </h1>
        </template>
      `,
    },
  },
];

// let tabs = [
//       {
//   {
//     name: "Используя Vue",
//     href: "#vue",
//     steps: [
//       {
//         title: "Начните процесс сборки",
//         body: (
//           <p>
//             Запустите процесс сборки с помощью <code>npm run dev</code>.
//           </p>
//         ),
//         code: {
//           name: "Terminal",
//           lang: "shell",
//           code: "npm run dev",
//         },
//       },
//       {
//         title: "Начните использовать Tailwind в своем проекте",
//         body: (
//           <p>Начните использовать классы утилиты Tailwind для стилизации своего контента.</p>
//         ),
//         code: {
//           name: "App.vue",
//           lang: "html",
//           code: `  <template>
// >   <h1 class="text-3xl font-bold underline">
// >     Hello world!
// >   </h1>
//   </template>`,
//         },
//       },
//     ],
//   },
// ];
