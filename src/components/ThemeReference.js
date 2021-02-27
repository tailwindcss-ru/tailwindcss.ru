import { defaultConfig } from '@/utils/defaultConfig'

const descriptions = {
  screens: "Адаптивные контрольные точки Вашего проекта",
  colors: "Цветовая палитра вашего проекта",
  spacing: "Шкала интервалов вашего проекта",
  container: 'Конфигурация плагина `container`',
  inset: 'Значения свойств `top`, `right`, `bottom` и `left`',
  placeholderColor: 'Значения для плагина `placeholderColor`',
  placeholderOpacity: 'Значения для плагина `placeholderOpacity`',
  rotate: 'Значения для плагина `rotate`',
  scale: 'Значения для плагина `scale`',
  skew: 'Значения для плагина `skew`',
  space: 'Значения для плагина `space`',
  textOpacity: 'Значения для плагина `textOpacity`',
  translate: 'Значения для плагина `translate`',
}

export function ThemeReference() {
  return (
    <div className="prose">
      <table>
        <thead>
          <tr>
            <th>Key</th>
            <th>Description</th>
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
