import { FooterMeta } from "@/components/footer";
import { LockClosedIcon, MinusIcon, PlusIcon } from "@heroicons/react/16/solid";
import { clsx } from "clsx";
import type { Metadata } from "next";
import Image from "next/image";
import AdamTeachingImage from "./adam-teaching.jpg";
import InsidersGitHubRepositoryDarkImage from "./insiders-github-repository-dark.png";
import InsidersGitHubRepositoryImage from "./insiders-github-repository.png";
import TailwindcssRaycastExtensionImage from "./tailwindcss-raycast-extension.png";
import TailwindCSSVsCodeThemeImage from "./tailwindcss-vs-theme.png";
import { getShuffledSponsors, type Sponsor } from "@/lib/sponsors";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Спонсор",
  description: "Помогите сделать Tailwind CSS устойчивым в долгосрочной перспективе, поддержав проект индивидуально или как компания.",
  openGraph: {
    type: "article",
    title: "Спонсор - Tailwind CSS",
    description: "Помогите сделать Tailwind CSS устойчивым в долгосрочной перспективе, поддержав проект индивидуально или как компания.",
    url: "https://tailwindcss.ru/sponsor",
  },
};

function DarkButtonLink({ className, ...props }: React.ComponentProps<"a">) {
  return (
    <a
      className={clsx(
        className,
        "rounded-4xl bg-black px-4 py-2 text-center text-sm/6 font-semibold text-white hover:bg-gray-800 dark:bg-white dark:text-gray-950 dark:hover:bg-white/90",
      )}
      {...props}
    />
  );
}

function LightButtonLink({ className, ...props }: React.ComponentProps<"a">) {
  return (
    <a
      className={clsx(
        className,
        "rounded-full px-4 py-2 text-center text-sm/6 font-semibold text-gray-950 ring-1 ring-gray-950/10 hover:ring-gray-950/20 dark:bg-white/5 dark:text-gray-100 dark:ring-white/15 dark:hover:ring-white/20",
      )}
      {...props}
    />
  );
}

function Eyebrow({
  as = "p",
  className,
  color = "gray",
  ...props
}: {
  as?: React.ElementType;
  className?: string;
  color?: "gray" | "sky" | "pink" | "fuchsia";
  children: React.ReactNode;
}) {
  const Component = as;

  return (
    <Component
      className={clsx(
        className,
        "font-mono text-[0.8125rem]/6 font-medium tracking-widest text-pretty uppercase",
        color === "gray" && "text-gray-600 dark:text-gray-500",
        color === "sky" && "text-sky-500",
        color === "pink" && "text-pink-500",
        color === "fuchsia" && "text-fuchsia-500 dark:text-fuchsia-400",
      )}
      {...props}
    />
  );
}

function Header() {
  return (
    <div className="line-y mt-12 grid gap-x-10 sm:mt-20 lg:mt-24 lg:grid-cols-[3fr_2fr]">
      <div className="px-4 py-2 max-lg:line-b sm:px-2 lg:border-r lg:border-gray-950/5 dark:lg:border-white/10">
        <Eyebrow>Спонсор</Eyebrow>
        <h1 className="mt-2 text-6xl tracking-tighter text-pretty sm:text-8xl">Поддержите будущее Tailwind CSS</h1>
      </div>
      <div className="@container grid grid-cols-1 grid-rows-[1fr_auto] lg:border-l lg:border-gray-950/5 dark:lg:border-white/10">
        <div className="flex items-center px-4 py-2 max-lg:line-y max-lg:mt-6 sm:px-2">
          <p className="max-w-2xl text-lg/7 font-medium text-pretty text-gray-600 dark:text-gray-400">
            Помогите сделать Tailwind CSS устойчивым в долгосрочной перспективе, поддержав проект индивидуально или как компания.
          </p>
        </div>
        <div className="flex gap-4 px-4 py-2 whitespace-nowrap max-lg:line-t max-lg:mt-6 sm:px-2 lg:border-t lg:border-gray-950/5 @max-md:flex-col dark:lg:border-white/10">
          <DarkButtonLink href="#insiders" className="inline-flex items-center justify-center gap-2">
            Поддержать как индивидуальное лицо
            <svg fill="currentColor" aria-hidden="true" viewBox="0 0 10 10" className="-mr-0.5 w-2.5">
              <path d="M4.85355 0.146423L9.70711 4.99998L4.85355 9.85353L4.14645 9.14642L7.79289 5.49998H0V4.49998H7.79289L4.14645 0.85353L4.85355 0.146423Z"></path>
            </svg>
          </DarkButtonLink>
          <LightButtonLink href="#partners" className="inline-flex items-center justify-center gap-2">
            Поддержать как компания
            <svg
              fill="currentColor"
              aria-hidden="true"
              viewBox="0 0 10 10"
              className="-mr-0.5 w-2.5 fill-gray-600 dark:fill-gray-400"
            >
              <path d="M4.85355 0.146423L9.70711 4.99998L4.85355 9.85353L4.14645 9.14642L7.79289 5.49998H0V4.49998H7.79289L4.14645 0.85353L4.85355 0.146423Z"></path>
            </svg>
          </LightButtonLink>
        </div>
      </div>
    </div>
  );
}

function MessageFromAdam() {
  return (
    <div className="line-y mt-24 bg-gray-950/5 p-2 sm:-mx-px sm:p-[calc(--spacing(2)+1px)] dark:bg-white/10">
      <div className="relative">
        <div className="absolute inset-0 z-10 rounded-4xl dark:inset-ring dark:inset-ring-white/20"></div>
        <section className="relative isolate overflow-hidden rounded-4xl bg-gray-950 p-10 md:p-20 lg:p-16 xl:p-32">
          <Image
            src={AdamTeachingImage}
            alt="Adam Wathan"
            width={1000}
            height={1000}
            className="absolute inset-x-0 top-0 mask-b-from-30% object-cover lg:left-auto lg:h-full lg:w-2/3 lg:mask-l-from-30%"
          />
          <div className="relative text-white max-xl:max-w-2xl max-lg:mx-auto max-lg:mt-60 lg:max-w-lg xl:max-w-2xl">
            <p className="text-2xl/10">
              Tailwind CSS существует благодаря страстному сообществу, которое верит в совместное создание лучшего ПО. 
              Став Инсайдером или Партнером, вы напрямую поддерживаете эту миссию — чтобы мы могли продолжать 
              выпускать инструменты, которые вы любите, без каких-либо условий.
            </p>
            <p className="mt-8 text-base/8 font-medium">Adam Wathan</p>
            <p className="text-gray-400">Создатель Tailwind CSS</p>
          </div>
        </section>
      </div>
    </div>
  );
}

function FeaturedPartners({ partners }: { partners: Sponsor[] }) {
  return (
    <section>
      <div className="relative mt-4">
        <div className="pointer-events-none absolute inset-0 z-10 grid grid-cols-2 gap-10 max-md:gap-5 lg:grid-cols-3 xl:grid-cols-4">
          <div className="border-r border-gray-950/5 dark:border-white/10"></div>
          <div className="border-l border-gray-950/5 lg:border-x dark:border-white/10"></div>
          <div className="border-l border-gray-950/5 max-lg:hidden xl:border-x dark:border-white/10"></div>
          <div className="border-l border-gray-950/5 max-xl:hidden dark:border-white/10"></div>
        </div>
        <ul className="grid grid-cols-2 gap-5 md:gap-10 lg:grid-cols-3 xl:grid-cols-4">
          {partners.map((company, index) => (
            <li key={index} className="max-lg:nth-[2n+1]:line-y lg:max-xl:nth-[3n+1]:line-y xl:nth-[4n+1]:line-y">
              <a
                href={company.sponsorPageUrl ?? company.url}
                target="_blank"
                rel="noopener sponsored"
                className="grid place-content-center transition-colors hover:bg-gray-950/2.5 sm:px-2 sm:py-4 dark:hover:bg-white/2.5"
              >
                <company.logo className="w-full max-w-80" aria-label={`${company.name} logo`} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Insiders() {
  return (
    <div id="insiders" className="line-y mt-40 grid scroll-mt-24 grid-cols-1 gap-10 lg:grid-cols-3 xl:grid-cols-5">
      <div className="border-r border-gray-950/5 px-4 py-2 sm:px-2 lg:col-span-2 xl:col-span-3 dark:border-white/10">
        <Eyebrow as="h2" color="sky">
          <a href="#insiders">Инсайдеры</a>
        </Eyebrow>
        <p className="max-w-3xl text-3xl font-medium tracking-tight text-pretty md:text-[2.5rem]/14">
          Поддержите как индивидуальное лицо
        </p>
        <p className="mt-4 max-w-2xl text-base/7 text-gray-600 dark:text-gray-400">
          Присоединяйтесь к сообществу энтузиастов, которые получают ранний доступ к новым функциям, 
          внутренним инструментам для Tailwind и прямую связь с командой — поддерживая любимый проект.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-2 bg-gray-950/5 py-[calc(--spacing(2)+1px)] max-xl:-mx-px max-xl:px-[calc(--spacing(2)+1px)] xl:col-span-2 xl:-mr-px xl:border-l xl:border-gray-950/5 xl:pr-[calc(--spacing(2)+1px)] xl:pl-2 dark:bg-white/10 dark:xl:border-white/10">
        <div className="@container rounded-2xl bg-white p-6 sm:rounded-4xl sm:p-10 dark:bg-gray-950/80 dark:outline dark:outline-white/10">
          <p className="font-mono text-[0.8125rem]/6 font-medium tracking-widest text-pretty text-gray-600 uppercase dark:text-gray-400">
            Спонсор
          </p>
          <div className="mt-6">
            <div className="flex flex-wrap items-start gap-6 @max-md:flex-col @md:items-center @md:justify-between">
              <div className="flex items-center gap-x-4">
                <p className="text-5xl/12 font-medium first-letter:font-light">$120</p>
                <div>
                  <p className="text-sm/6 font-semibold">в год</p>
                  <p className="text-sm/6 text-gray-600 dark:text-gray-400">плюс налог</p>
                </div>
              </div>
              <DarkButtonLink href="https://buy.polar.sh/polar_cl_sdvKSPOnjtdElmQ57la4wv3C91Io5vGZpJmC71jdFXv">
                Стать инсайдером
              </DarkButtonLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InsiderPerks() {
  return (
    <section className="mt-16">
      <h2 className="px-4 text-2xl/10 font-medium tracking-tight sm:px-2">Преимущества Инсайдеров</h2>
      <div className="relative mt-4">
        <div className="pointer-events-none absolute inset-0 z-10 grid grid-cols-1 gap-2 max-sm:hidden sm:grid-cols-2 sm:gap-x-5 sm:gap-y-10 md:gap-10 lg:grid-cols-3">
          <div className="border-r border-gray-950/5 dark:border-white/10"></div>
          <div className="border-l border-gray-950/5 lg:border-x dark:border-white/10"></div>
          <div className="border-l border-gray-950/5 max-lg:hidden dark:border-white/10"></div>
        </div>
        <ul className="grid-cols-1 gap-2 max-sm:line-y max-sm:overflow-x-auto max-sm:px-2 sm:grid sm:grid-cols-2 sm:gap-x-5 sm:gap-y-10 md:gap-10 lg:grid-cols-3">
          <li className="p-2 sm:max-lg:nth-[2n+1]:line-y lg:nth-[3n+1]:line-y">
            <p className="text-sm/7 text-gray-600 dark:text-gray-400">
              <strong className="font-semibold text-gray-950 dark:text-white">
                Доступ к приватной области инсайдеров в Discord
              </strong>{" "}
              — где инсайдеры Tailwind делятся советами, тестируют новые функции и общаются напрямую с командой.
            </p>
          </li>
          <li className="p-2 sm:max-lg:nth-[2n+1]:line-y lg:nth-[3n+1]:line-y">
            <p className="text-sm/7 text-gray-600 dark:text-gray-400">
              <strong className="font-semibold text-gray-950 dark:text-white">Правила Cursor/Claude/AGENTS.md</strong> —
              Личные правила для работы с AI-ассистентами, прямо из разработки основателя Tailwind.
            </p>
          </li>
          <li className="p-2 sm:max-lg:nth-[2n+1]:line-y lg:nth-[3n+1]:line-y">
            <p className="text-sm/7 text-gray-600 dark:text-gray-400">
              <strong className="font-semibold text-gray-950 dark:text-white">
                Документация для предварительных версий
              </strong>{" "}
              — документация для невыпущенных функций Tailwind и возможность экспериментировать с утилитами CSS уже сегодня.
            </p>
          </li>
          <li className="p-2 sm:max-lg:nth-[2n+1]:line-y lg:nth-[3n+1]:line-y">
            <p className="text-sm/7 text-gray-600 dark:text-gray-400">
              <strong className="font-semibold text-gray-950 dark:text-white">Темы VS Code</strong> — получите темы VS Code, 
              созданные и протестированные командой Tailwind, с таким же вниманием к деталям, как и в Tailwind CSS.
            </p>
          </li>
          <li className="p-2 sm:max-lg:nth-[2n+1]:line-y lg:nth-[3n+1]:line-y">
            <p className="text-sm/7 text-gray-600 dark:text-gray-400">
              <strong className="font-semibold text-gray-950 dark:text-white">Расширение Raycast</strong> — мгновенно
              найдите ближайшее значение темы Tailwind для любого цвета или размера, или посмотрите сгенерированный CSS для любого класса.
            </p>
          </li>
          <li className="p-2 sm:max-lg:nth-[2n+1]:line-y lg:nth-[3n+1]:line-y">
            <p className="text-sm/7 text-gray-600 dark:text-gray-400">
              <strong className="font-semibold text-gray-950 dark:text-white">Исходный код + файлы Figma</strong> —
              скачайте исходный код из наших демонстраций функций, которые обычно никогда не видят свет, чтобы узнать, как мы прототипируем идеи с помощью Tailwind.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

function InsiderPerkScreenshots() {
  return (
    <div className="line-y mt-10 grid grid-rows-1 gap-2 p-2 md:h-130 md:grid-rows-2 lg:grid-cols-3">
      <div className="relative overflow-hidden rounded-xl bg-gray-200 pt-9 pl-9 outline -outline-offset-1 outline-gray-950/5 max-md:aspect-[4/3] md:col-start-1 md:row-start-1 md:max-lg:col-span-2 md:max-lg:pt-5 md:max-lg:pl-5 lg:row-span-2 dark:bg-gray-900 dark:outline-white/5">
        <p className="absolute right-4 bottom-4 flex items-center gap-2 rounded-full border border-white/20 bg-black/80 pr-4 pl-2 font-mono text-xs/7 font-medium text-white outline outline-black backdrop-blur-sm lg:right-6 lg:bottom-6">
          <svg fill="#D97757" viewBox="0 0 16 16" className="size-4">
            <path d="m3.137 10.637 3.145-1.765.052-.154-.052-.085h-.154l-.526-.032-1.797-.048-1.559-.065-1.51-.081-.38-.081L0 7.856l.036-.234.32-.215.458.04 1.011.07 1.518.105 1.101.064 1.631.17h.26l.036-.105-.09-.065-.068-.064-1.57-1.065-1.7-1.125-.89-.648-.483-.328-.242-.307-.106-.672.438-.482.586.04.15.041.595.458 1.271.983 1.66 1.222.242.203.098-.07.012-.048-.11-.182-.902-1.63-.964-1.66-.429-.689-.113-.412a1.982 1.982 0 0 1-.069-.486l.498-.676L4.46 0l.664.09.28.242.412.943.668 1.485L7.52 4.78l.304.6.162.554.06.17h.106v-.097l.085-1.138.158-1.396.153-1.797.053-.506.251-.607.498-.328.388.186.32.457-.044.296-.19 1.234-.373 1.935-.243 1.295h.142l.162-.162.655-.87 1.101-1.376.486-.546.567-.604.364-.287h.688l.506.753-.226.777-.709.899-.587.76-.842 1.134-.526.907.049.072.125-.012 1.902-.405 1.029-.186 1.226-.21.555.259.06.263-.218.538-1.312.324-1.538.308-2.29.542-.03.02.033.04 1.033.098.44.024h1.081l2.012.15.526.348.316.425-.053.324-.81.413-1.092-.26-2.55-.606-.874-.219h-.122v.073l.729.712 1.336 1.206 1.671 1.555.085.384-.214.304-.227-.033-1.47-1.105-.566-.498-1.283-1.08h-.085v.113l.295.433 1.563 2.348.08.72-.113.235-.404.142-.446-.081-.914-1.283-.943-1.445-.761-1.296-.093.053-.45 4.837-.21.247L7.58 16l-.405-.308-.214-.498.214-.983.26-1.283.21-1.02.19-1.267.113-.42-.008-.03-.093.013-.955 1.311-1.453 1.963-1.15 1.23-.275.11-.477-.247.044-.441.267-.393 1.59-2.023.96-1.255.62-.725-.005-.105h-.036l-4.226 2.744-.753.098-.323-.304.04-.498.154-.162 1.27-.874-.003.004Z" />
          </svg>
          <svg fill="none" viewBox="0 0 17 16" className="size-4">
            <path fill="#444" d="M1.988 4v8h14V4l-7-4" />
            <path fill="#939393" d="M8.988 8V0l-7 4 14 8-7 4-7-4" />
            <path fill="#E3E3E3" d="M15.988 4h-7v12" />
            <path fill="#fff" d="M1.988 4h14l-7 4" />
          </svg>
          Файл AGENTS.md
        </p>
        <Image
          src={InsidersGitHubRepositoryImage}
          alt="Insiders GitHub repository"
          className="w-212 max-w-none rounded-tl-xl bg-white outline outline-gray-950/10 dark:hidden"
        />
        <Image
          src={InsidersGitHubRepositoryDarkImage}
          alt="Insiders GitHub repository"
          className="hidden w-212 max-w-none rounded-tl-xl bg-[#0F1116] outline outline-gray-950/10 dark:block dark:outline dark:outline-white/10"
        />
      </div>
      <div className="relative overflow-hidden rounded-xl bg-[#F66969] pt-9 pl-9 inset-ring inset-ring-gray-950/10 max-md:aspect-[4/3] md:row-start-1 md:max-lg:col-start-3 md:max-lg:pt-5 md:max-lg:pl-5 lg:col-start-2">
        <p className="absolute right-4 bottom-4 flex items-center gap-2 rounded-full border border-white/20 bg-black/80 pr-4 pl-2 font-mono text-xs/7 font-medium text-white outline outline-black backdrop-blur-sm lg:right-6 lg:bottom-6">
          <svg fill="#FF6363" viewBox="0 0 16 16" className="size-4">
            <path
              d="M4 10.33V12L0 8l.834-.834L4 10.331ZM5.67 12H4l4.001 4 .834-.834L5.67 12Zm9.495-3.165L16 8 7.999 0l-.833.837 3.165 3.165H8.418l-2.21-2.205-.833.834 1.373 1.374h-.96v6.21h6.21v-.96l1.374 1.373.834-.833-2.208-2.21V5.672l3.167 3.163ZM4.418 3.586l-.838.835.897.896.834-.835-.893-.896Zm7.105 7.104-.835.835.895.896.836-.835-.896-.896ZM2.626 5.377l-.835.836L4 8.421v-1.67L2.625 5.377Zm6.628 6.626h-1.67l2.209 2.21.835-.836-1.374-1.374Z"
              clipRule="evenodd"
              fillRule="evenodd"
            />
          </svg>
          Расширение Raycast
        </p>
        <Image
          src={TailwindcssRaycastExtensionImage}
          alt="Tailwind CSS Raycast Extension"
          className="w-180 max-w-none rounded-tl-xl border border-black bg-[#1B1B1C] outline -outline-offset-2 outline-white/30 sm:w-200 md:w-150"
        />
      </div>
      <div className="relative flex items-center justify-center rounded-xl bg-[#5865F2] inset-ring inset-ring-gray-950/10 max-md:aspect-[4/3] md:row-start-2 md:max-lg:col-start-1 lg:col-start-2">
        <p className="absolute right-4 bottom-4 flex items-center gap-2 rounded-full border border-white/20 bg-black/80 pr-4 pl-2 font-mono text-xs/7 font-medium text-white outline outline-black backdrop-blur-sm lg:right-6 lg:bottom-6">
          <LockClosedIcon className="size-4 fill-white/75" />
          Приватное сообщество
        </p>
        <svg fill="#E0E3FF" viewBox="0 0 127 96" className="w-1/4">
          <path d="M81.15 0a73.745 73.745 0 0 0-3.36 6.794 97.867 97.867 0 0 0-28.994 0A67.876 67.876 0 0 0 45.437 0a105.544 105.544 0 0 0-26.14 8.057C2.779 32.53-1.691 56.373.53 79.887a105.038 105.038 0 0 0 32.05 16.088 76.912 76.912 0 0 0 6.87-11.063c-3.737-1.389-7.35-3.131-10.81-5.152.91-.657 1.794-1.339 2.653-1.995a75.255 75.255 0 0 0 64.075 0c.86.707 1.743 1.389 2.652 1.995a68.772 68.772 0 0 1-10.835 5.178A76.903 76.903 0 0 0 94.056 96a104.99 104.99 0 0 0 32.051-16.063c2.626-27.277-4.496-50.917-18.817-71.855A103.922 103.922 0 0 0 81.175.051L81.15 0ZM42.28 65.414c-6.238 0-11.416-5.657-11.416-12.653s4.976-12.679 11.391-12.679 11.517 5.708 11.416 12.679c-.101 6.97-5.026 12.653-11.39 12.653Zm42.078 0c-6.264 0-11.391-5.657-11.391-12.653s4.975-12.679 11.39-12.679c6.416 0 11.492 5.708 11.391 12.679-.1 6.97-5.026 12.653-11.39 12.653Z" />
        </svg>
      </div>
      <div className="relative overflow-hidden rounded-xl bg-gray-200 pt-9 pl-9 outline -outline-offset-1 outline-gray-950/5 max-md:aspect-[4/3] md:max-lg:col-span-2 md:max-lg:col-start-2 md:max-lg:row-start-2 md:max-lg:pt-5 md:max-lg:pl-5 lg:col-start-3 lg:row-span-2 lg:row-start-1 dark:bg-gray-900 dark:outline-white/5">
        <p className="absolute right-4 bottom-4 flex items-center gap-2 rounded-full border border-white/20 bg-black/80 pr-4 pl-2 font-mono text-xs/7 font-medium text-white outline outline-black backdrop-blur-sm lg:right-6 lg:bottom-6">
          <svg fill="none" viewBox="0 0 16 16" className="size-4">
            <path
              fill="#0065A9"
              d="M15.434 1.727 12.137.14A.996.996 0 0 0 11 .333L.208 10.173a.666.666 0 0 0 0 .986l.882.801a.666.666 0 0 0 .851.038l12.997-9.86A.662.662 0 0 1 16 2.667v-.038a1 1 0 0 0-.566-.9Z"
            />
            <path
              fill="#007ACC"
              d="m15.434 14.272-3.297 1.587A.996.996 0 0 1 11 15.666L.208 5.826a.667.667 0 0 1 0-.986l.882-.801A.666.666 0 0 1 1.941 4l12.997 9.86A.662.662 0 0 0 16 13.332v.038a1 1 0 0 1-.566.901Z"
            />
            <path
              fill="#1F9CF0"
              d="M12.137 15.86A.997.997 0 0 1 11 15.666a.586.586 0 0 0 1-.414V.747a.586.586 0 0 0-1-.414.998.998 0 0 1 1.137-.194l3.296 1.586a1 1 0 0 1 .567.9v10.749a1 1 0 0 1-.567.9l-3.296 1.586Z"
            />
            <path
              d="M11.336 15.89a.996.996 0 0 0 .794-.03l3.294-1.585a1 1 0 0 0 .566-.902V2.626a1 1 0 0 0-.566-.902L12.13.14a.996.996 0 0 0-1.137.193L4.687 6.086 1.94 4.001a.666.666 0 0 0-.85.038l-.882.801a.667.667 0 0 0 0 .986L2.59 8 .208 10.173a.666.666 0 0 0 0 .986l.881.801a.666.666 0 0 0 .851.038l2.747-2.085 6.306 5.753a1 1 0 0 0 .343.224Zm.657-11.523L7.208 8l4.785 3.632V4.367Z"
              clipRule="evenodd"
              fillRule="evenodd"
              opacity=".25"
            />
          </svg>
          <svg fill="none" viewBox="0 0 17 16" className="size-4">
            <path fill="#444" d="M1.988 4v8h14V4l-7-4" />
            <path fill="#939393" d="M8.988 8V0l-7 4 14 8-7 4-7-4" />
            <path fill="#E3E3E3" d="M15.988 4h-7v12" />
            <path fill="#fff" d="M1.988 4h14l-7 4" />
          </svg>
          Редактор тем
        </p>
        <Image
          src={TailwindCSSVsCodeThemeImage}
          alt="Tailwind CSS VS Code Theme"
          className="w-195 max-w-none rounded-tl-xl bg-[#21293A] dark:outline dark:outline-white/10"
        />
      </div>
    </div>
  );
}

function Partners() {
  return (
    <div id="partners" className="line-y mt-40 scroll-mt-24">
      <div className="px-4 py-2 sm:px-2">
        <Eyebrow as="h2" color="pink">
          <a href="#partners">Партнеры</a>
        </Eyebrow>
        <p className="max-w-3xl text-3xl font-medium tracking-tight text-pretty md:text-[2.5rem]/14">
          Поддержка как компания
        </p>
        <p className="mt-4 max-w-2xl text-base/7 text-gray-600 dark:text-gray-400">
          Станьте партнером Tailwind CSS, чтобы представить свой бренд 10 миллионам разработчиков в месяц, 
          дать вашей команде ранний доступ к новым функциям и дорожной карте, а также получить прямой контакт 
          с командой Tailwind CSS — и помочь проекту оставаться устойчивым надолго.
        </p>
      </div>
    </div>
  );
}

function PartnerPerks() {
  return (
    <section className="mt-16">
      <h2 className="px-4 text-2xl/10 font-medium tracking-tight sm:px-2">Почему стать партнером?</h2>
      <div className="relative mt-4">
        <div className="pointer-events-none absolute inset-0 z-10 grid grid-cols-1 gap-2 max-sm:hidden sm:grid-cols-2 sm:gap-x-5 sm:gap-y-10 md:gap-10 lg:grid-cols-3">
          <div className="border-r border-gray-950/5 dark:border-white/10"></div>
          <div className="border-l border-gray-950/5 lg:border-x dark:border-white/10"></div>
          <div className="border-l border-gray-950/5 max-lg:hidden dark:border-white/10"></div>
        </div>
        <ul className="grid-cols-1 gap-2 text-sm/7 text-gray-600 max-sm:line-y max-sm:overflow-x-auto max-sm:px-2 sm:grid sm:grid-cols-2 sm:gap-x-5 sm:gap-y-10 md:gap-10 lg:grid-cols-3">
          <li className="p-2 sm:max-lg:nth-[2n+1]:line-y lg:nth-[3n+1]:line-y">
            <p className="text-sm/7 text-gray-600 dark:text-gray-400">
              <strong className="font-semibold text-gray-950 dark:text-white">Ваш логотип перед миллионами</strong> —
              сайт Tailwind CSS посещают более 10 миллионов человек в месяц, и ваш бренд будет размещён на главной странице как партнёр.
            </p>
          </li>
          <li className="p-2 sm:max-lg:nth-[2n+1]:line-y lg:nth-[3n+1]:line-y">
            <p className="text-sm/7 text-gray-600 dark:text-gray-400">
              <strong className="font-semibold text-gray-950 dark:text-white">Доступ к Инсайдерам</strong> — получите все
              преимущества Инсайдеров для всей вашей команды, включая раннее доступ к новым функциям,
              специальные инструменты и многое другое.
            </p>
          </li>
          <li className="p-2 sm:max-lg:nth-[2n+1]:line-y lg:nth-[3n+1]:line-y">
            <p className="text-sm/7 text-gray-600 dark:text-gray-400">
              <strong className="font-semibold text-gray-950 dark:text-white">Доступ к Tailwind Plus</strong> — 
              доступ к Tailwind Plus для всей вашей команды, включая React UI Kit, тщательно созданные шаблоны и
              500+ тщательно разработанных компонентов.
            </p>
          </li>
          <li className="p-2 sm:max-lg:nth-[2n+1]:line-y lg:nth-[3n+1]:line-y">
            <p className="text-sm/7 text-gray-600 dark:text-gray-400">
              <strong className="font-semibold text-gray-950 dark:text-white">
                Ускоренное решение проблем
              </strong>{" "}
              — мы будем решать ваши проблемы в приоритетном порядке, даже если обычно они имеют низкий приоритет из-за ограниченного влияния на пользователей.
            </p>
          </li>
          <li className="p-2 sm:max-lg:nth-[2n+1]:line-y lg:nth-[3n+1]:line-y">
            <p className="text-sm/7 text-gray-600 dark:text-gray-400">
              <strong className="font-semibold text-gray-950 dark:text-white">Сайт в витрине</strong> — ваш сайт будет 
              выделяться в нашей витрине, привлекая больше внимания к вашему бренду, когда новые пользователи Tailwind 
              идут посмотреть, что возможно с фреймворком.
            </p>
          </li>
          <li className="p-2 sm:max-lg:nth-[2n+1]:line-y lg:nth-[3n+1]:line-y">
            <p className="text-sm/7 text-gray-600 dark:text-gray-400">
              <strong className="font-semibold text-gray-950 dark:text-white">Поддержка Tailwind CSS</strong> — вы поможете
              сохранить фреймворк на долгие годы, дав вам спокойствие, что ваша основная технология будет продолжать работать гладко.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

function CheckmarkIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 22 22" className="h-7 w-5.5">
      <path
        className="fill-sky-400/25"
        d="M22 11c0 6.075-4.925 11-11 11S0 17.075 0 11 4.925 0 11 0s11 4.925 11 11Z"
      ></path>
      <path
        className="fill-sky-400/25"
        d="M11 21c5.523 0 10-4.477 10-10S16.523 1 11 1 1 5.477 1 11s4.477 10 10 10Zm0 1c6.075 0 11-4.925 11-11S17.075 0 11 0 0 4.925 0 11s4.925 11 11 11Z"
        clipRule="evenodd"
        fillRule="evenodd"
      ></path>
      <path
        className="fill-sky-400"
        d="m14.684 7.82-4.079 6.992L7.293 11.5 8 10.793l2.395 2.395 3.425-5.872.864.504Z"
        clipRule="evenodd"
        fillRule="evenodd"
      ></path>
    </svg>
  );
}

function PartnerPlans() {
  const plans = [
    {
      name: "Спонсор",
      price: "$500",
      url: "https://buy.polar.sh/polar_cl_som3lU3ZaBEFOr4nZlkoAuRBhRbFDMoFzJUC04Jn1Sc",
      description: "Для компаний, которые хотят поддержать Tailwind, получая дополнительное внимание.",
      features: [
        { name: "Логотип на странице спонсоров", description: "ваш логотип будет отображаться на странице спонсоров." },
        { name: "Доступ к Инсайдерам", description: "все преимущества Инсайдеров для всей вашей команды." },
        {
          name: "Support Tailwind CSS",
          description: "sleep easy knowing that you're supporting the development of Tailwind CSS.",
        },
      ],
      remaining: null,
    },
    {
      name: "Амбассадор",
      price: "$2,500",
      url: "https://buy.polar.sh/polar_cl_TqBd09tnOwN7SQf7YpOcUZnDwxMVQB58Snhas2cdEDL",
      description: "Для компаний, которые хотят повысить видимость и доверие в сообществе Tailwind.",  
      features: [
        {
          name: "Логотип на главной странице Tailwind",
          description: "ваш логотип будет отображаться в поворотном месте на главной странице.",
        },
        { name: "Логотип на странице спонсоров", description: "ваш логотип будет отображаться на странице спонсоров." },
        { name: "Сайт в витрине", description: "место на странице витрины для вашего сайта." },
        { name: "Доступ к Инсайдерам", description: "все преимущества Инсайдеров для всей вашей команды." },
        {
          name: "Доступ к Tailwind Plus",
          description: "доступ к UI Kit, шаблонам и 500+ компонентам для вашей команды.",
        },
        {
          name: "Доступ к Discord спонсоров",
          description: "приватный Discord канал для спонсоров, чтобы общаться с командой Tailwind.",
        },
        {
          name: "Поддержка Tailwind CSS",
          description: "спокойно спать, зная, что вы поддерживаете развитие Tailwind CSS.",
        },
      ],
      remaining: 23,
    },
    {
      name: "Партнер",
      price: "$5,000",
      url: "https://buy.polar.sh/polar_cl_Ae2EFQATomRTUPq3DVTqzjOCAEsI7m7GNrmoh1n6ZRk",
      description: "Для компаний, которые хотят увеличить свою видимость и легкий доступ к команде Tailwind.",
      features: [
        {
          name: "Постоянный логотип на главной странице Tailwind",
          description: "ваш логотип будет постоянно отображаться на главной странице.",
        },
        {
          name: "Приоритетное размещение логотипа на странице спонсоров",
          description: "ваш логотип будет отображаться в верхней части страницы спонсоров.",
        },
        {
          name: "Избранное место на странице витрины",
          description: "место на странице витрины для вашего сайта.",
        },
        {
          name: "Ускоренное решение проблем",
          description: "мы будем решать ваши проблемы в приоритетном порядке.",
        },
        { name: "Доступ к Инсайдерам", description: "все преимущества Инсайдеров для всей вашей команды." },
        {
          name: "Доступ к Tailwind Plus",
          description: "доступ к UI Kit, шаблонам и 500+ компонентам для вашей команды.",
        },
        {
          name: "Поддержка Tailwind CSS",
          description: "вы будете помогать сохранить фреймворк на долгие годы, дав вам спокойствие, что ваша основная технология будет продолжать работать гладко.",
        },
      ],
      remaining: 2,
    },
  ];

  return (
    <section className="line-y mt-16 grid grid-cols-1 lg:gap-10 xl:grid-cols-3">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className="bg-gray-950/5 py-[calc(--spacing(2)+1px)] max-lg:-mx-px max-lg:px-[calc(--spacing(2)+1px)] not-first:max-lg:pt-0 lg:-mx-px lg:border-gray-950/5 lg:pr-2 lg:pl-[calc(--spacing(2)+1px)] lg:not-first:border-l lg:not-last:border-r dark:bg-white/10 dark:lg:border-white/10"
        >
          <div className="flex h-full flex-col gap-y-6 rounded-2xl bg-white p-6 sm:rounded-4xl sm:p-10 xl:p-8 2xl:p-10 dark:bg-gray-950/80 dark:outline dark:outline-white/10">
            <Eyebrow as="h3">{plan.name}</Eyebrow>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-4">
                <p className="text-5xl font-medium first-letter:font-light">{plan.price}</p>
                <div>
                  <p className="text-sm/6 font-semibold">в месяц</p>
                  <p className="text-sm/6 text-gray-600 dark:text-gray-400">плюс налог</p>
                </div>
              </div>

              <DarkButtonLink className="max-sm:hidden xl:hidden" href={plan.url}>
                {`Стать ${plan.name.toLowerCase().match(/^[aeiou]/i) ? "инсайдером" : "спонсором"}`}
              </DarkButtonLink>
            </div>
            <p className="max-w-2xl text-sm/7 text-gray-600 dark:text-gray-400">{plan.description}</p>
            <hr className="border-gray-950/5 dark:border-white/10" />
            <div className="@container">
              <ul
                className="group grid grid-cols-1 gap-x-10 gap-y-6 text-sm/7 text-gray-600 @3xl:grid-cols-2 dark:text-gray-300"
                role="list"
              >
                {plan.features.map((feature) => (
                  <li key={feature.name} className="grid max-w-2xl grid-cols-[auto_1fr] gap-6">
                    <CheckmarkIcon />
                    <p className="text-pretty">
                      <strong className="font-semibold text-gray-950 dark:text-white">{feature.name}</strong> —{" "}
                      {feature.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <DarkButtonLink className="mt-auto sm:max-xl:hidden" href={plan.url}>
              {`Стать ${plan.name.toLowerCase().match(/^[aeiou]/i) ? "инсайдером" : "спонсором"}`}
            </DarkButtonLink>
          </div>
        </div>
      ))}
    </section>
  );
}

function FaqGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="group">
      <Eyebrow as="h3" className="px-4 py-2 sm:px-2">
        {title}
      </Eyebrow>
      <dl>{children}</dl>
    </div>
  );
}

function Faq({ question, children }: { question: string; children: React.ReactNode }) {
  let id =
    "faq-" +
    question
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");

  return (
    <details className="group border-t border-gray-950/5 px-4 py-3 sm:px-2 dark:border-white/5">
      <summary
        id={id}
        className="flex w-full cursor-pointer justify-between gap-4 select-none group-open:text-sky-500 [&::-webkit-details-marker]:hidden"
      >
        <div className="text-left text-sm/7 font-semibold text-pretty">{question}</div>
        <PlusIcon className="h-7 w-4 group-open:hidden" />
        <MinusIcon className="h-7 w-4 not-group-open:hidden" />
      </summary>
      <div className="prose mt-4">{children}</div>
    </details>
  );
}

function Faqs() {
  return (
    <section className="line-y mt-30 grid grid-cols-1 gap-10 lg:grid-cols-2" id="faqs">
      <div className="lg:border-r lg:border-gray-950/5 dark:lg:border-white/5">
        <div className="grid grid-cols-1 gap-y-2 px-4 py-2 max-lg:line-b sm:px-2 lg:line-b/half">
          <Eyebrow as="h2" color="fuchsia">
            Часто задаваемые вопросы
          </Eyebrow>
          <p className="text-[2.5rem]/none font-medium tracking-tight text-pretty">Всё, что вам нужно знать.</p>
        </div>
      </div>
      <div className="lg:border-l lg:border-gray-950/5 dark:lg:border-white/5">
        <div className="grid grid-cols-1 gap-10">
          <FaqGroup title="Общие">
            <Faq question="С кем я могу связаться о спонсорстве?">
              <p>
                Если у вас есть вопросы о спонсорстве, напишите нам на{" "}
                <a href="mailto:support@tailwindcss.com">support@tailwindcss.com</a> и мы будем рады помочь.
              </p>
            </Faq>
            <Faq question="Может ли любая компания спонсировать?">
              <p>
                Мы рады иметь поддержку от всех компаний, которые используют Tailwind CSS, но у нас есть несколько
                правил:
              </p>
              <ul>
                <li>
                  <strong>
                    Мы обычно не принимаем спонсорства от компаний, которые продают коммерческие UI наборы Tailwind,
                    шаблоны, или библиотеки компонентов
                  </strong>
                  , так как это прямо пересекается с нашими собственными продуктами и может создать путаницу в том, что является официально поддерживаемым.
                </li>
                <li>
                  <strong>
                    Мы также保留拒绝来自公司或服务的赞助的权利，如果我们认为这可能会对项目产生负面影响
                  </strong>
                  , например продукты низкого качества или обманчивые.
                </li>
              </ul>
              <p>Если вы не уверены, подойдет ли ваша компания, напишите нам — мы будем рады обсудить ваш случай.</p>
            </Faq>
            <Faq question="Как предоставляются преимущества спонсоров?">
              <p>
                После того, как вы оплатите через Polar, вы получите доступ к порталу Polar, где вы можете управлять своим спонсорством и получать доступ к любым преимуществам, которые есть у вас.
              </p>
              <p>
                Если вы спонсируете как компания, мы будем следовать за вами, чтобы координировать, как вы будете отображаться на сайте Tailwind CSS, а также как предоставить вашей команде <strong>Инсайдеры</strong> доступ.
              </p>
            </Faq>
            <Faq question="Как предоставляются преимущества спонсоров?">
              <p>Преимущества спонсоров предоставляются под пользовательским коммерческим лицензионным соглашением.</p>
              <p>
                Они лицензированы для личного или внутреннего использования только активными спонсорами Tailwind CSS Insiders.
                Распространение, передача или публичное использование преимуществ — таких как тема VS Code, расширение Raycast, или правила Cursor/Claude/AGENTS.md — не разрешено.
              </p>
            </Faq>
          </FaqGroup>
          <FaqGroup title="Поддержка">  
            <Faq question="Вы предлагаете техническую поддержку для преимущества спонсоров?">
              <p>
                Нет — мы не предлагаем техническую поддержку для преимущества спонсоров. Эти преимущества являются бонусом для спонсоров, которые хотят
                вернуться к проекту, но они предоставляются как есть.
              </p>
              <p>
                Тем не менее, <strong>Discord Инсайдеров</strong> — это отличное место, чтобы спросить о чем угодно, связанном с преимуществами.
              </p>
            </Faq>
            <Faq question="Как отменить спонсорство?">
              <p>
                Вы можете отменить спонсорство в любое время через портал Polar. После отмены ваши преимущества останутся активными до конца вашего текущего периода оплаты.
              </p>
            </Faq>
            <Faq question="Что произойдет, если я перестану спонсировать?">
              <p>
                Если ваше спонсорство закончится, вы потеряете доступ к любым преимуществам, таким как сервер Discord Инсайдеров,
                правила Cursor/Claude/AGENTS.md, и предварительная документация. Эти преимущества доступны только во время вашего спонсорства.
              </p>
            </Faq>
            <Faq question="Какова ваша политика возврата денег?">
              <p>Спонсорство не возвращается, но, конечно, вы можете отменить спонсорство в любое время.</p>
            </Faq>
          </FaqGroup>
        </div>
      </div>
    </section>
  );
}

function Sponsors({
  partners,
  ambassadors,
  supporters,
}: {
  partners: Sponsor[];
  ambassadors: Sponsor[];
  supporters: Sponsor[];
}) {
  return (
    <div>
      <div id="sponsors" className="line-y mt-40 grid scroll-mt-24 grid-cols-1 gap-10 xl:grid-cols-2">
        <div className="px-4 py-2 sm:px-2">
          <Eyebrow as="h2" color="pink">
            <a href="#sponsors">Sponsors</a>
          </Eyebrow>
          <p className="max-w-3xl text-3xl font-medium tracking-tight text-pretty md:text-[2.5rem]/14">
            Thank you to our sponsors.
          </p>
          <p className="mt-4 max-w-2xl text-base/7 text-gray-600 dark:text-gray-400">
            We are super grateful to all the following sponsors for supporting the ongoing development and maintenance
            of Tailwind CSS.
          </p>
        </div>
      </div>
      <h2 className="mt-16 px-4 text-2xl/10 font-medium tracking-tight sm:px-2">Partners</h2>
      <div className="relative mt-4">
        <div className="pointer-events-none absolute inset-0 z-10 grid grid-cols-2 gap-10 max-md:gap-5 lg:grid-cols-3 xl:grid-cols-4">
          <div className="border-r border-gray-950/5 dark:border-white/10"></div>
          <div className="border-l border-gray-950/5 lg:border-x dark:border-white/10"></div>
          <div className="border-l border-gray-950/5 max-lg:hidden xl:border-x dark:border-white/10"></div>
          <div className="border-l border-gray-950/5 max-xl:hidden dark:border-white/10"></div>
        </div>
        <ul className="grid grid-cols-2 gap-5 md:gap-10 lg:grid-cols-3 xl:grid-cols-4">
          {partners.map((company, index) => (
            <li key={index} className="max-lg:nth-[2n+1]:line-y lg:max-xl:nth-[3n+1]:line-y xl:nth-[4n+1]:line-y">
              <a
                href={company.sponsorPageUrl ?? company.url}
                target="_blank"
                rel="noopener sponsored"
                className="grid place-content-center transition-colors hover:bg-gray-950/2.5 sm:px-2 sm:py-4 dark:hover:bg-white/2.5"
              >
                <company.logo className="w-full max-w-80" aria-label={`${company.name} logo`} />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <h2 className="mt-16 px-4 text-2xl/10 font-medium tracking-tight sm:px-2">Ambassadors</h2>
      <div className="relative mt-4">
        <div className="pointer-events-none absolute inset-0 z-10 grid grid-cols-2 gap-10 max-md:gap-5 lg:grid-cols-3 xl:grid-cols-4">
          <div className="border-r border-gray-950/5 dark:border-white/10"></div>
          <div className="border-l border-gray-950/5 lg:border-x dark:border-white/10"></div>
          <div className="border-l border-gray-950/5 max-lg:hidden xl:border-x dark:border-white/10"></div>
          <div className="border-l border-gray-950/5 max-xl:hidden dark:border-white/10"></div>
        </div>
        <ul className="grid grid-cols-2 gap-5 md:gap-10 lg:grid-cols-3 xl:grid-cols-4">
          {ambassadors.map((company, index) => (
            <li key={index} className="max-lg:nth-[2n+1]:line-y lg:max-xl:nth-[3n+1]:line-y xl:nth-[4n+1]:line-y">
              <a
                href={company.sponsorPageUrl ?? company.url}
                target="_blank"
                rel="noopener sponsored"
                className="grid place-content-center transition-colors hover:bg-gray-950/2.5 sm:px-2 sm:py-4 dark:hover:bg-white/2.5"
              >
                <company.logo className="w-full max-w-80" aria-label={`${company.name} logo`} />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <h2 className="mt-16 px-4 text-2xl/10 font-medium tracking-tight sm:px-2">Supporters</h2>
      <div className="relative mt-4">
        <div className="pointer-events-none absolute inset-0 z-10 grid grid-cols-2 gap-10 max-md:gap-5 lg:grid-cols-3 xl:grid-cols-4">
          <div className="border-r border-gray-950/5 dark:border-white/10"></div>
          <div className="border-l border-gray-950/5 lg:border-x dark:border-white/10"></div>
          <div className="border-l border-gray-950/5 max-lg:hidden xl:border-x dark:border-white/10"></div>
          <div className="border-l border-gray-950/5 max-xl:hidden dark:border-white/10"></div>
        </div>
        <ul className="grid grid-cols-2 gap-5 md:gap-10 lg:grid-cols-3 xl:grid-cols-4">
          {supporters.map((company, index) => (
            <li key={index} className="max-lg:nth-[2n+1]:line-y lg:max-xl:nth-[3n+1]:line-y xl:nth-[4n+1]:line-y">
              <a
                href={company.sponsorPageUrl ?? company.url}
                target="_blank"
                rel="noopener sponsored"
                className="grid place-content-center transition-colors hover:bg-gray-950/2.5 sm:px-2 sm:py-4 dark:hover:bg-white/2.5"
              >
                <company.logo className="w-full max-w-80" aria-label={`${company.name} logo`} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default async function Sponsor() {
  const { partners, ambassadors, supporters } = getShuffledSponsors();

  return (
    <div className="mt-24">
      <Header />
      <div className="isolate">
        <MessageFromAdam />
        <FeaturedPartners partners={partners} />
        <Insiders />
        <InsiderPerks />
        <InsiderPerkScreenshots />
        <Partners />
        <PartnerPerks />
        <PartnerPlans />
        <Faqs />
        <Sponsors partners={partners} ambassadors={ambassadors} supporters={supporters} />
        <FooterMeta className="px-4 md:px-6 lg:px-8" />
      </div>
    </div>
  );
}
