import { createStore } from 'vuex';

export default createStore({
  state: {
    isAuthenticated: false,
  },
  mutations: {
    setAuthentication(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    },
  },
  actions: {
    updateAuthentication({ commit }, isAuthenticated) {
      commit('setAuthentication', isAuthenticated);
    },
  },
  modules: {},
});
