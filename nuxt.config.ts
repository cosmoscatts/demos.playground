import 'vue-router'

export default defineNuxtConfig({
  app: {
    pageTransition: {
      name: 'slide',
      mode: 'out-in',
    },
    layoutTransition: {
      name: 'slide',
      mode: 'out-in',
    },
  },
  vue: {
    defineModel: true,
    propsDestructure: true,
  },
  modules: ['@vueuse/nuxt', '@unocss/nuxt', ['unplugin-icons/nuxt', {
    autoInstall: true,
    scale: 1,
    defaultClass: 'inline-block',
  }]],
  css: [
    '@unocss/reset/tailwind.css',
    'floating-vue/dist/style.css',
    '~/styles/vars.css',
    '~/styles/transition.css',
    '~/styles/dropdown.css',
    '~/styles/main.css',
  ],
  router: {
    options: {
      hashMode: true,
      scrollBehaviorType: 'smooth',
    },
  },
  imports: {
    dirs: [
      './composables/**',
    ],
    injectAtEnd: true,
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
})

declare module 'vue-router' {
  interface RouteMeta {
    frontmatter: any
  }
}
