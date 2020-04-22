
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '"personal site"',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
      { hid: 'description', name: 'description', content: process.env.npm_package_description || 'Oh hi, this is Anna Erdiawan personal site. You can call me Erdi. Live in Yogyakarta, i am Web developer that interested with UI and UX.' }
    ],
    link: [
      { rel: 'shortcut icon', type: 'image/svg+xml', href: 'favicon.svg?v=1' },
      { rel: 'shortcut icon', type: 'image/svg+xml', href: 'favicon.svg' },
      { rel: 'mask-icon', href: 'favicon.svg', color: '#ffffff' },
      { rel: 'apple-touch-icon', sizes: '512x512', href: 'favicon.png?v=1' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { 
    color: '#51e3d4' 
  },
  /*
  ** Global CSS
  */
 css: [{ src: '~/assets/sass/style.sass', lang: 'sass' }],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/ga.js', mode: 'client' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  // layoutTransition: {
  //   name: 'layout',
  //   mode: 'out-in'
  // },
  // pageTransition: {
  //   name: 'page',
  //   mode: 'out-in',
  //   beforeEnter (el) {
  //     console.log('Before enter...');
  //   }
  // },
  generate: {
    fallback: true
  },
  pwa: {
    manifest: {
      name: 'erdiawan.com',
      short_name: "Erdiawan Anna",
      lang: 'en',
      description: "Anna Erdiawan Personal Site",
    }
  }
}