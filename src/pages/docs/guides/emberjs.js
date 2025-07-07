import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { FrameworkGuideLayout } from '@/layouts/FrameworkGuideLayout'
import { Steps } from '@/components/Steps'

let steps = [
  {
    title: 'Создайте свой проект',
    body: () => (
      <p>
        Начните с создания нового проекта Ember.js, если у вас его еще нет.
        Самый распространенный подход — использовать{' '}
        <a href="https://guides.emberjs.com/release/getting-started/quick-start/#toc_create-a-new-application">
          Ember CLI
        </a>.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npx ember-cli new my-project --embroider --no-welcome\ncd my-project',
    },
  },
  {
    title: 'Установите CSS Tailwind',
    body: () => (
      <p>
        Используя npm, установите <code>tailwindcss</code> и его одноранговые зависимости, а также{' '}
        <code>postcss-loader</code>, а затем запустите команду <code>init</code>, чтобы сгенерировать оба файла{' '}
        <code>tailwind.config.js</code> и <code>postcss.config.js</code>.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npm install -D tailwindcss@3 postcss postcss-loader autoprefixer\nnpx tailwindcss init -p',
    },
  },
  {
    title: 'Включите поддержку PostCSS',
    body: () => (
      <p>
        В файле <code>ember-cli-build.js</code> настройте PostCSS для обработки файлов CSS.
      </p>
    ),
    code: {
      name: 'ember-cli-build.js',
      lang: 'js',
      code: `  'use strict';

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
>     packagerOptions: {
>       webpackConfig: {
>         module: {
>           rules: [
>             {
>               test: /\\.css$/i,
>               use: [
>                 {
>                   loader: 'postcss-loader',
>                   options: {
>                     postcssOptions: {
>                       config: 'postcss.config.js',
>                     },
>                   },
>                 },
>               ],
>             },
>           ],
>         },
>       },
>     },
    });
  };`,
    },
  },
  {
    title: 'Настройте пути к шаблону',
    body: () => (
      <p>
        Добавьте пути ко всем файлам вашего шаблона в файл <code>tailwind.config.js</code>.
      </p>
    ),
    code: {
      name: 'tailwind.config.js',
      lang: 'javascript',
      code: `  /** @type {import('tailwindcss').Config} */
  module.exports = {
>   content: ['./app/**/*.{gjs,gts,hbs,html,js,ts}'],
    theme: {
      extend: {},
    },
    plugins: [],
  };`,
    },
  },
  {
    title: 'Добавьте директивы Tailwind в свой CSS',
    body: () => (
      <p>
        Создайте файл <code>./app/app.css</code> и добавьте
        директивы <code>@tailwind</code> для каждого слоя Tailwind.
      </p>
    ),
    code: {
      name: 'app.css',
      lang: 'css',
      code: `@tailwind base;
@tailwind components;
@tailwind utilities;`,
    },
  },
  {
    title: 'Импортируйте файл CSS',
    body: () => (
      <p>
        Импортируйте только что созданный файл <code>./app/app.css</code> в свой файл <code>./app/app.js</code>.
      </p>
    ),
    code: {
      name: 'app.js',
      lang: 'js',
      code: `  import Application from '@ember/application';
  import Resolver from 'ember-resolver';
  import loadInitializers from 'ember-load-initializers';
  import config from 'my-project/config/environment';
> import 'my-project/app.css';

  export default class App extends Application {
    modulePrefix = config.modulePrefix;
    podModulePrefix = config.podModulePrefix;
    Resolver = Resolver;
  }

  loadInitializers(App, config.modulePrefix);`,
    },
  },
  {
    title: 'Начните процесс сборки',
    body: () => (
      <p>
        Запустите процесс сборки с помощью <code>npm run start</code>.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npm run start',
    },
  },
  {
    title: 'Начните использовать Tailwind в своем проекте',
    body: () => <p>Начните использовать служебные классы Tailwind для оформления своего контента.</p>,
    code: {
      name: 'application.hbs',
      lang: 'hbs',
      code: `  {{page-title "MyProject"}}

> <h1 class="text-3xl font-bold underline">
>   Hello world!
> </h1>

  {{outlet}}`,
    },
  },
]

export default function UsingEmberJs({ code }) {
  return (
    <FrameworkGuideLayout
      title="Установите Tailwind CSS с Ember.js"
      description="Настройка Tailwind CSS в проекте Ember.js."
    >
      <Steps steps={steps} code={code} />
    </FrameworkGuideLayout>
  )
}

export function getStaticProps() {
  let { highlightedCodeSnippets } = require('@/components/Guides/Snippets.js')

  return {
    props: {
      code: highlightedCodeSnippets(steps),
    },
  }
}

UsingEmberJs.layoutProps = {
  meta: {
    title: 'Установите Tailwind CSS с Ember.js',
    description: 'Настройка Tailwind CSS в проекте Ember.js.',
    section: 'Установка',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
