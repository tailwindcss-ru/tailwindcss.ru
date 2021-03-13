import { ConfigSample } from '@/components/ConfigSample'
import { castArray } from '@/utils/castArray'
import { joinWithAnd } from '@/utils/joinWithAnd'

export function Disabling({ plugin, name }) {
  const plugins = castArray(plugin)
  name = name || plugin.replace(/([a-z])([A-Z])/g, (m, p1, p2) => `${p1} ${p2.toLowerCase()}`)

  return (
    <div className="prose">
      <p>
      Если Вы не планируете использовать в своем проекте утилиты для изменения {name}, Вы можете полностью отключить их, установив для {' '}
        <span
          dangerouslySetInnerHTML={{
            __html: joinWithAnd(plugins.map((p) => `<code>${p}</code>`)),
          }}
        />{' '}
        {plugins.length > 1 ? 'характеристики' : 'свойство'} значение <code>false</code> в разделе{' '}
        <code>corePlugins</code> Вашего файла конфигурации:
      </p>

      <ConfigSample
        path="corePlugins"
        before="..."
        add={plugins.reduce((acc, cur) => ({ ...acc, [cur]: false }), {})}
      />
    </div>
  )
}
