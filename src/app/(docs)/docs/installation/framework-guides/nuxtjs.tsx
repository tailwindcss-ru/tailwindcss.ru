import { css, html, js, Page, shell, Step, Tile } from "./utils";
import Logo from "@/docs/img/guides/nuxtjs.react.svg";

export let tile: Tile = {
  title: "Nuxt",
  description: "Интуитивно понятный фреймворк Vue для создания универсальных приложений.",
  Logo,
};

export let page: Page = {
  title: "Установите Tailwind CSS с помощью Nuxt",
  description: "Настройка Tailwind CSS в проекте Nuxt.",
};

export let steps: Step[] = [
  {
    title: "Создайте свой проект",
    body: (
      <p>
        Начните с создания нового проекта Nuxt, если у вас его еще нет. Наиболее распространенный подход — использовать
        <a href="https://nuxt.com/docs/getting-started/installation">Nuxt Command Line Interface</a>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npx nuxi init my-project
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
        Добавьте плагин <code>@tailwindcss/vite</code> в конфигурацию Nuxt как плагин Vite.
      </p>
    ),
    code: {
      name: "nuxt.config.ts",
      lang: "ts",
      code: js`
        // [!code highlight:2]
        import tailwindcss from "@tailwindcss/vite";

        export default defineNuxtConfig({
          compatibilityDate: "2024-11-01",
          devtools: { enabled: true },
          vite: {
            plugins: [
              // [!code highlight:2]
              tailwindcss(),
            ],
          },
        });
      `,
    },
  },
  {
    title: "Импортируйте Tailwind CSS",
    body: (
      <p>
        Создайте файл <code>./assets/css/main.css</code> и добавьте <code>@import</code>, который импортирует Tailwind CSS.
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
    title: "Добавьте CSS-файл глобально",
    body: (
      <p>
        Добавьте недавно созданный <code>./assets/css/main.css</code> в массив <code>css</code> в вашем файле{" "}
        <code>nuxt.config.ts</code>.
      </p>
    ),
    code: {
      name: "nuxt.config.ts",
      lang: "ts",
      code: js`
        import tailwindcss from "@tailwindcss/vite";

        export default defineNuxtConfig({
          compatibilityDate: "2024-11-01",
          devtools: { enabled: true },
          // [!code highlight:2]
          css: ['~/assets/css/main.css'],
          vite: {
            plugins: [
              tailwindcss(),
            ],
          },
        });
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
    body: <p>Начните использовать классы утилиты Tailwind для стилизации своего контента.</p>,
    code: {
      name: "app.vue",
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
