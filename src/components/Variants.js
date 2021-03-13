import { defaultConfig } from '@/utils/defaultConfig'
import { joinWithAnd } from '@/utils/joinWithAnd'
import { ConfigSample } from '@/components/ConfigSample'

export function Variants({ plugin, name }) {
  const variants = defaultConfig.variants[plugin] || ['responsive']
  name = name || plugin.replace(/([a-z])([A-Z])/g, (m, p1, p2) => `${p1} ${p2.toLowerCase()}`)
  const extraVariants = ['responsive', 'hover', 'focus', 'active', 'group-hover']
    .filter((x) => !variants.includes(x))
    .slice(0, 2)

  const opening = `По умолчанию, ${
    variants.length
      ? `только ${joinWithAnd(variants).replace('dark', 'темный режим <em>(если включен)</em>')}`
      : 'нет'
  } варианты создаются для утилит ${name}.`

  return (
    <div className="prose">
      <p dangerouslySetInnerHTML={{ __html: opening }} />
      <p>
      Вы можете контролировать, какие варианты создаются для утилит {name} для изменения свойства{' '}
        <code>{plugin}</code> в разделе <code>variants</code> Вашего файла конфигурации{' '}
        <code>tailwind.config.js</code>.
      </p>
      <p>
      Например, эта конфигурация {variants.length > 0 ? 'также ' : ''}будет генерировать варианты{' '}
        {joinWithAnd(extraVariants)}:
      </p>
      <ConfigSample path="variants.extend" before="..." add={{ [plugin]: extraVariants }} />
    </div>
  )
}
