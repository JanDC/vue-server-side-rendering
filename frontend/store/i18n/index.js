export const state = () => ({
  locales: ['nl', 'en'],
  locale: 'nl'
});

export const mutations = {
  SET_LANG(state, locale) {
    console.log(`taal in store: ${locale}`);
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  }
};
