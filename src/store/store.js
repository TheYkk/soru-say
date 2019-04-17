import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    ders: {}
  },
  mutations: {
    change(state, ders) {
      state.ders = ders;
    },
    dersArti(state, dersAdi) {
      state.ders[dersAdi]++;
    }
  },
  getters: {
    dersler: state => state.ders
  }
});
