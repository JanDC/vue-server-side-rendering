const pkg = require('./package');
const dotEnv = require('dotenv').config({ path: '../.env' });
console.log(process.env.BASE_URL);
console.log(dotEnv.BASE_URL);

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
  css: ['@/assets/scss/main.scss','@/assets/scss/bootstrap.scss'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: '~/plugins/datepicker.js', ssr: false}
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
