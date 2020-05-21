
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '"personal site"',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      // { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || "Oh hi, this is Anna Erdiawan's personal site. I'm a Web developer interested in UI and UX."
      }
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
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    ['@nuxtjs/markdownit'],
  ],
  markdownit: {
    injected: true,
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://erdiawan.com',
    generate: true, // Enable me when using nuxt generate
    exclude: [
      '/covid/**'
    ],
    routes: [],
    routes: function() {
        const fs = require('fs')
        const path = require('path')
        return fs.readdirSync('./assets/content/blog').map(file => {
            return {
                route: `/blog/${path.parse(file).name}`, // Return the slug
                payload: require(`./assets/content/blog/${file}`),
            }
        })
    }
  },
  robots: {
    UserAgent: '*',
    Allow: '/',
    Sitemap: 'https://erdiawan.com/sitemap.xml'
  },
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
    },
    extendServer: app => {
      app.disable('x-powered-by')
    }
  },
  buildDir: 'build',
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
    fallback: true,
    routes: [
        '/',
        '/blog',
        '/blog/**',
        '/covid',
    ],
    routes: function() {
        const fs = require('fs')
        const path = require('path')
        return fs.readdirSync('./assets/content/blog').map(file => {
            return {
                route: `/blog/${path.parse(file).name}`, // Return the slug
                payload: require(`./assets/content/blog/${file}`),
            }
        })
    }
  },
  pwa: {
    manifest: {
      name: 'erdiawan.com - Anna Erdiawan Personal Site',
      short_name: "erdiawan.com",
      lang: 'en',
      dispplay: 'standalone',
      theme_color: '#474f85',
      scope: "/",
      start_url: "/?source=pwa",
      description: "Anna Erdiawan Personal Site",
      icons: [
          {
            src: "/icons/erdi48.png",
            sizes: "48x48",
            type: "image/png"
          },
          {
            src: "/icons/erdi72.png",
            sizes: "72x72",
            type: "image/png"
          },
          {
            src: "/icons/erdi96.png",
            sizes: "96x96",
            type: "image/png"
          },
          {
            src: "/icons/erdi144.png",
            sizes: "144x144",
            type: "image/png"
          },
          {
            src: "/icons/erdi168.png",
            sizes: "168x168",
            type: "image/png"
          },
          {
            src: "/icons/erdi192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/icons/erdi256.png",
            sizes: "256x256",
            type: "image/png"
          }
      ],
      shortcuts: [
          {
              name: "erdiawan.com - Anna Erdiawan Blog",
              short_name: "Anna Erdiawan Blog",
              description: "erdiawan.com - Anna Erdiawan Blog",
              url: "/blog?source=pwa",
              icons: [
                {
                    src: "/icons/erdi192.png",
                    sizes: "192x192",
                    type: "image/png"
                },
                {
                    src: "/icons/erdi256.png",
                    sizes: "256x256",
                    type: "image/png"
                }
              ]
          },
          {
            name: "erdiawan.com - COVID-19 Cases in Indonesia",
            short_name: "COVID-19 Cases in Indonesia",
            description: "erdiawan.com - COVID-19 Cases in Indonesia",
            url: "/covid?source=pwa",
            icons: [
              {
                src: "/icons/erdi192.png",
                sizes: "192x192",
                type: "image/png"
              },
              {
                src: "/icons/erdi256.png",
                sizes: "256x256",
                type: "image/png"
              }
            ]
        }
      ]
    }
  }
}
