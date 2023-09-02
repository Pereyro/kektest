import { createStore } from 'vuex';

const initialState = {
  isAuthenticated: false,
};

export default createStore({
  state: {
    isAuthenticated: localStorage.getItem('isAuthenticated') === 'true' || initialState.isAuthenticated,
  },
  mutations: {
    setAuthentication(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    },
  },
  actions: {
    checkAuthentication({ state }) {
      return state.isAuthenticated;
    },
    
    updateAuthentication({ commit }, isAuthenticated) {
      commit('setAuthentication', isAuthenticated);
    },

  },
  modules: {},
});
