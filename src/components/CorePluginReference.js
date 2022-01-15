import corePluginsWithExamples from 'utilities?examples'

const descriptions = {
  preflight: "Tailwind стили base/reset",
  container: 'Компонент `container`',
  accessibility: 'Утилиты `sr-only` и `not-sr-only`',
  backgroundOpacity: 'Утилиты opacity `background-color`, такие как `bg-opacity-25`',
  borderOpacity: 'Утилиты opacity `border-color`, такие как `border-opacity-25`',
  divideColor: 'Утилиты между элементами `border-color`, например, `divide-gray-500`',
  divideWidth: 'Утилиты между элементами `border-width`, например, `divide-x-2`',
  placeholderColor: 'Утилиты placeholder `color`, такие как `placeholder-red-600`',
  placeholderOpacity: 'Утилиты placeholder `color`, такие как `placeholder-opacity-25`',
  space: 'Утилиты "space-between", например, `space-x-4`',
  transform: 'Утилиты `transform` (для включения функций преобразования)',
}

export function CorePluginReference() {
  return (
    <div className="prose prose-slate dark:prose-dark">
      <table>
        <thead>
          <tr>
            <th>Плагин Ядра</th>
            <th>Описание</th>
          </tr>
        </thead>
        <tbody>
          {corePluginsWithExamples
            .sort(({ plugin: a }, { plugin: b }) => {
              return a < b ? -1 : 1
            })
            .map(({ plugin, example }) => (
              <tr key={plugin}>
                <td>
                  <code>{plugin}</code>
                </td>
                <td>
                  {descriptions[plugin]
                    ?.split(/`([^`]+)`/)
                    .map((segment, i) =>
                      i % 2 === 0 ? segment : <code key={i}>{segment}</code>
                    ) || (
                    <>
                      Утилиты{' '}
                      <code>
                        {plugin.replace(
                          /([a-z])([A-Z])/g,
                          (_m, p1, p2) => `${p1}-${p2.toLowerCase()}`
                        )}
                      </code>{' '}
                      такие как <code>{example}</code>
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
