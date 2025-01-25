import { css, handlebars, js, Page, shell, Step, Tile } from "./utils";
import Logo from "@/docs/img/guides/ember.react.svg";

export let tile: Tile = {
  title: "Ember.js",
  description: "JavaScript-фреймворк для амбициозных веб-разработчиков.",
  Logo,
};

export let page: Page = {
  title: "Установите Tailwind CSS с помощью Ember.js",
  description: "Настройка Tailwind CSS в проекте Ember.js.",
};

export let steps: Step[] = [
  {
    title: "Создайте свой проект",
    body: (
      <p>
        Начните с создания нового проекта Ember.js, если у вас его еще нет. Наиболее распространенный подход — использовать{" "}
        <a href="https://guides.emberjs.com/release/getting-started/quick-start/#toc_create-a-new-application">
          Ember CLI
        </a>
        .
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npx ember-cli new my-project --embroider --no-welcome
        cd my-project
      `,
    },
  },
  {
    title: "Установите Tailwind CSS",
    body: (
      <p>
        Используя npm, установите <code>@tailwindcss/postcss</code> и его одноранговые зависимости, а также{" "}
        <code>postcss-loader</code>.
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
        В файле <code>ember-cli-build.js</code> настройте PostCSS для обработки ваших CSS-файлов.
      </p>
    ),
    code: {
      name: "ember-cli-build.js",
      lang: "js",
      code: js`
        'use strict';

        const EmberApp = require('ember-cli/lib/broccoli/ember-app');

        module.exports = function (defaults) {
          const app = new EmberApp(defaults, {
            // Add options here
          });

          const { Webpack } = require('@embroider/webpack');
          return require('@embroider/compat').compatBuild(app, Webpack, {
            skipBabel: [
              {
                package: 'qunit',
              },
            ],
            // [!code highlight:22]
            packagerOptions: {
              webpackConfig: {
                module: {
                  rules: [
                    {
                      test: /\.css$/i,
                      use: ['postcss-loader'],
                    },
                  ],
                },
              },
            },
          });
        };
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
        }
      `,
    },
  },
  {
    title: "Импортируйте Tailwind CSS",
    body: (
      <p>
        Создайте файл <code>./app/app.css</code> и добавьте <code>@import</code> для Tailwind CSS.
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
        Импортируйте недавно созданный файл <code>./app/app.css</code> в ваш файл <code>./app/app.js</code> file.
      </p>
    ),
    code: {
      name: "app.js",
      lang: "js",
      code: js`
        import Application from '@ember/application';
        import Resolver from 'ember-resolver';
        import loadInitializers from 'ember-load-initializers';
        import config from 'my-project/config/environment';
        // [!code highlight:2]
        import 'my-project/app.css';

        export default class App extends Application {
          modulePrefix = config.modulePrefix;
          podModulePrefix = config.podModulePrefix;
          Resolver = Resolver;
        }

        loadInitializers(App, config.modulePrefix);
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
    body: <p>Начните использовать классы утилиты Tailwind для стилизации вашего контента.</p>,
    code: {
      name: "application.hbs",
      lang: "hbs",
      code: handlebars`
        {{page-title "MyProject"}}

        <!-- [!code highlight:4] -->
        <h1 class="text-3xl font-bold underline">
          Hello world!
        </h1>

        {{outlet}}
      `,
    },
  },
];
