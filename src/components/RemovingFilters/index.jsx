import { highlightedCode } from './snippet.html?highlight'

export function RemovingFilters({ defaultClass, element = 'div', children }) {
  return (
    <>
      <p>
        Чтобы сразу удалить все фильтры для элемента, используйте утилиту <code>filter-none</code>:
      </p>
      {children || (
        <pre className="language-html">
          <code
            className="language-html"
            dangerouslySetInnerHTML={{
              __html: highlightedCode
                .replace(/{element}/g, element)
                .replace('{defaultClass} ', defaultClass ? `${defaultClass} ` : ''),
            }}
          />
        </pre>
      )}
      <p>
        Это может быть полезно, когда вы хотите удалить фильтры условно, например,
        при наведении или в определенной контрольной точке.
      </p>
    </>
  )
}
