// store.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// Assume we have a universal API that returns Promises
// and ignore the implementation details
//import { fetchItem } from './api'
import axios from 'axios';

export function createStore() {
    return new Vuex.Store({
        state: {
            title: null
        },
        getters: {
            getTitle: (state) => {
                return state.title;
            }
        },
        actions: {
            fetchTitle({commit}, id) {
                // return the Promise via `store.dispatch()` so that we know
                // when the data has been fetched
                return axios
                    .get("http://localhost:8080/api/title")
                    .then(response => {
                        commit('setTitle', {id, title: response.data.title})
                    });
            }
        },
        mutations: {
            setTitle(state, {id, title}) {
                state.title = title;
            }
        }
    })
}