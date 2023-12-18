import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    {
      'border-base': 'border-$c-border',
      'border-dark': 'border-$c-border-dark',
      'border-strong': 'border-$c-text-base',
      'border-bg-base': 'border-$c-bg-base',

      // background
      'bg-base': 'bg-$c-bg-base',
      'bg-border': 'bg-$c-border',
      'bg-active': 'bg-$c-bg-active',
      'bg-secondary': 'bg-$c-text-secondary',
      'bg-secondary-light': 'bg-$c-text-secondary-light',
      'bg-card': 'bg-$c-bg-card',
      'bg-code': 'bg-$c-bg-code',
      'bg-dm': 'bg-$c-bg-dm',

      // text colors
      'text-base': 'text-$c-text-base',
      'text-dark': 'text-black dark:text-white',
      'text-code': 'text-$c-text-code',
      'text-inverted': 'text-$c-bg-base',
      'text-secondary': 'text-$c-text-secondary',
      'text-secondary-light': 'text-$c-text-secondary-light',

      // buttons
      'btn-base': 'cursor-pointer disabled:pointer-events-none disabled:bg-$c-bg-btn-disabled disabled:text-$c-text-btn-disabled',
      'btn-danger': 'btn-base px-4 py-2 rounded text-white bg-$c-danger hover:bg-$c-danger-active',

      // input
      'input-base-focus': 'focus:outline-none',
      'input-base-disabled': 'disabled:pointer-events-none disabled:bg-gray-500/5 disabled:text-gray-500/50',
      'input-base': 'p2 rounded w-full bg-transparent border border-dark input-base-focus input-base-disabled',
      'input-error': 'border-$c-error focus:(outline-offset-0 outline-$c-error outline-1px)',

      'link': '!text-gray-400 dark:!text-gray-300 hover:(!text-gray-700 dark:!text-gray-200) cursor-pointer font-light',
    },
  ],
  theme: {
    fontFamily: {
      mono: 'Fira Code',
      light: 'Fira Code Light',
    },
  },
  presets: [
    presetUno({
      attributifyPseudo: true,
    }),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      extraProperties: {
        'color': 'inherit',
        // Avoid crushing of icons in crowded situations
        'min-width': '1.2em',
      },
    }),
    presetTypography(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
