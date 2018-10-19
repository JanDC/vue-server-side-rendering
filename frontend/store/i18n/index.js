import {DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES} from '@/constants/i18n'

export const state = () => ({
  locales: SUPPORTED_LANGUAGES,
  locale: DEFAULT_LANGUAGE,
});

export const mutations = {
  SET_LANG(state, locale) {
    console.log(`taal in store: ${locale}`);
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  }
};
