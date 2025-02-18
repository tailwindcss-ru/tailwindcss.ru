import { astro, css, js, Page, shell, Step, Tile } from "./utils";
import Logo from "@/docs/img/guides/astro.react.svg";
import LogoDark from "@/docs/img/guides/astro-white.react.svg";

export let tile: Tile = {
  title: "Astro",
  description: "Универсальный веб-фреймворк, разработанный для скорости.",
  Logo,
  LogoDark,
};

export let page: Page = {
  title: "Установите Tailwind CSS с помощью Astro",
  description: "Настройка Tailwind CSS в проекте Astro.",
};

export let steps: Step[] = [
  {
    title: "Создайте свой проект",
    body: (
      <p>
        Начните с создания нового проекта Astro, если у вас его еще нет. Наиболее распространенный подход — использовать{" "}
        <a href="https://docs.astro.build/en/install-and-setup/#install-from-the-cli-wizard">create astro</a>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npm create astro@latest my-project
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
        Добавьте плагин <code>@tailwindcss/vite</code> к плагинам Vite в файле конфигурации Astro.
      </p>
    ),
    code: {
      name: "astro.config.mjs",
      lang: "js",
      code: js`
        // @ts-check
        import { defineConfig } from "astro/config";
        // [!code highlight:2]
        import tailwindcss from "@tailwindcss/vite";

        // https://astro.build/config
        export default defineConfig({
          // [!code highlight:4]
          vite: {
            plugins: [tailwindcss()],
          },
        });
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
    title: "Начните использовать Tailwind в своем проекте",
    body: (
      <p>
        Начните использовать классы утилиты Tailwind для стилизации своего контента,
        не забыв при этом импортировать недавно созданный файл CSS.
      </p>
    ),
    code: {
      name: "index.astro",
      lang: "astro",
      code: astro`
        ---
        // [!code highlight:2]
        import "../styles/global.css";
        ---

        <!-- [!code highlight:4] -->
        <h1 class="text-3xl font-bold underline">
          Hello world!
        </h1>
      `,
    },
  },
];
