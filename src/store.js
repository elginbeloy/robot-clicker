import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    money: 0,
    totalMoneyEarned: 0,
    mps: 0,
    mpc: 1
  },
  mutations: {
    clickRobot(state) {
      state.money += state.mpc;
      state.totalMoneyEarned += state.mpc;
    }
  }
})
