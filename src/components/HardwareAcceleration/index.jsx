import { highlightedCode } from './snippet.html?highlight'

export function HardwareAcceleration({ defaultClass, element = 'div', children }) {
  return (
    <>
      <p>
        Если ваш переход работает лучше при рендеринге с помощью графического процессора,
        а не центрального процессора, вы можете принудительно ускорить аппаратное ускорение,
        добавив утилиту <code>transform-gpu</code>:
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
        Используйте <code>transform-cpu</code>, чтобы принудительно вернуть данные ЦП,
        если вам нужно отменить это условно.
      </p>
    </>
  )
}
