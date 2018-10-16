const {parse} = require('querystring');

export const state = () => ({
  user: {},
  registerErrors: {},
});

export const mutations = {
  STORE_USER(state, user) {
    state.user = user;
    console.log(user);
  },
  STORE_REGISTER_ERRORS(state, errors) {
    state.registerErrors = errors;
  },
};

export const actions = {
  async createUser({commit}, form) {
    try {
      console.log(form);
      const response = await this.$axios({method: "POST", url: `http://vue.ssr/api/registered_users`, data: form, responseType: 'json',});
      // Parse 'n process
      const user = response.data;
      commit("STORE_USER", user);
      commit("STORE_REGISTER_ERRORS", {});

    } catch (error) {
      console.log('nok');
      commit("STORE_REGISTER_ERRORS", error.response.data);
    }
  },
};
