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
  return (
    <>
      {hasTheme ? (
        <p>
          Если вам нужно использовать одноразовое {name ?? <code>{property}</code>}, которое не имеет смысла включать в вашу тему, используйте квадратные скобки для создания свойства на лету с использованием любого произвольного значения.
        </p>
      ) : (
        <p>
          Если вам нужно использовать одноразовое {name ?? <code>{property}</code>}, которое не включено в Tailwind по умолчанию. Используйте квадратные скобки для создания свойства на лету с использованием любого произвольного значения.
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
