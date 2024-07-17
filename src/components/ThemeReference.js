import defaultConfig from 'defaultConfig'

const descriptions = {
  screens: 'Адаптивные контрольные точки вашего проекта',
  colors: 'Цветовая палитра вашего проекта',
  spacing: 'Масштаб интервалов вашего проекта',
  container: 'Конфигурация плагина `container`',
  inset: 'Значения свойств `top`, `right`, `bottom` и `left`',
  keyframes: 'Значения ключевых кадров, используемые в плагине `animation`',
  textColor: 'Значения свойства `color`',
  ...Object.fromEntries(
    [
      'placeholderColor',
      'placeholderOpacity',
      'rotate',
      'scale',
      'space',
      'textOpacity',
      'translate',
      'backdropBlur',
      'backdropBrightness',
      'backdropContrast',
      'backdropGrayscale',
      'backdropHueRotate',
      'backdropInvert',
      'backdropOpacity',
      'backdropSaturate',
      'backdropSepia',
      'blur',
      'brightness',
      'borderOpacity',
      'borderWidth',
      'boxShadowColor',
      'contrast',
      'divideColor',
      'divideOpacity',
      'divideWidth',
      'dropShadow',
      'fill',
      'grayscale',
      'hueRotate',
      'invert',
      'gradientColorStops',
      'ringColor',
      'ringOffsetColor',
      'ringOffsetWidth',
      'ringOpacity',
      'ringWidth',
      'rotate',
      'saturate',
      'scale',
      'sepia',
      'skew',
    ].map((pluginName) => [pluginName, `Значения для плагина \`${pluginName}\``])
  ),
}

export function ThemeReference() {
  return (
    <div className="prose prose-slate dark:prose-dark">
      <table>
        <thead>
          <tr>
            <th>Ключ</th>
            <th>Описание</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(defaultConfig.theme).map((key) => (
            <tr key={key}>
              <td>
                <code>{key}</code>
              </td>
              <td>
                {descriptions[key]
                  ?.split(/`([^`]+)`/)
                  .map((segment, i) =>
                    i % 2 === 0 ? segment : <code key={i}>{segment}</code>
                  ) || (
                  <>
                    Значения для свойств{' '}
                    <code>
                      {key.replace(/([a-z])([A-Z])/g, (_m, p1, p2) => `${p1}-${p2.toLowerCase()}`)}
                    </code>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
