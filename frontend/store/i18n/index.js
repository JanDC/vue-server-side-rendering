import {DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES} from '@/constants/i18n'

export const state = () => ({
  locales: SUPPORTED_LANGUAGES,
  locale: DEFAULT_LANGUAGE,
});

export const getters = {
  locale: state => state.locale
};

export const actions = {
  setLocale ({ commit }, { locale }) {
    commit('SET_LOCALE', { locale })
  }
};

export const mutations = {
  SET_LOCALE(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  }
};
