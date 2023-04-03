import { highlightedCode } from './snippet.html?highlight'

export function HoverFocusAndOtherStates({
  property,
  utility,
  variant = 'hover',
  defaultClass,
  featuredClass,
  element = 'div',
  children,
}) {
  return (
    <>
      <p>
        Tailwind позволяет условно применять служебные классы в разных состояниях с помощью модификаторов вариантов.
        Например, используйте{' '}
        <code>
          {variant}:{featuredClass}
        </code>,{' '}
        чтобы применять утилиту <code>{featuredClass}</code> только при {variant}.
      </p>
      {children || (
        <pre className="language-html">
          <code
            className="language-html"
            dangerouslySetInnerHTML={{
              __html: highlightedCode
                .replace(/{element}/g, element)
                .replace('{defaultClass} ', defaultClass ? `${defaultClass} ` : '')
                .replace('{variant}', variant)
                .replace('{featuredClass}', featuredClass),
            }}
          />
        </pre>
      )}
      <p>
        Полный список всех доступных модификаторов состояния смотрите в документации{' '}
        <a href="/docs/hover-focus-and-other-states">Наведение, фокус и другие состояния</a>.
      </p>
    </>
  )
}
