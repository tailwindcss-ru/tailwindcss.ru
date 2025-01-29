import dedent from "dedent";
import Link from "next/link";
import { Metadata } from "next";
import { type Step, Steps } from "@/components/installation-steps";

export const metadata: Metadata = {
  title: "Tailwind CLI",
  description:
    "Самый простой и быстрый способ начать работу с Tailwind CSS с нуля — использовать инструмент Tailwind CLI.",
  openGraph: {
    type: "article",
    title: "Tailwind CLI",
    description: "Самый простой и быстрый способ начать работу с Tailwind CSS с нуля.",
    images: "https://tailwindcss.com/api/og?path=/docs/installation/tailwind-cli",
    url: "https://tailwindcss.com/docs/installation/tailwind-cli",
  },
};

const steps: Step[] = [
  {
    title: "Установите Tailwind CSS",
    body: (
      <p>
        Install <code>tailwindcss</code> and <code>@tailwindcss/cli</code> via npm.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: "npm install tailwindcss @tailwindcss/cli",
    },
  },
  {
    title: "Импортируйте Tailwind в свой CSS",
    body: (
      <p>
        Добавьте импорт <code>@import "tailwindcss";</code> в ваш основной файл CSS.
      </p>
    ),
    code: {
      name: "src/input.css",
      lang: "css",
      code: '@import "tailwindcss";',
    },
  },
  {
    title: "Запустите процесс сборки Tailwind CLI",
    body: <p>Запустите инструмент CLI, чтобы просканировать исходные файлы на наличие классов и создать CSS.</p>,
    code: {
      name: "Terminal",
      lang: "shell",
      code: "npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch",
    },
  },
  {
    title: "Начните использовать Tailwind в своем HTML",
    body: (
      <p>
        Добавьте скомпилированный файл CSS в <code>{"<head>"}</code> и начните использовать классы утилиты Tailwind
        для стилизации своего контента.
      </p>
    ),
    code: {
      name: "src/index.html",
      lang: "html",
      code: dedent`
        <!doctype html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <!-- [!code highlight:2] -->
          <link href="./output.css" rel="stylesheet">
        </head>
        <body>
          <!-- [!code highlight:4] -->
          <h1 class="text-3xl font-bold underline">
            Hello world!
          </h1>
        </body>
        </html>
     `,
    },
  },
];

export default function Page() {
  return (
    <>
      <div id="content-wrapper" className="prose relative z-10 mb-10 max-w-3xl" data-content="true">
        <h3 className="sr-only" data-title="true">
          Установка Tailwind CLI
        </h3>
        <p>
          Самый простой и быстрый способ начать работу с Tailwind CSS с нуля — использовать инструмент Tailwind CLI.
          CLI также доступен как <Link href="/blog/standalone-cli">автономный исполняемый файл</Link>,
          если вы хотите использовать его без установки Node.js.
        </p>
      </div>
      <Steps steps={steps} />
    </>
  );
}
