import { css, html, Page, shell, Step, Tile } from "./utils";
import Logo from "@/docs/img/guides/rails.react.svg";
import LogoDark from "@/docs/img/guides/rails-white.react.svg";

export let tile: Tile = {
  title: "Ruby on Rails",
  description: "Полноценная платформа со всеми инструментами, необходимыми для создания потрясающих веб-приложений.",
  Logo,
  LogoDark,
};

export let page: Page = {
  title: "Установите Tailwind CSS с помощью Ruby on Rails",
  description: "Настройка Tailwind CSS в проекте Ruby on Rails v7+.",

  // ПРИМЕЧАНИЕ: Это введение в настоящее время не используется, но приведено здесь для справки, поскольку мы захотим вернуть его, как только гем rails будет обновлен до стабильной версии v4.
  intro: (
    <div className="prose prose-slate dark:prose-dark relative z-10 mb-16 max-w-3xl">
      <p>
        Самый быстрый способ начать использовать Tailwind CSS в вашем проекте Rails — использовать{" "}
        <a href="https://github.com/rails/tailwindcss-rails">Tailwind CSS для Rails</a>, запустив{" "}
        <code>rails new my-project --css tailwind</code>. Это автоматически настроит вашу настройку Tailwind на основе официального примера Rails.
        Если вы хотите настроить Tailwind вручную, продолжайте читать остальную часть этого руководства.
      </p>
    </div>
  ),
};

export let steps: Step[] = [
  {
    title: "Создайте свой проект",
    body: (
      <p>
        Начните с создания нового проекта Rails, если у вас его еще нет. Наиболее распространенный подход —
        использовать <a href="https://guides.rubyonrails.org/command_line.html">Rails Command Line</a>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        rails new my-project
        cd my-project
      `,
    },
  },
  {
    title: "Установите Tailwind CSS",
    body: (
      <p>
        Установите гемы <code>tailwindcss-ruby</code> и <code>tailwindcss-rails</code>, а затем выполните команду
        установки, чтобы настроить Tailwind CSS в вашем проекте.
      </p>
    ),

    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        ./bin/bundle add tailwindcss-ruby
        ./bin/bundle add tailwindcss-rails
        ./bin/rails tailwindcss:install
      `,
    },
  },
  {
    title: "Импортируйте Tailwind CSS",
    body: (
      <p>
        Добавьте <code>@import</code>, который импортирует Tailwind CSS в ваш файл
        <code>application.tailwind.css</code>, расположенный в каталоге <code>./app/assets/stylesheets</code>.
      </p>
    ),
    code: {
      name: "application.tailwind.css",
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
        Запустите процесс сборки с помощью <code>./bin/dev</code>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        ./bin/dev
      `,
    },
  },
  {
    title: "Начните использовать Tailwind в своем проекте",
    body: <p>Начните использовать служебные классы Tailwind для стилизации вашего контента.</p>,
    code: {
      name: "index.html.erb",
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
