export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'chat',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  loading: { color: '#007bff', height: '3px', throttle: 0 },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['ant-design-vue/dist/antd.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '@/plugins/antd-ui', ssr: false }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [{ path: '~/components', pathPrefix: false }],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    ['@nuxtjs/dotenv', { filename: '.env' }]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',

    '@nuxtjs/apollo'
  ],

  apollo: {
    clientConfigs: {
      default: '~/plugins/apollo-config.js'
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  router: {
    middleware: ['auth'],
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      }
      return { x: 0, y: 0 }
    },
    linkActiveClass: '_on',
    linkExactActiveClass: '_exact',
    extendRoutes(routes, resolve) {
      routes.forEach((route) => {
        if (route.name === 'chat') {
          route.path = '/messages/:id(\\d+)'
        }
      })
    }
  }
}
