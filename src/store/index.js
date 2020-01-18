import Vue from "vue";
import Vuex from "vuex";
import app from "./modules/app";
import user from "./modules/user";
import orgUser from "./modules/org-user";
import state from "./state";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    app,
    user,
    orgUser
  },
  state,
  getters,
  mutations,
  actions
  // state: {},
  // mutations: {},
  // actions: {},
});
