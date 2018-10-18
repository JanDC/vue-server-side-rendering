const pkg = require('./package');
const dotEnv = require('dotenv').config({path: '../.env'});
const bodyParser = require('body-parser');

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
    ['@nuxtjs/dotenv', {path: '../.env'}],
  ],

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: dotEnv.BASE_URL,
    browserBaseURL: dotEnv.BASE_URL,
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
    vendor: ['vue-i18n'],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
};
