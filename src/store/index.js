import { createStore } from 'vuex'
import axios from 'axios';

// Create a new store instance.
const store = createStore({
    state() {
        return {
            MENU_LIST: {
                DEPTH1: [],
                DEPTH2: [],
            },
            BRAND_LIST: []
        }
    },
    mutations: {
        MUTATION_MENU_LIST(state, payload) {
            console.log('payload', payload)
            state.MENU_LIST.DEPTH1 = payload
        },
        MUTATION_MENU_LIST2(state, payload) {
            console.log('payload', payload)
            state.MENU_LIST.DEPTH2 = payload
        },
        MUTATION_BRAND_LIST(state, payload) {
            console.log('payload', payload)
            state.BRAND_LIST = payload
        }
    },
    actions: {
        ACTION_MENU_LIST({ commit }, params) {
            axios
                .post(`${import.meta.env.VITE_API_URL}/cate.php`, params)
                .then(function (response) {
                    console.log(response?.data);
                    if (params?.parentCode) {
                        commit('MUTATION_MENU_LIST2', response?.data)
                    } else {
                        commit('MUTATION_MENU_LIST', response?.data)
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        ACTION_BRAND_LIST({ commit }, params) {
            axios
                .post(`${import.meta.env.VITE_API_URL}/goods.php`, params)
                .then(function (response) {
                    console.log(response?.data);
                    commit('MUTATION_BRAND_LIST', response?.data)
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    },
})


export default store
// const app = createApp({ /* your root component */ })

// Install the store instance as a plugin
// app.use(store)