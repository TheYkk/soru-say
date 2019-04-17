import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    ders: []
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
    dersler: state => state.ders,
    topla: state => {
      let total = 0;
      Object.values(state.ders).forEach(function (key) {
        total += key;
      });
      return total;
    }
    /*
    toplam: (state) => 
      let count = 0;
      this.$store.getters.dersler.map(ders => {
        count = count + ders;
      });
      return count;
    }*/
  }
});
