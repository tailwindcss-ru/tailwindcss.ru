import Link from "next/link";
import { Metadata } from "next";
import { Steps, type Step } from "@/components/installation-steps";
import dedent from "dedent";

export const metadata: Metadata = {
  title: "Play CDN",
  description: "Используйте Play CDN, чтобы попробовать Tailwind прямо в браузере без какого-либо этапа сборки.",
  openGraph: {
    type: "article",
    title: "Play CDN",
    description: "Попробуйте Tailwind CSS прямо в браузере без какого-либо этапа сборки.",
    images: "https://tailwindcss.com/api/og?path=/docs/installation/play-cdn",
    url: "https://tailwindcss.com/docs/installation/play-cdn",
  },
};

const steps: Step[] = [
  {
    title: "Добавьте скрипт Play CDN в свой HTML",
    body: (
      <p>
        Добавьте тег скрипта Play CDN в <code>&lt;head&gt;</code> вашего HTML-файла и начните
        использовать классы утилиты Tailwind для стилизации вашего контента.
      </p>
    ),
    code: {
      name: "index.html",
      lang: "html",
      code: dedent`
        <!doctype html>
        <html>
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <!-- [!code highlight:2] -->
            <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
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
  {
    title: "Попробуйте добавить пользовательский CSS",
    body: (
      <p>
        Используйте <code>type="text/tailwindcss"</code> для добавления пользовательского CSS, который поддерживает все функции Tailwind CSS.
      </p>
    ),
    code: {
      name: "index.html",
      lang: "html",
      code: dedent`
        <!doctype html>
        <html>
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
            <!-- [!code highlight:6] -->
            <style type="text/tailwindcss">
              @theme {
                --color-clifford: #da373d;
              }
            </style>
          </head>
          <body>
            <!-- [!code word:text-clifford] -->
            <h1 class="text-3xl font-bold underline text-clifford">
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
          Using Play CDN
        </h3>
        <p>
          Используйте Play CDN, чтобы попробовать Tailwind прямо в браузере без какого-либо этапа сборки.
          Play CDN предназначен только для целей разработки и не предназначен для производства.
        </p>
      </div>
      <Steps steps={steps} />
    </>
  );
}
