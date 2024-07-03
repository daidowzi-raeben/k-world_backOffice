import { createStore } from 'vuex'
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();

// Create a new store instance.
const store = createStore({
    state() {
        return {
            TEST: {},
            MENU_LIST: {
                DEPTH1: [],
                DEPTH2: [],
            },
            BRAND_LIST: [],
            MEMBER: {
                LIST: []
            },
            TERM_LIST: {
                list: []
            },
            GOODS: {
                COLOR: [],
                TERM: {
                    delivery: {},
                    as: {},
                    exchange: {},
                    refund: {},
                }
            }
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
        },
        MUTATION_MEMBER_LIST(state, payload) {
            console.log('payload', payload)
            state.MEMBER.LIST = payload
        },
        MUTATION_TERM_LIST(state, payload) {
            console.log('payload', payload)
            state.TERM_LIST = payload
        },
        MUTATION_TERM_GOODS(state, payload) {
            console.log('payload', payload)
            state.GOODS.TERM = payload
        },
        MUTATION_COLOR_LIST(state, payload) {
            console.log('payload', payload)
            state.GOODS.COLOR = payload
            state.GOODS.COLOR.forEach((v, i) => {
                state.GOODS.COLOR[i]['check'] = false
                state.GOODS.COLOR[i]['color'] = state.GOODS.COLOR[i].color_code
            });
        },
        MUTATION_TEST(state, payload) {
            state.TEST = payload
        },
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
        },
        ACTION_MEMBER_ADD({ commit }, params) {
            axios
                .post(`${import.meta.env.VITE_API_URL}/login.php`, params)
                .then(function (response) {
                    console.log(response)
                    alert('등록되었습니다.')
                    // router.push('/user/list');
                    location.href = '/user/list'
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        ACTION_MEMBER_LIST({ commit }, params) {
            axios
                .post(`${import.meta.env.VITE_API_URL}/member.php`, params)
                .then(function (response) {
                    console.log(response)
                    commit('MUTATION_MEMBER_LIST', response?.data)
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        ACTION_TERM_LIST({ commit }, params) {
            axios
                .post(`${import.meta.env.VITE_API_URL}/term.php`, params)
                .then(function (response) {
                    console.log(response)
                    // alert('등록되었습니다.')
                    commit('MUTATION_TERM_LIST', response?.data)
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        ACTION_TERM_ADD({ commit }, params) {
            axios
                .post(`${import.meta.env.VITE_API_URL}/term.php`, params)
                .then(function (response) {
                    console.log(response)
                    alert('등록되었습니다.')
                    commit('MUTATION_TERM_LIST', response?.data)
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        ACTION_TERM_GOODS({ commit }, params) {
            axios
                .post(`${import.meta.env.VITE_API_URL}/term.php`, params)
                .then(function (response) {
                    console.log(response)
                    commit('MUTATION_TERM_GOODS', response?.data)
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        ACTION_COLOR_LIST({ commit }, params) {
            axios
                .post(`${import.meta.env.VITE_API_URL}/goods.php`, params)
                .then(function (response) {
                    console.log(response?.data);
                    commit('MUTATION_COLOR_LIST', response?.data)
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        ACTION_TEST({ commit }, params) {
            axios
                .post('/testApi', params)
                .then(function (response) {
                    console.log(response?.data);
                    commit('MUTATION_TEST', response?.data)
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
    },
})


export default store
// const app = createApp({ /* your root component */ })

// Install the store instance as a plugin
// app.use(store)