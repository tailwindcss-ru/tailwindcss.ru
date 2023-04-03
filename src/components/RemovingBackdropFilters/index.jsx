import { highlightedCode } from './snippet.html?highlight'

export function RemovingBackdropFilters({ defaultClass, element = 'div', children }) {
  return (
    <>
      <p>
        Чтобы удалить сразу все фоновые фильтры для элемента, используйте утилиту{' '}
        <code>backdrop-filter-none</code>:
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
        Это может быть полезно, когда вы хотите условно удалить фоновые фильтры,
        например, при наведении или в определенной контрольной точке.
      </p>
    </>
  )
}
