import css from "dedent";
import { Fragment } from "react";
import { CodeExample } from "./code-example";

const screens = {
  sm: "small",
  md: "medium",
  lg: "large",
};

function startsWithVowel(string: string) {
  return ["a", "e", "i", "o", "u"].includes(string[0]);
}

function htmlSnippet({
  elementName,
  attributes,
  featuredClass,
}: {
  elementName: string;
  attributes: Record<string, string>;
  featuredClass: string;
}) {
  let parts = [`<!-- [!code classes:${featuredClass}] -->\n`];

  const attributesString = Object.entries(attributes)
    .map(([key, value]) => `${key}="${value}"`)
    .join(" ");

  parts.push(`<${elementName} ${attributesString}`);

  if (elementName === "img" || elementName === "input") {
    parts.push(" />");
  } else if (elementName === "textarea") {
    parts.push("></textarea>");
  } else if (elementName === "iframe") {
    parts.push("></iframe>");
  } else {
    parts.push(">\n");
    parts.push("  <!-- ... -->\n");
    parts.push(`</${elementName}>`);
  }

  return parts.join("");
}

export function UsingACustomValue({
  utility,
  utilities,
  name,
  value,
  variable,
  dataType,
  element = "div",
  elementAttributes = {},
  children,
}: {
  utility?: string;
  utilities?: Array<string>;
  name?: string;
  value?: string;
  variable?: string;
  dataType?: string;
  element?: string;
  elementAttributes?: Record<string, string>;
  children?: React.ReactNode;
}) {
  let property = `--my-${variable || utility || utilities![0]}`;

  if (dataType) {
    property = `${dataType}:${property}`;
  }

  utility = utility || utilities![0];

  return (
    <>
      <p>
        {utilities ? (
          <>
            Используйте такие утилиты, как{" "}
            {utilities.map((name, index) => (
              <Fragment key={index}>
                {utilities.length > 1 && index === utilities.length - 1 ? " and " : ""}
                <code>
                  {name}-[<var>{"<value>"}</var>]
                </code>
                {index === utilities.length - 1 || utilities.length < 3 ? "" : ","}
              </Fragment>
            ))}
          </>
        ) : (
          <>
            Используйте синтаксис{" "}
            <code>
              {utility}-[<var>{"<value>"}</var>]
            </code>{" "}
          </>
        )}, {" "}
         чтобы задать {name || utility} на основе полностью пользовательского значения:
      </p>
      {children || (
        <div>
          <div className="not-prose">
            <CodeExample
              example={{
                lang: "html",
                code: htmlSnippet({
                  elementName: element,
                  attributes: {
                    class: `${utility}-[${value}] ...`,
                    ...elementAttributes,
                  },
                  featuredClass: `${utility}-[${value}]`,
                }),
              }}
            />
          </div>
        </div>
      )}
      <p>
        Для переменных CSS вы также можете использовать синтаксис:{" "}
        <code>
          {utility}-({dataType ? `${dataType}:` : null}
          <var>{"<custom-property>"}</var>)
        </code>{" "}
      </p>
      <div>
        <div className="not-prose">
          <CodeExample
            example={{
              lang: "html",
              code: htmlSnippet({
                elementName: element,
                attributes: {
                  class: `${utility}-(${property}) ...`,
                  ...elementAttributes,
                },
                featuredClass: `${utility}-(${property})`,
              }),
            }}
          />
        </div>
      </div>
      <p>
        Это просто сокращение, {" "}
        <code>
          {utility}-[{dataType ? `${dataType}:` : null}var(<var>{"<custom-property>"}</var>)]
        </code>{" "}
        которое автоматически добавляет функцию <code>var()</code>.
      </p>
    </>
  );
}

export function ResponsiveDesign({
  property,
  properties,
  breakpoint = "md",
  defaultClass,
  featuredClass,
  element = "div",
  elementAttributes = {},
  children,
}: {
  property: string;
  properties: Array<string>;
  breakpoint?: keyof typeof screens;
  defaultClass?: string;
  featuredClass: string;
  element?: string;
  elementAttributes?: Record<string, string>;
  children?: React.ReactNode;
}) {
  return (
    <>
      <p>
        {properties ? (
          <>
            Префикс утилит{" "}
            {properties.map((name, index) => (
              <Fragment key={index}>
                {properties.length > 1 && index === properties.length - 1 ? " and " : ""}
                <code>{name}</code>
                {index === properties.length - 1 || properties.length < 3 ? "" : ","}
              </Fragment>
            ))}{" "}
          </>
        ) : (
          <>
            Префикс {startsWithVowel(property) ? "an" : "a"} <code>{property}</code> утилита{" "}
          </>
        )}
        с вариантом контрольной точки, например <code>{breakpoint}:</code>, чтобы применить утилиту только при
        размерах экрана {screens[breakpoint]}{" "} и выше:
      </p>
      {children || (
        <div>
          <div className="not-prose">
            <CodeExample
              example={{
                lang: "html",
                code: htmlSnippet({
                  elementName: element,
                  attributes: {
                    class: `${defaultClass} ${breakpoint}:${featuredClass} ...`,
                    ...elementAttributes,
                  },
                  featuredClass: `${breakpoint}:${featuredClass}`,
                }),
              }}
            />
          </div>
        </div>
      )}
      <p>
        Подробнее об использовании вариантов читайте в <a href="/docs/hover-focus-and-other-states">документации по вариантам</a>.
      </p>
    </>
  );
}

export function TargetingSpecificStates({
  property,
  defaultClass,
  featuredClass,
  variant = "hover",
  element = "div",
  elementAttributes = {},
  children,
}: {
  property: string;
  variant?: string;
  defaultClass?: string;
  featuredClass: string;
  element?: string;
  elementAttributes?: Record<string, string>;
  children?: React.ReactNode;
}) {
  return (
    <>
      <p>
        Префикс {startsWithVowel(property) ? "an" : "a"} <code>{property}</code> утилиты с вариантом, например{" "}
        <code>{variant}:*</code>, чтобы применить утилиту только в этом состоянии:
      </p>
      {children || (
        <div>
          <div className="not-prose">
            <CodeExample
              example={{
                lang: "html",
                code: htmlSnippet({
                  elementName: element,
                  attributes: {
                    class: `${defaultClass} ${variant}:${featuredClass} ...`,
                    ...elementAttributes,
                  },
                  featuredClass: `${variant}:${featuredClass}`,
                }),
              }}
            />
          </div>
        </div>
      )}
      <p>
        Подробнее об использовании вариантов читайте в <a href="/docs/hover-focus-and-other-states">документации по вариантам</a>.
      </p>
    </>
  );
}

export function CustomizingYourTheme({
  utility,
  utilities,
  name,
  themeKey,
  customName,
  customValue,
  customCSS,
  includeSpacingNote = false,
  element = "div",
  elementAttributes = {},
  children,
}: {
  utility: string;
  utilities?: Array<string>;
  name: string;
  themeKey?: string;
  customName: string;
  customValue?: string;
  customCSS?: string;
  includeSpacingNote?: boolean;
  element?: string;
  elementAttributes?: Record<string, string>;
  children?: React.ReactNode;
}) {
  return (
    <>
      <p>
        Используйте переменные темы <code>--{themeKey || utility || utilities![0]}-*</code> для настройки утилит {name}{" "}
        в вашем проекте:
      </p>
      <div>
        <div className="not-prose">
          <CodeExample
            example={{
              lang: "css",
              code:
                customCSS ||
                css`
                  @theme {
                    --${themeKey || utility}-${customName}: ${customValue}; /* [!code highlight] */
                  }
                `,
            }}
          />
        </div>
      </div>
      {utilities ? (
        <p>
          Теперь утилиты типа{" "}
          {utilities.map((name, index) => (
            <Fragment key={index}>
              {utilities.length > 1 && index === utilities.length - 1 ? " and " : ""}
              <code>
                {name}-{customName}
              </code>
              {index === utilities.length - 1 || utilities.length < 3 ? "" : ","}
            </Fragment>
          ))}{" "}
          можно использовать в вашей разметке:
        </p>
      ) : (
        <p>
          Теперь утилиту{" "}
          <code>
            {utility}-{customName}
          </code>{" "}
          можно использовать в вашей разметке:
        </p>
      )}
      <div>
        <div className="not-prose">
          <CodeExample
            example={{
              lang: "html",
              code: htmlSnippet({
                elementName: element,
                attributes: {
                  class: `${utility || utilities![0]}-${customName}`,
                  ...elementAttributes,
                },
                featuredClass: `${utility || utilities![0]}-${customName}`,
              }),
            }}
          />
        </div>
      </div>
      {includeSpacingNote && (
        <>
          <p>
            Утилиты{" "}
            <code>
              {utility}-<var>{"<number>"}</var>
            </code>{" "}
            управляются переменной темы <code>--spacing</code>, которую вы также можете настроить:
          </p>
          <div>
            <div className="not-prose">
              <CodeExample
                example={{
                  lang: "css",
                  code: css`
                    @theme {
                      --spacing: 1px; /* [!code highlight] */
                    }
                  `,
                }}
              />
            </div>
          </div>
        </>
      )}
      {children}
      {includeSpacingNote ? (
        <p>
          Подробнее о настройке шкалы интервалов читайте в{" "}
          <a href="/docs/theme#customizing-your-theme">документации темы</a>.
        </p>
      ) : (
        <p>
          Подробнее о настройке темы читайте в{" "}
          <a href="/docs/theme#customizing-your-theme">документации темы</a>.
        </p>
      )}
    </>
  );
}

export function CustomizingYourSpacingScale({ utility, utilities }: { utility: string; utilities: Array<string> }) {
  utilities = utilities || [utility];

  return (
    <>
      <p>
        Утилиты{" "}
        {utilities.map((name, index) => (
          <Fragment key={index}>
            {utilities.length > 1 && index === utilities.length - 1 ? " and " : ""}
            <code>
              {name}-<var>{"<number>"}</var>
            </code>
            {index === utilities.length - 1 || utilities.length < 3 ? "" : ","}
          </Fragment>
        ))}{" "}
        управляются переменной темы <code>--spacing</code>, которую можно настроить в вашей собственной теме:
      </p>
      <div>
        <div className="not-prose">
          <CodeExample
            example={{
              lang: "css",
              code: css`
                @theme {
                  --spacing: 1px; /* [!code highlight] */
                }
              `,
            }}
          />
        </div>
      </div>
      <p>
        Подробнее о настройке шкалы интервалов читайте в <a href="/docs/theme">документации по переменным темы</a>.
      </p>
    </>
  );
}

export function CustomizingYourThemeColors({
  utility,
  utilities,
  element = "div",
  elementAttributes = {},
}: {
  utility: string;
  utilities?: Array<string>;
  element?: string;
  elementAttributes?: Record<string, string>;
}) {
  return (
    <CustomizingYourTheme
      themeKey="color"
      name="color"
      utility={utility}
      utilities={utilities}
      customName="regal-blue"
      customValue="#243c5a"
      element={element}
      elementAttributes={elementAttributes}
    />
  );
}
