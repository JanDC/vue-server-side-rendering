const pkg = require('./package');
const bodyParser = require('body-parser');
require('dotenv').config();

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: pkg.description}
    ],
    link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#fff'},

  /*
  ** Global CSS
  */
  css: ['@/assets/scss/main.scss', '@/assets/scss/bootstrap.scss'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: '~/plugins/datepicker.js', ssr: false},
    '~/plugins/i18n.js',
  ],

  /*
  ** Enable express.js middleware
   */
  serverMiddleware: [
    bodyParser.urlencoded({extended: true}),
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '~/modules/router.js',
    ['@nuxtjs/dotenv', {path: '../'}],
  ],

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: process.env.BASE_URL,
    browserBaseURL: process.env.BASE_URL,
  },

  /*
  ** Router configuration
   */
  router: {
    middleware: 'i18n'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
};
