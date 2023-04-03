import { highlightedCode } from './snippet.html?highlight'

export function BreakpointsAndMediaQueries({
  defaultClass,
  featuredClass,
  element = 'div',
  children,
}) {
  return (
    <>
      <p>
        Вы также можете использовать модификаторы вариантов для таргетинга на медиа-запросы, такие как реагирующие
        контрольные точки, темный режим, предпочтения с уменьшенным движением и многое другое. Например,
        используйте <code>md:{featuredClass}</code>, чтобы применить утилиту <code>{featuredClass}</code> только
        на экранах среднего размера и выше.
      </p>
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
        Чтобы узнать больше, ознакомьтесь с документацией по{' '}
        <a href="/docs/responsive-design">адаптивному дизайну</a>,{' '}
        <a href="/docs/dark-mode">темному режиму</a> и{' '}
        <a href="/docs/hover-focus-and-other-states#media-queries">другим модификаторам медиазапросов</a>.
      </p>
    </>
  )
}
