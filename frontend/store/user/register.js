import {getField, updateField} from 'vuex-map-fields';

export const state = () => ({
  user: {},
  errors: {},
  success: null,
  form: {
    firstname: '',
    lastname: '',
    sex: '',
    birthday: null,
    email: '',
  },
});

export const mutations = {
  updateField,
  STORE_USER(state, user) {
    state.user = user;
  },
  STORE_FORM(state, form) {
    state.form = form;
  },
  STORE_ERRORS(state, messages) {
    state.errors = messages;
  },
  STORE_SUCCESS(state, messages) {
    state.success = messages;
  },
};

export const getters = {
  getField
};

export const actions = {
  async createUser({commit}, form) {
    try {
      const response = await this.$axios({
        method: "POST",
        url: `http://vue.ssr/api/registered_users`,
        data: form,
        responseType: 'json',
      });

      const user = response.data;
      commit("STORE_USER", user);
      commit("STORE_SUCCESS", {message: this.app.i18n.t('welcome')});
      commit("STORE_ERRORS", {});
    } catch (error) {
      commit("STORE_FORM", form);
      console.log(error);
      commit("STORE_ERRORS", error.response.data);
      commit("STORE_USER", {});
      commit("STORE_SUCCESS", null);
    }
  },
};
