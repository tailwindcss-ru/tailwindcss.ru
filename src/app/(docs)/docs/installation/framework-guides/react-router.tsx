import { css, js, Page, shell, Step, Tile } from "./utils";
import Logo from "@/docs/img/guides/react-router.react.svg";
import LogoDark from "@/docs/img/guides/react-router-white.react.svg";

export let tile: Tile = {
  title: "React Router",
  description: "Ориентированный на стандарты маршрутизатор, который можно развернуть где угодно.",
  Logo,
  LogoDark,
};

export let page: Page = {
  title: "Установите Tailwind CSS с помощью React Router",
  description: "Настройка Tailwind CSS в проекте React Router.",
};

export let steps: Step[] = [
  {
    title: "Создайте свой проект",
    body: (
      <p>
        Начните с создания нового проекта React Router, если у вас его еще нет. Наиболее распространенный подход —
        использовать <a href="https://reactrouter.com/start/framework/installation">Create React Router</a>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npx create-react-router@latest my-project
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
        import { reactRouter } from "@react-router/dev/vite";
        import { defineConfig } from "vite";
        import tsconfigPaths from "vite-tsconfig-paths";
        // [!code highlight:2]
        import tailwindcss from "@tailwindcss/vite";

        export default defineConfig({
          plugins: [
            // [!code highlight:2]
            tailwindcss(),
            reactRouter(),
            tsconfigPaths(),
          ],
        });
      `,
    },
  },
  {
    title: "Импортируйте Tailwind CSS",
    body: (
      <p>
        Добавьте <code>@import</code> в <code>./app/app.css</code>, который импортирует Tailwind CSS.
      </p>
    ),
    code: {
      name: "tailwind.css",
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
    body: <p>Начните использовать классы утилиты Tailwind для стилизации своего контента.</p>,
    code: {
      name: "home.tsx",
      lang: "tsx",
      code: js`
        export default function Home() {
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
];
