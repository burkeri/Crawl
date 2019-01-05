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
      isCrawlActive: false,
      crawlInfo: {
        nextLocationCounter: 0,
        visitStage: 0
      },
      routeObj: null,
      userPosition: null
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
    },
    setUserPosition(state, userPosition) {
      state.info.userPosition = userPosition;
      const parsed = JSON.stringify(state.info);
      localStorage.setItem("info", parsed);
    },
    setRouteObj(state, routeObj) {
      state.info.routeObj = routeObj;
      if (routeObj) {
        state.info.isCrawlActive = true;
      } else {
        state.info.isCrawlActive = false;
      }
      const parsed = JSON.stringify(state.info);
      localStorage.setItem("info", parsed);
    },
    setCrawlInfo(state, crawlInfo) {
      if (state.info.isCrawlActive === true) {
        state.info.crawlInfo = crawlInfo;
      } else {
        state.info.crawlInfo = {
          nextLocationCounter: 0,
          visitStage: 0
        };
      }
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
    },
    setUserPosition({ commit }, userPosition) {
      commit("setUserPosition", userPosition);
    },
    setRouteObj({ commit }, routeObj) {
      commit("setRouteObj", routeObj);
    },
    setCrawlInfo({ commit }, crawlInfo) {
      commit("setCrawlInfo", crawlInfo);
    }
  }
});
