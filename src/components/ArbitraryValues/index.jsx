import { highlightedCode } from './snippet.html?highlight'

export function ArbitraryValues({
  property,
  name,
  defaultClass,
  featuredClass,
  hasTheme = true,
  element = 'div',
  children,
}) {
  const nameOrProperty = name ? (
    name
  ) : (
    <>
      <code>{property}</code> value
    </>
  )

  return (
    <>
      {hasTheme ? (
        <p>
          Если вам нужно использовать одноразовое {nameOrProperty}, которое не имеет смысла включать в вашу тему,
          используйте квадратные скобки, чтобы сгенерировать свойство на лету, используя любое произвольное значение.
        </p>
      ) : (
        <p>
          Если вам нужно использовать одноразовое {nameOrProperty}, которое не включено в Tailwind по умолчанию,
          используйте квадратные скобки, чтобы сгенерировать свойство на лету, используя любое произвольное значение.
        </p>
      )}
      {children || (
        <pre className="language-html">
          <code
            className="language-html"
            dangerouslySetInnerHTML={{
              __html: highlightedCode
                .replace(/{element}/g, element)
                .replace('{defaultClass} ', defaultClass ? `${defaultClass} ` : '')
                .replace('{featuredClass}', featuredClass),
            }}
          />
        </pre>
      )}
      <p>
        Узнайте больше о поддержке произвольных значений в документации по{' '}
        <a href="/docs/adding-custom-styles#using-arbitrary-values">произвольным значениям</a>.
      </p>
    </>
  )
}
