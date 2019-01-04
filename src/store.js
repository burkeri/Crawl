import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    info: {
      user: null,
      token: null,
      isUserLoggedIn: false,
      isCrawlActive: false
    }
  },
  mutations: {
    setInfo(state, info) {
      state.info = info;
    },
    setToken(state, token) {
      state.info.token = token;
      if (token) {
        state.info.isUserLoggedIn = true;
      } else {
        state.info.isUserLoggedIn = false;
      }
      const parsed = JSON.stringify(state.info);
      localStorage.setItem("info", parsed);
    },
    setUser(state, user) {
      state.info.user = user;
      const parsed = JSON.stringify(state.info);
      localStorage.setItem("info", parsed);
    }
  },
  actions: {
    setInfo({ commit }, info) {
      commit("setInfo", info);
    },
    setToken({ commit }, token) {
      commit("setToken", token);
    },
    setUser({ commit }, user) {
      commit("setUser", user);
    }
  }
});
