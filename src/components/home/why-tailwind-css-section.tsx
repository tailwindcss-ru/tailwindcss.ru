import colorValues from "@/docs/utils/colors";
import { Tooltip, TooltipPanel, TooltipTrigger } from "@headlessui/react";
import { StarIcon } from "@heroicons/react/16/solid";
import clsx from "clsx";
import { CSSProperties, Fragment, ReactNode } from "react";
import { css, HighlightedCode, html } from "../code-example";
import GridContainer from "../grid-container";
import { Resizable, ResizableHandle, ResizablePanel } from "../resizable";
import { Autoscroll } from "./autoscroll";
import { BentoBody, BentoDescription, BentoHeader, BentoIcon, BentoItem, BentoTitle } from "./bento";
import CategoryHeader from "./category-header";
import { Editor } from "./editor";
import { _3DTransformsIcon } from "./icons/3d-transforms-icon";
import { CascadeLayersIcon } from "./icons/cascade-layers-icon";
import { ContainerQueriesIcon } from "./icons/container-queries-icon";
import { CssGridIcon } from "./icons/css-grid-icon";
import { CssVariablesIcon } from "./icons/css-variables-icon";
import { DarkModeIcon } from "./icons/dark-mode-icon";
import { FiltersIcon } from "./icons/filters-icon";
import { GradientsIcon } from "./icons/gradients-icon";
import { LogicalPropertiesIcon } from "./icons/logical-properties-icon";
import { P3ColorsIcon } from "./icons/p3-colors-icon";
import { ResponsiveDesignIcon } from "./icons/responsive-design-icon";
import { TransitionsAndAnimationsIcon } from "./icons/transitions-and-animations-icon";
import { Transforms3d } from "./transforms-3d";
import { TransitionsSection } from "./transitions-section";
import avatar1 from "./why-tailwind-css-section/avatar-1.png";
import avatar2 from "./why-tailwind-css-section/avatar-2.png";
import avatar3 from "./why-tailwind-css-section/avatar-3.png";
import avatar4 from "./why-tailwind-css-section/avatar-4.png";
import avatar5 from "./why-tailwind-css-section/avatar-5.png";
import avatar6 from "./why-tailwind-css-section/avatar-6.png";
import avatar7 from "./why-tailwind-css-section/avatar-7.png";
import cssGrid1Mobile from "./why-tailwind-css-section/css-grid-1.mobile.png";
import cssGrid1 from "./why-tailwind-css-section/css-grid-1.png";
import cssGrid2 from "./why-tailwind-css-section/css-grid-2.png";
import cssGrid3 from "./why-tailwind-css-section/css-grid-3.png";
import cssGrid4 from "./why-tailwind-css-section/css-grid-4.png";
import { DarkMode } from "./why-tailwind-css-section/dark-mode";
import filtersImg from "./why-tailwind-css-section/filters.png";
import responsive1 from "./why-tailwind-css-section/responsive-1.png";
import responsive2 from "./why-tailwind-css-section/responsive-2.png";
import responsive3 from "./why-tailwind-css-section/responsive-3.png";
import responsive4 from "./why-tailwind-css-section/responsive-4.png";
import responsive5 from "./why-tailwind-css-section/responsive-5.png";

export default function WhyTailwindCssSection() {
  return (
    <div className="relative max-w-full">
      <div
        aria-hidden="true"
        className="hidden h-4 items-end whitespace-pre px-2 font-mono text-xs/6 text-black/20 max-sm:px-4 2xl:visible 2xl:flex dark:text-white/25"
      >
        text-4xl <span className="inline dark:hidden">text-gray-950</span>
        <span className="hidden dark:inline">text-white</span> tracking-tighter text-balance
      </div>

      <GridContainer className="2xl:before:hidden 2xl:after:hidden">
        <CategoryHeader className="text-sky-500 dark:text-sky-400">Почему Tailwind CSS?</CategoryHeader>
      </GridContainer>

      <GridContainer>
        <h2 className="max-w-lg text-balance px-2 text-[2.5rem]/10 font-medium tracking-tighter max-sm:px-4 2xl:mt-0">
          Создано для современного Интернета.
        </h2>
      </GridContainer>

      <div
        aria-hidden="true"
        className="flex h-6 items-end whitespace-pre px-2 font-mono text-xs/6 text-black/20 max-sm:px-4 sm:h-10 dark:text-white/25"
      >
        text-base <span className="inline dark:hidden">text-gray-950</span>
        <span className="hidden dark:inline">text-white</span>
      </div>

      <GridContainer>
        <p className="max-w-(--breakpoint-md) px-2 text-base/7 text-gray-600 max-sm:px-4 dark:text-gray-400">
          Tailwind — это невероятно современный инструмент, который использует все новейшие и лучшие возможности CSS, чтобы сделать работу разработчика максимально приятной.
        </p>
      </GridContainer>

      <GridContainer className="mt-16">
        <div className="grid-cols-30 grid w-full grid-flow-dense gap-2 bg-gray-950/5 p-2 dark:bg-white/10">
          <BentoItem className="col-span-full">
            <BentoHeader>
              <BentoIcon>
                <ResponsiveDesignIcon />
              </BentoIcon>
              <div>
                <BentoTitle>Адаптивный дизайн</BentoTitle>
                <BentoDescription>
                  Ладно, это не совсем передовая технология, но просто укажите размер экрана буквально перед любой утилитой, чтобы применить ее в определенной точке останова.
                </BentoDescription>
              </div>
            </BentoHeader>
            <BentoBody className="h-112">
              <div className="group flex flex-col gap-2">
                <div className="not-sm:hidden flex justify-start">
                  <div className="flex w-10 shrink-0 grow-0 gap-2">
                    <div className="h-8 w-px shrink-0 bg-gray-950/20 dark:bg-white/30"></div>
                    <span className="text-gray-950 dark:text-white">
                      <Code>Mobile</Code>
                    </span>
                  </div>
                  <div className="ml-150 flex w-32 shrink-0 grow-0 gap-2">
                    <div className="not-group-has-data-sm:bg-gray-950/5 dark:not-group-has-data-sm:bg-white/10 h-8 w-px shrink-0 bg-gray-950/20 dark:bg-white/30"></div>
                    <span className="not-group-has-data-sm:opacity-40">
                      <Code>sm</Code>
                    </span>
                  </div>
                  <div className="flex w-64 shrink-0 grow-0 gap-2">
                    <div className="not-group-has-data-md:bg-gray-950/5 dark:not-group-has-data-md:bg-white/10 h-8 w-px shrink-0 bg-gray-950/20 dark:bg-white/30"></div>
                    <span className="not-group-has-data-md:opacity-40">
                      <Code>md</Code>
                    </span>
                  </div>
                  <div className="flex w-64 shrink-0 grow-0 gap-2">
                    <div className="not-group-has-data-lg:bg-gray-950/5 dark:not-group-has-data-lg:bg-white/10 h-8 w-px shrink-0 bg-gray-950/20 dark:bg-white/30"></div>
                    <span className="not-group-has-data-lg:opacity-40">
                      <Code>lg</Code>
                    </span>
                  </div>
                  <div className="flex w-64 shrink-0 grow-0 gap-2">
                    <div className="not-group-has-data-xl:bg-gray-950/5 dark:not-group-has-data-xl:bg-white/10 h-8 w-px shrink-0 bg-gray-950/20 dark:bg-white/30"></div>
                    <span className="not-group-has-data-xl:opacity-40">
                      <Code>xl</Code>
                    </span>
                  </div>
                </div>
                <Resizable>
                  <ResizablePanel className="@container max-sm:mr-0!">
                    <div className="@min-[theme(--breakpoint-lg)]:grid-cols-2 @min-[theme(--breakpoint-lg)]:px-20 @min-[theme(--breakpoint-lg)]:py-8 @min-[theme(--breakpoint-lg)]:pb-10 relative grid gap-10 rounded-t-2xl bg-white p-6 pb-10 ring ring-gray-950/5 dark:bg-gray-950 dark:ring-white/10">
                      <div className="flex flex-1 flex-col">
                        <div className="@max-[theme(--breakpoint-xl)]:-mx-4 @max-[theme(--breakpoint-xl)]:-mt-4 @min-[theme(--breakpoint-lg)]:hidden relative mb-4 overflow-hidden rounded-lg">
                          <div className="@min-[theme(--breakpoint-sm)]:grid-cols-4 grid grid-cols-1 gap-2">
                            <img
                              alt=""
                              src={responsive1.src}
                              className="@min-[theme(--breakpoint-sm)]:col-span-2 @min-[theme(--breakpoint-sm)]:h-40 h-48 w-full rounded-lg bg-gray-950/5 object-cover"
                            />

                            <img
                              alt=""
                              src={responsive2.src}
                              className="@max-[theme(--breakpoint-sm)]:hidden @min-[theme(--breakpoint-md)]:col-span-1 @min-[theme(--breakpoint-sm)]:h-40 col-span-2 h-48 w-full rounded-lg bg-gray-950/5 object-cover"
                            />

                            <img
                              alt=""
                              src={responsive3.src}
                              className="@max-[theme(--breakpoint-md)]:hidden @min-[theme(--breakpoint-sm)]:h-40 h-48 w-full rounded-lg bg-gray-950/5 object-cover"
                            />
                          </div>

                          <div className="bg-linear-to-b @min-[theme(--breakpoint-sm)]:hidden absolute inset-0 flex flex-col justify-end gap-2 from-transparent via-transparent to-gray-950 p-6">
                            <span className="text-sm/6 font-semibold text-white/80">Весь дом</span>
                            <span className="text-xl/6 font-semibold text-white">Пляжный домик на озере Гурон</span>
                          </div>
                        </div>

                        <span className="@max-[theme(--breakpoint-sm)]:hidden font-medium text-gray-500 dark:text-gray-500">
                          Весь дом
                        </span>

                        <div className="@min-[theme(--breakpoint-sm)]:grid-cols-[1fr_auto] @min-[theme(--breakpoint-xl)]:grid-cols-1 grid grid-cols-1 gap-4">
                          <div>
                            <span className="@max-[theme(--breakpoint-sm)]:hidden mt-2 text-3xl font-semibold text-gray-950 dark:text-white">
                              Пляжный домик на озере Гурон
                            </span>

                            <span className="mt-2 flex gap-2">
                              <span className="flex items-center gap-1 text-pink-600 dark:text-pink-500">
                                <StarIcon className="size-4" />
                                <span className="text-sm/6 font-medium">2.66</span>
                              </span>
                              <span className="text-sm/6 text-gray-500">(128 reviews)</span>
                              <span className="text-pink-300 dark:text-gray-600">&middot;</span>
                              <span className="text-sm/6 font-medium text-pink-600 dark:text-pink-500">
                                Bayfield, ON
                              </span>
                            </span>
                          </div>

                          <div className="@min-[theme(--breakpoint-lg)]:hidden">
                            <button
                              type="button"
                              className="@min-[theme(--breakpoint-sm)]:w-auto w-full rounded-lg bg-pink-500 px-3 py-2 text-sm/6 font-bold text-white"
                            >
                              Проверить наличие
                            </button>
                          </div>
                        </div>

                        <div>
                          <p className="@min-[theme(--breakpoint-xl)]:max-w-md mt-4 line-clamp-2 text-sm/6 text-gray-600 dark:text-gray-400">
                            Этот солнечный и просторный номер подойдет тем, кто путешествует налегке и ищет
                            удобное и уютное место, где можно преклонить голову на ночь...{" "}
                            <span className="sm:@max-[theme(--breakpoint-sm)]:inline-block hidden font-bold text-pink-600 before:text-white dark:text-pink-500">
                              Показать больше
                            </span>
                          </p>

                          <span className="mt-3 inline-block shrink-0 text-sm/6 font-semibold text-pink-600 dark:text-pink-500">
                            Показать больше
                          </span>
                        </div>

                        <div className="@max-[theme(--breakpoint-lg)]:hidden mt-6">
                          <button
                            type="button"
                            className="w-auto rounded-lg bg-pink-500 px-3 py-2 text-sm/6 font-bold text-white"
                          >
                            Проверить наличие
                          </button>
                        </div>
                      </div>
                      <div className="@max-[theme(--breakpoint-lg)]:hidden grid grid-cols-4 grid-rows-2 gap-2">
                        <img
                          alt=""
                          src={responsive1.src}
                          className="@min-[theme(--breakpoint-xl)]:col-span-2 @min-[theme(--breakpoint-xl)]:row-span-2 @min-[theme(--breakpoint-xl)]:aspect-square @min-[theme(--breakpoint-xl)]:h-[308px] col-span-4 h-[150px] w-full rounded-lg bg-gray-950/5 object-cover"
                        />
                        <img
                          alt=""
                          src={responsive2.src}
                          className="@max-[theme(--breakpoint-xl)]:aspect-square @min-[theme(--breakpoint-xl)]:col-span-1 col-span-2 h-[150px] w-full rounded-lg bg-gray-950/5"
                        />
                        <img
                          alt=""
                          src={responsive3.src}
                          className="@max-[theme(--breakpoint-xl)]:aspect-square @min-[theme(--breakpoint-xl)]:col-span-1 col-span-2 h-[150px] w-full rounded-lg bg-gray-950/5"
                        />
                        <div className="@max-[theme(--breakpoint-xl)]:hidden contents">
                          <img
                            alt=""
                            src={responsive4.src}
                            className="aspect-square size-[150px] rounded-lg bg-gray-950/5"
                          />
                          <img
                            alt=""
                            src={responsive5.src}
                            className="aspect-square size-[150px] rounded-lg bg-gray-950/5"
                          />
                        </div>
                      </div>
                    </div>
                  </ResizablePanel>
                  <ResizableHandle
                    className={clsx(
                      "pointer-events-auto absolute -right-4 top-[186px] z-50 -mt-6 h-12 w-1.5 cursor-ew-resize rounded-full max-lg:hidden",
                      "group-data-dragging:bg-slate-950/40 bg-slate-950/20 hover:bg-slate-950/40",
                      "dark:group-data-dragging:bg-slate-300 dark:bg-slate-500 dark:hover:bg-slate-300",
                    )}
                  />
                </Resizable>
              </div>
            </BentoBody>
          </BentoItem>

          <BentoItem className="md:col-span-15 col-span-full">
            <BentoHeader>
              <BentoIcon>
                <FiltersIcon />
              </BentoIcon>
              <div>
                <BentoTitle>Фильтры</BentoTitle>
                <BentoDescription>
                  Какой веб-сайт в наши дни без нескольких размытых фонов? Продолжайте накладывать фильтры, пока ваш дизайнер не попросит вас: «Пожалуйста, пожалуйста, остановитесь».
                </BentoDescription>
              </div>
            </BentoHeader>
            <BentoBody className="h-112" padding={false}>
              <div className="@container relative flex size-full items-center justify-center">
                <Autoscroll className="no-scrollbar gap-(--gap) z-10 -my-1 flex snap-x snap-mandatory overflow-x-auto py-1 [--gap:--spacing(10)] [--size:--spacing(72)]">
                  <div className="flex snap-proximity snap-end">
                    <div className="w-[calc(50cqw-(var(--size)/2)-(var(--gap)))]" />
                  </div>

                  {[
                    ["blur-sm", "backdrop-blur-sm"],
                    ["brightness-150", "backdrop-brightness-150"],
                    ["grayscale", "backdrop-grayscale"],
                    ["contrast-150", "backdrop-contrast-150"],
                    ["saturate-200", "backdrop-saturate-200"],
                    ["sepia", "backdrop-sepia"],
                  ].map(([name, className]) => {
                    return (
                      <div key={name} data-target className="flex snap-center snap-always flex-col items-center gap-2">
                        <Code>{name}</Code>
                        <div className="inset-ring inset-ring-white/20 shadow ring ring-gray-950/10">
                          <div className={clsx("size-(--size) bg-white/15", className)} />
                        </div>
                      </div>
                    );
                  })}

                  <div className="flex snap-proximity snap-end">
                    <div className="w-[calc(50cqw-(var(--size)/2)-(var(--gap)))]" />
                  </div>
                </Autoscroll>

                <div className="absolute inset-0 mt-8 flex items-center justify-center">
                  <img alt="" src={filtersImg.src} className="inset-ring inset-ring-gray-950/10 size-64" />
                </div>
              </div>
            </BentoBody>
          </BentoItem>

          <BentoItem className="md:col-span-15 col-span-full">
            <BentoHeader>
              <BentoIcon>
                <DarkModeIcon />
              </BentoIcon>
              <div>
                <BentoTitle>Темный режим</BentoTitle>
                <BentoDescription>
                  Если вы не любите выжигать сетчатку, просто добавьте{" "}
                  <code className="font-medium text-gray-950 dark:text-white">dark:</code>
                  перед любым цветом, чтобы применить его в темном режиме.
                </BentoDescription>
              </div>
            </BentoHeader>
            <BentoBody className="h-112">
              <DarkMode />
            </BentoBody>
          </BentoItem>

          <BentoItem className="md:col-span-15 col-span-full xl:col-span-12">
            <BentoHeader>
              <BentoIcon>
                <CssVariablesIcon />
              </BentoIcon>
              <div>
                <BentoTitle>CSS-переменные</BentoTitle>
                <BentoDescription>
                  Настроить тему так же просто, как создать несколько переменных CSS.
                </BentoDescription>
              </div>
            </BentoHeader>
            <BentoBody className="h-112">
              <div className="-mb-16 -mr-16">
                <Editor>
                  <HighlightedCode
                    example={css`
                      @theme {
                        --font-sans: "Inter", sans-serif;
                        --font-mono: "IBM Plex Mono", monospace;

                        --text-tiny: 0.625rem;
                        --text-tiny--line-height: 1.5rem;

                        --color-mint-100: oklch(0.97 0.15 145);
                        --color-mint-200: oklch(0.92 0.18 145);
                        --color-mint-300: oklch(0.85 0.22 145);
                        --color-mint-400: oklch(0.78 0.25 145);
                        --color-mint-500: oklch(0.7 0.28 145);
                        --color-mint-600: oklch(0.63 0.3 145);
                        --color-mint-700: oklch(0.56 0.32 145);
                        --color-mint-800: oklch(0.48 0.35 145);
                        --color-mint-900: oklch(0.4 0.37 145);
                        --color-mint-950: oklch(0.3 0.4 145);
                      }
                    `}
                  />
                </Editor>
              </div>
            </BentoBody>
          </BentoItem>

          <BentoItem className="xl:col-span-18 col-span-full">
            <BentoHeader>
              <BentoIcon>
                <P3ColorsIcon />
              </BentoIcon>
              <div>
                <BentoTitle>P3 цвета</BentoTitle>
                <BentoDescription>
                  Цветовая палитра теперь использует более яркие цвета с широким охватом, и вам даже не нужно понимать,
                  что все это значит.
                </BentoDescription>
              </div>
            </BentoHeader>
            <BentoBody className="h-112">
              {(() => {
                let colors = [
                  "red",
                  "orange",
                  "amber",
                  "yellow",
                  "lime",
                  "green",
                  "emerald",
                  "teal",
                  "cyan",
                  "sky",
                  "blue",
                  "indigo",
                  "violet",
                  "purple",
                  "fuchsia",
                  "pink",
                  "rose",
                ];
                let shades = [950, 900, 800, 700, 600, 500, 400, 300, 200, 100, 50];

                // New width and height depending on the angle:
                //
                // theta = angle in degrees as radians
                // W = w * |cos(theta)| + h * |sin(theta)|
                // H = w * |sin(theta)| + h * |cos(theta)|

                let angle = -45; // degrees
                let angleAsRadians = (angle * Math.PI) / 180;
                let sin = Math.abs(Math.sin(angleAsRadians));
                let cos = Math.abs(Math.cos(angleAsRadians));

                return (
                  <div className="-mb-16 -mr-16 mt-8 sm:mt-0">
                    <div
                      className="group grid grid-cols-[repeat(var(--columns),var(--width))] gap-1.5 [--height:--spacing(6)] [--width:--spacing(10)] sm:[--height:--spacing(10)] sm:[--width:--spacing(16)]"
                      style={
                        {
                          "--sin": sin,
                          "--cos": cos,
                          "--angle": `${angle}deg`,
                          "--columns": colors.length + 1,
                        } as CSSProperties
                      }
                    >
                      <div />
                      {colors.map((color) => {
                        return (
                          <div key={color}>
                            <div className="pointer-events-none h-[calc(var(--width)*var(--sin)+var(--height)*var(--cos))] w-[calc(var(--width)*var(--cos)+var(--height)*var(--sin))] translate-x-5 translate-y-2 sm:translate-x-8 sm:translate-y-5">
                              <div className="rotate-(--angle)">
                                <Code>{color}</Code>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                      {shades.map((shade, shadeIdx) => {
                        return (
                          <Fragment key={shade}>
                            <div className="relative">
                              <div className="absolute -mt-1 w-screen border-t border-gray-950/5 dark:border-white/10"></div>
                              <div className="h-(--height) w-(--width) flex items-center">
                                <Code>{shade}</Code>
                              </div>
                            </div>
                            {colors.map((color) => {
                              let value = colorValues[`${color}-${shade}`];
                              return (
                                <Tooltip as="div" key={color} showDelayMs={100} hideDelayMs={0} className="relative">
                                  {shadeIdx === 0 && (
                                    <>
                                      <div className="pointer-events-none absolute -left-1 -top-1 h-screen border-l border-gray-950/5 dark:border-white/10"></div>
                                      <div className="translate-px rotate-225 pointer-events-none absolute -left-1 -top-1 h-16 origin-top-left border-l border-gray-950/5 sm:h-24 dark:border-white/10"></div>
                                    </>
                                  )}

                                  <TooltipTrigger>
                                    <div
                                      style={{ "--color": `var(--color-${color}-${shade})` } as CSSProperties}
                                      className="h-(--height) w-(--width) bg-(--color) inset-ring inset-ring-gray-950/10 dark:inset-ring-white/10 transition-opacity hover:opacity-100 group-hover:opacity-75"
                                    />
                                  </TooltipTrigger>
                                  <TooltipPanel
                                    as="div"
                                    anchor="top"
                                    className="inset-ring inset-ring-white/10 starting:opacity-0 pointer-events-none z-10 translate-y-2 whitespace-nowrap rounded-full border border-gray-950 bg-gray-950/90 py-0.5 pb-1 pl-3 pr-2 text-center font-mono text-xs/6 font-medium text-white opacity-100 transition-[opacity]"
                                  >
                                    {value}
                                  </TooltipPanel>
                                </Tooltip>
                              );
                            })}
                          </Fragment>
                        );
                      })}
                    </div>
                  </div>
                );
              })()}
            </BentoBody>
          </BentoItem>

          <BentoItem className="xl:col-span-15 col-span-full">
            <BentoHeader>
              <BentoIcon>
                <CssGridIcon />
              </BentoIcon>
              <div>
                <BentoTitle>Макет сетки CSS</BentoTitle>
                <BentoDescription>
                  Использование утилит сетки непосредственно в HTML значительно упрощает разработку сложных макетов.
                </BentoDescription>
              </div>
            </BentoHeader>
            <BentoBody className="h-112">
              <div className="-mb-8 -mr-16 [--size:--spacing(48)] lg:flex lg:justify-center xl:block">
                <div className="-mt-18 sm:-mt-26">
                  <div className="bg-white p-6 ring ring-gray-950/5 sm:p-16 dark:bg-gray-950 dark:ring-white/10">
                    <h3 className="text-base/6 font-semibold text-gray-950 dark:text-white">Обзор свойств</h3>
                    <div className="mt-6 grid grid-cols-[repeat(2,var(--size))] grid-rows-[repeat(3,var(--size))] gap-2 sm:grid-cols-[repeat(3,var(--size))] sm:grid-rows-[repeat(2,var(--size))]">
                      <div className="relative col-span-2 row-span-1 overflow-hidden rounded-t-2xl sm:col-span-1 sm:row-span-2 sm:rounded-none sm:rounded-l-2xl dark:outline dark:outline-white/10">
                        <img alt="" className="not-sm:hidden" src={cssGrid1.src} />
                        <img alt="" className="sm:hidden" src={cssGrid1Mobile.src} />
                        <div className="bg-linear-to-b absolute inset-0 flex items-end from-transparent via-transparent to-gray-950">
                          <span className="p-4 text-sm/5 font-semibold text-white">Домики на деревьях</span>
                        </div>
                      </div>
                      <div className="relative dark:outline dark:outline-white/10">
                        <img alt="" src={cssGrid2.src} />
                        <div className="bg-linear-to-b absolute inset-0 flex items-end from-transparent via-transparent to-gray-950">
                          <span className="p-4 text-sm/5 font-semibold text-white">Особняки</span>
                        </div>
                      </div>
                      <div className="relative overflow-hidden sm:rounded-tr-2xl dark:outline dark:outline-white/10">
                        <img alt="" src={cssGrid3.src} />
                        <div className="bg-linear-to-b absolute inset-0 flex items-end from-transparent via-transparent to-gray-950">
                          <span className="p-4 text-sm/5 font-semibold text-white">Коттеджи на берегу озера</span>
                        </div>
                      </div>
                      <div className="relative col-span-2 overflow-hidden rounded-b-2xl sm:rounded-bl-none dark:outline dark:outline-white/10">
                        <img alt="" className="aspect-2/1" src={cssGrid4.src} />
                        <div className="bg-linear-to-b absolute inset-0 flex items-end from-transparent via-transparent to-gray-950">
                          <span className="p-4 text-sm/5 font-semibold text-white">Дизайнерские дома</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </BentoBody>
          </BentoItem>

          <BentoItem className="xl:col-span-15 col-span-full">
            <BentoHeader>
              <BentoIcon>
                <TransitionsAndAnimationsIcon />
              </BentoIcon>
              <div>
                <BentoTitle>Переходы и анимация</BentoTitle>
                <BentoDescription>
                  Переходы, которые работают так, как вы ожидаете — добавьте несколько утилит к элементу, и все готово.
                </BentoDescription>
              </div>
            </BentoHeader>
            <div className="h-112 grid gap-[inherit]">
              <BentoBody padding={false}>
                <TransitionsSection />
              </BentoBody>
            </div>
          </BentoItem>

          <BentoItem className="md:col-span-15 col-span-full xl:col-span-10">
            <BentoHeader>
              <BentoIcon>
                <CascadeLayersIcon />
              </BentoIcon>
              <div>
                <BentoTitle>Каскадные слои</BentoTitle>
                <BentoDescription>
                  Tailwind использует слои CSS, поэтому вам не придется беспокоиться о проблемах специфичности.
                </BentoDescription>
              </div>
            </BentoHeader>
            <BentoBody className="h-112">
              <div className="-mb-16 -mr-16">
                <Editor>
                  <HighlightedCode
                    example={css`
                      @layer theme, base, components, utilities;

                      @layer theme {
                        :root {
                          /* Your theme variables */
                        }
                      }

                      @layer base {
                        /* Preflight styles */
                      }

                      @layer components {
                        /* Your custom components */
                      }

                      @layer utilities {
                        /* Your utility classes */
                      }
                    `}
                  />
                </Editor>
              </div>
            </BentoBody>
          </BentoItem>

          <BentoItem className="md:col-span-15 col-span-full xl:col-span-10">
            <BentoHeader>
              <BentoIcon>
                <LogicalPropertiesIcon />
              </BentoIcon>
              <div>
                <BentoTitle>Логические свойства</BentoTitle>
                <BentoDescription>
                  Поддержка многоязыковых указаний текста больше не является кошмаром.
                </BentoDescription>
              </div>
            </BentoHeader>
            <BentoBody padding={false} className="h-112">
              <div className="flex px-8 pt-8">
                <div className="w-full -translate-x-4">
                  <Code>ltr</Code>
                </div>
                <div className="w-full translate-x-4 translate-y-20 text-right">
                  <Code>rtl</Code>
                </div>
              </div>
              <div className="@container relative isolate flex h-full items-center justify-center">
                <div className="z-1 inset-ring inset-ring-gray-950/5 dark:inset-ring-white/5 absolute -left-2 bottom-12 w-[60cqw] shrink-0 divide-y divide-gray-950/5 rounded-xl bg-white shadow-2xl dark:divide-white/5 dark:bg-gray-800">
                  {[
                    { src: avatar4.src, name: "Will Winton", role: "Director of Operations" },
                    { src: avatar5.src, name: "Kristin Yardly", role: "Marketing Coordinator" },
                    { src: avatar6.src, name: "Emanual Cuccittini", role: "Staff Engineer" },
                    { src: avatar7.src, name: "Kiara Smith", role: "VP of Engineering" },
                  ].map((user, idx) => {
                    return (
                      <div key={idx} className="flex items-center justify-start gap-4 p-6">
                        <div className="shrink-0">
                          <img
                            alt=""
                            src={user.src}
                            className="size-12 shrink-0 rounded-full bg-gray-950/5 outline -outline-offset-1 outline-gray-950/10 dark:outline-white/10"
                          />
                        </div>
                        <div className="flex flex-col truncate">
                          <span className="text-sm/6 font-medium text-gray-950 dark:text-white">{user.name}</span>
                          <span className="truncate text-sm/6 text-gray-500 dark:text-gray-400">{user.role}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="inset-ring inset-ring-gray-950/5 dark:inset-ring-white/5 absolute -right-3 bottom-12 w-[50cqw] shrink-0 divide-y divide-gray-950/5 rounded-xl bg-white shadow-2xl dark:divide-white/5 dark:bg-gray-800">
                  {[
                    { src: avatar1.src, name: "سارة أحمد", role: "مديرة مشاريع" },
                    { src: avatar2.src, name: "علي محمد", role: "مطور برمجيات" },
                    { src: avatar3.src, name: "خالد عمر", role: "مصمم واجهات المستخدم" },
                  ].map((user, idx) => {
                    return (
                      <div key={idx} className="flex items-center justify-end gap-4 p-6">
                        <div className="flex flex-col truncate text-right">
                          <span className="text-sm/6 font-medium text-gray-950 dark:text-white">{user.name}</span>
                          <span className="truncate text-sm/6 text-gray-500 dark:text-gray-400">{user.role}</span>
                        </div>
                        <div className="shrink-0">
                          <img
                            alt=""
                            src={user.src}
                            className="size-12 shrink-0 rounded-full bg-gray-950/5 outline -outline-offset-1 outline-gray-950/10 dark:outline-white/10"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </BentoBody>
          </BentoItem>

          <BentoItem className="md:col-span-15 col-span-full xl:col-span-10">
            <BentoHeader>
              <BentoIcon>
                <ContainerQueriesIcon />
              </BentoIcon>
              <div>
                <BentoTitle>Контейнерные запросы</BentoTitle>
                <BentoDescription>
                  Пометьте элемент как контейнер, чтобы дети могли адаптироваться к изменениям его размера.
                </BentoDescription>
              </div>
            </BentoHeader>
            <BentoBody className="h-112">
              <div className="-mb-16 -mr-16">
                <Editor>
                  <HighlightedCode
                    example={
                      // prettier-ignore
                      html`
                        <!-- [!code classes:@container,@sm:grid-cols-2,@sm:aspect-3/2] -->
                        <div class="@container">
                          <div class="grid grid-cols-1 @sm:grid-cols-2">
                            <img
                              src="/img/photo-1.jpg"
                              class="aspect-square @sm:aspect-3/2 object-cover"
                            />
                            <img
                              src="/img/photo-2.jpg"
                              class="aspect-square @sm:aspect-3/2 object-cover"
                            />
                            <img
                              src="/img/photo-3.jpg"
                              class="aspect-square @sm:aspect-3/2 object-cover"
                            />
                            <img
                              src="/img/photo-4.jpg"
                              class="aspect-square @sm:aspect-3/2 object-cover"
                            />
                          </div>
                        </div>
                      `
                    }
                  />
                </Editor>
              </div>
            </BentoBody>
          </BentoItem>

          <BentoItem className="md:col-span-15 col-span-full">
            <BentoHeader>
              <BentoIcon>
                <GradientsIcon />
              </BentoIcon>
              <div>
                <BentoTitle>Градиенты</BentoTitle>
                <BentoDescription>
                  Нет необходимости запоминать сложный синтаксис градиентов — создавайте гладкие и шелковистые градиенты с помощью всего нескольких служебных классов.
                </BentoDescription>
              </div>
            </BentoHeader>
            <BentoBody className="h-112">
              <div className="-mt-27 -mr-124 xl:-mr-26 -mb-8 bg-white px-6 py-16 ring ring-gray-950/5 md:px-16 dark:bg-gray-950 dark:ring-white/10">
                <div className="flex flex-col gap-2">
                  <span className="text-sm/7 font-medium text-gray-950/75 dark:text-white/75">
                    Мощность и точность
                  </span>
                  <h3 className="text-4xl/12 font-semibold text-gray-950 dark:text-white">
                    Переосмысление производительности в реальном времени
                  </h3>
                  <p className="text-lg/7 font-medium text-gray-950/75 dark:text-white/75">
                    Наш движок рендеринга нового поколения обеспечивает непревзойденную скорость и эффективность,
                    позволяя создателям расширять границы, как никогда ранее.
                  </p>
                </div>
                <div className="mt-10 flex flex-col gap-10">
                  <div className="flex gap-6">
                    <div className="flex flex-1 flex-col gap-2.5">
                      <span className="text-base/7 font-medium text-gray-950 dark:text-white">
                        Производительность времени рендеринга
                      </span>
                      <div className="bg-linear-to-r h-2.5 w-full rounded-full from-emerald-500 to-sky-400 ring-1 ring-inset ring-gray-950/10 dark:from-emerald-400 dark:ring-white/10"></div>
                    </div>
                    <span className="text-3xl/12 font-semibold text-gray-950 dark:text-white">6.4x</span>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex flex-1 flex-col gap-2.5">
                      <span className="text-base/7 font-medium text-gray-950 dark:text-white">
                        Частота кадров в реальном времени
                      </span>
                      <div className="bg-linear-to-r h-2.5 w-3/4 rounded-full from-pink-600 to-amber-300 ring-1 ring-inset ring-gray-950/10 dark:from-pink-500 dark:to-amber-200 dark:ring-white/10"></div>
                    </div>
                    <span className="text-3xl/12 font-semibold text-gray-950 dark:text-white">4.2x</span>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex flex-1 flex-col gap-2.5">
                      <span className="text-base/7 font-medium text-gray-950 dark:text-white">
                        Время сборки для нескольких платформ
                      </span>
                      <div className="bg-linear-to-r h-2.5 w-1/2 rounded-full from-purple-600 to-cyan-400 ring-1 ring-inset ring-gray-950/10 dark:from-purple-500 dark:ring-white/10"></div>
                    </div>
                    <span className="text-3xl/12 font-semibold text-gray-950 dark:text-white">2.7x</span>
                  </div>
                </div>
              </div>
            </BentoBody>
          </BentoItem>

          <BentoItem className="md:col-span-15 col-span-full">
            <BentoHeader>
              <BentoIcon>
                <_3DTransformsIcon />
              </BentoIcon>
              <div>
                <BentoTitle>3D трансформация</BentoTitle>
                <BentoDescription>
                  Иногда двух измерений недостаточно. Масштабируйте, вращайте и трансформируйте любой элемент
                  в трехмерном пространстве, чтобы добавить немного глубины.
                </BentoDescription>
              </div>
            </BentoHeader>
            <BentoBody className="h-112">
              <Transforms3d />
            </BentoBody>
          </BentoItem>
        </div>
      </GridContainer>
    </div>
  );
}

function Code({ children }: { children: ReactNode }) {
  return <div className="font-mono text-[13px]/7 text-gray-950 dark:text-white">{children}</div>;
}
