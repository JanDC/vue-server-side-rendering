module.exports = (ctx) => {
  return {
    parser: 'postcss-scss',
    sourceMap: true,
    plugins: {
      'autoprefixer': {},
      'cssnano': ctx.env === 'production' ? {preset: 'default'} : false,
      'postcss-preset-env': {},
    },
  }
};
