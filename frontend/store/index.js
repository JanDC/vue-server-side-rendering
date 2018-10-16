import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      req: ''
    }),
    actions: {
      nuxtServerInit({commit}, {req}) {
        // req.session is not defined
        console.log(req);
      },
    }
  })
}

export default createStore
