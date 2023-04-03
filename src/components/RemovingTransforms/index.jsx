import { highlightedCode } from './snippet.html?highlight'

export function RemovingTransforms({ defaultClass, element = 'div', children }) {
  return (
    <>
      <p>
        Чтобы удалить сразу все преобразования элемента, используйте утилиту <code>transform-none</code>:
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
        Это может быть полезно, когда вы хотите удалить преобразования по условию,
        например, при наведении или в определенной контрольной точке.
      </p>
    </>
  )
}
