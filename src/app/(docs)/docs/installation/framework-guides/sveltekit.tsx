import { css, js, html, shell, Page, Step, Tile } from "./utils";
import Logo from "@/docs/img/guides/svelte.react.svg";

export let tile: Tile = {
  title: "SvelteKit",
  description: "Самый быстрый способ создания приложений любого размера с помощью Svelte.js.",
  Logo,
};

export let page: Page = {
  title: "Установите Tailwind CSS с помощью SvelteKit",
  description: "Настройка Tailwind CSS в проекте SvelteKit.",
};

export let steps: Step[] = [
  {
    title: "Создайте свой проект",
    body: (
      <p>
        Начните с создания нового проекта SvelteKit, если у вас его еще нет. Наиболее распространенный подход описан
        в документации <a href="https://svelte.dev/docs/kit/creating-a-project">SvelteKit</a>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npx sv create my-project
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
        import { sveltekit } from '@sveltejs/kit/vite';
        import { defineConfig } from 'vite';
        // [!code highlight:2]
        import tailwindcss from '@tailwindcss/vite';

        export default defineConfig({
          plugins: [
            // [!code highlight:2]
            tailwindcss(),
            sveltekit(),
          ],
        });
      `,
    },
  },
  {
    title: "Импортируйте Tailwind CSS",
    body: (
      <p>
        Создайте файл <code>./src/app.css</code> и добавьте <code>@import</code>, который импортирует Tailwind CSS.
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
    title: "Импортируйте CSS-файл",
    body: (
      <p>
        Создайте файл <code>./src/routes/+layout.svelte</code> и импортируйте недавно созданный файл <code>app.css</code>.
      </p>
    ),
    code: {
      name: "+layout.svelte",
      lang: "svelte",
      code: html`
        <script>
          // [!code highlight:2]
          import "../app.css";
        </script>

        <slot />
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
        Начните использовать служебные классы Tailwind для стилизации своего контента, обязательно импортируйте тему
        Tailwind CSS для всех блоков <code>&lt;style&gt;</code>, которые необходимо обработать с помощью Tailwind.
      </p>
    ),
    code: {
      name: "+page.svelte",
      lang: "svelte",
      code: html`
        <!-- [!code highlight:4] -->
        <h1 class="text-3xl font-bold underline">
          <!-- prettier-ignore -->
          Hello world!
        </h1>

        <style>
          /* [!code highlight:2] */
          @reference "tailwindcss/theme";

          :global(html) {
            background-color: theme(--color-gray-100);
          }
        </style>
      `,
    },
  },
];
