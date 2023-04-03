import { Editor } from '@/components/Editor'
import { highlightedCode } from './snippet.js?highlight=diff-js'

export function CustomizePluginColors({ name, configKey, children, learnMore = true }) {
  return (
    <>
      <p>
        По умолчанию Tailwind делает всю{' '}
        <a href="/docs/customizing-colors#default-color-palette">цветовую палитру по умолчанию</a> доступной
        в виде цветов {name}. Вы можете{' '}
        <a href="/docs/colors#customizing">настроить свою цветовую палитру</a>, отредактировав{' '}
        <code>theme.colors</code> или <code>theme.extend.colors</code>{' '}
        в файле <code>tailwind.config.js</code>.
      </p>
      {children || (
        <Editor filename="tailwind.config.js">
          <pre className="language-diff-js">
            <code
              className="language-diff-js"
              dangerouslySetInnerHTML={{ __html: highlightedCode }}
            />
          </pre>
        </Editor>
      )}
      <p>
        Кроме того, вы можете настроить только цвета {name}, отредактировав{' '}
        <code>theme.{configKey}</code> или <code>theme.extend.{configKey}</code>{' '}
        в своем файле <code>tailwind.config.js</code>.
      </p>
      {learnMore && (
        <p>
          Узнайте больше о настройке темы по умолчанию в документации по{' '}
          <a href="/docs/theme#customizing-the-default-theme">кастомизации темы</a>.
        </p>
      )}
    </>
  )
}
