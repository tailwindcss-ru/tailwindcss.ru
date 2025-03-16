import { css, elixir, html, js, Page, shell, Step, Tile } from "./utils";
import { css, elixir, html, js, Page, shell, Step, Tile } from "./utils";
import Logo from "@/docs/img/guides/phoenix.react.svg";

export let tile: Tile = {
  title: "Phoenix",
  description: "Фреймворк для создания многофункциональных интерактивных приложений с помощью Elixir.",
  Logo,
};

export let page: Page = {
  title: "Установите Tailwind CSS с помощью Phoenix",
  description: "Setting up Tailwind CSS in a Phoenix project.",
};

export let steps: Step[] = [
  {
    title: "Создайте свой проект",
    body: (
      <p>
        Начните с создания нового проекта Phoenix, если у вас его еще нет. Вы можете следовать их{" "}
        <a href="https://hexdocs.pm/phoenix/installation.html">руководству по установке</a>, чтобы приступить к работе.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        mix phx.new myproject
        cd myproject
      `,
    },
  },
  {
    title: "Установите плагин Tailwind",
    body: (
      <p>
        Добавьте плагин Tailwind в свои зависимости и запустите <code>mix deps.get</code>, чтобы установить его.
      </p>
    ),
    code: {
      name: "mix.exs",
      lang: "elixir",
      code: elixir`
        defp deps do
          [
            # …
            # [!code highlight:2]
            {:tailwind, "~> 0.3", runtime: Mix.env() == :dev},
          ]
        end
      `,
    },
  },
  {
    title: "Настройте плагин Tailwind",
    body: (
      <p>
        В файле <code>config/config.exs</code> вы можете указать, какую версию Tailwind CSS вы хотите использовать,
        а также настроить пути к ресурсам.
      </p>
    ),
    code: {
      name: "config.exs",
      lang: "elixir",
      code: elixir`
        config :tailwind,
          # [!code highlight:2]
          version: "4.0.0",
          myproject: [
            args: ~w(
              # [!code highlight:3]
              --input=assets/css/app.css
              --output=priv/static/assets/app.css
            ),
            # [!code highlight:2]
            cd: Path.expand("..", __DIR__)
          ]
      `,
    },
  },
  {
    title: "Обновите свой сценарий развертывания",
    body: (
      <p>
        Настройте псевдоним <code>assets.deploy</code> для создания CSS при развертывании.
      </p>
    ),
    code: {
      name: "mix.exs",
      lang: "elixir",
      code: elixir`
        defp aliases do
          [
            # …
            "assets.deploy": [
              # [!code highlight:2]
              "tailwind myproject --minify",
              "esbuild myproject --minify",
              "phx.digest"
            ]
          ]
        end
      `,
    },
  },
  {
    title: "Включите наблюдателя в разработке",
    body: (
      <p>
        Добавьте Tailwind в список наблюдателей в файле <code>./config/dev.exs</code>.
      </p>
    ),
    code: {
      name: "dev.exs",
      lang: "elixir",
      code: elixir`
        watchers: [
          # Start the esbuild watcher by calling Esbuild.install_and_run(:default, args)
          esbuild: {Esbuild, :install_and_run, [:myproject, ~w(--sourcemap=inline --watch)]},
          # [!code highlight:2]
          tailwind: {Tailwind, :install_and_run, [:myproject, ~w(--watch)]}
        ]
      `,
    },
  },
  {
    title: "Установите Tailwind CSS",
    body: <p>Запустите команду установки, чтобы загрузить автономный Tailwind CLI.</p>,
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        mix tailwind.install
      `,
    },
  },
  {
    title: "Импортируйте Tailwind CSS",
    body: (
      <p>
        Добавьте <code>@import</code> в <code>./assets/css/app.css</code>, который импортирует Tailwind CSS.
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
    title: "Удалите импорт CSS по умолчанию",
    body: (
      <p>
        Удалите импорт CSS из <code>./assets/js/app.js</code>, так как Tailwind теперь сделает это за вас.
      </p>
    ),
    code: {
      name: "app.js",
      lang: "js",
      code: js`
        // [!code --:3]
        // Remove this line if you add your own CSS build pipeline (e.g postcss).
        import "../css/app.css"
      `,
    },
  },
  {
    title: "Начните процесс сборки",
    body: (
      <p>
        Запустите процесс сборки с помощью <code>mix phx.server</code>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        mix phx.server
      `,
    },
  },
  {
    title: "Начните использовать Tailwind в своем проекте",
    body: <p>Начните использовать классы утилиты Tailwind для стилизации своего контента.</p>,
    code: {
      name: "index.html.heex",
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
