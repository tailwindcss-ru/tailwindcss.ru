import { defaultConfig } from '@/utils/defaultConfig'
import { ConfigSample } from '@/components/ConfigSample'

const variantListInverted = Object.entries(defaultConfig.variants).reduce(
  (reduced, [plugin, variants]) => {
    variants.forEach((variant) => {
      if (reduced[variant]) {
        reduced[variant].push(plugin)
      } else {
        reduced[variant] = [plugin]
      }
    })
    return reduced
  },
  {}
)

export function VariantEnabledList({ variant }) {
  if (!variantListInverted[variant]) {
    return (
      <p>
        <strong>
          По умолчанию вариант <code>{variant}</code> не включен ни для каких основных плагинов
        </strong>
        .
      </p>
    )
  }

  return (
    <>
      <p>
        По умолчанию вариант <code>{variant}</code> включен для следующих основных подключаемых модулей:
      </p>

      <ul>
        {variantListInverted[variant].map((plugin) => (
          <li key={plugin}>
            <code>{plugin}</code>
          </li>
        ))}
      </ul>
    </>
  )
}
