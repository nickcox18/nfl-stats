import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    players: [],
  },
  mutations: {
    SAVE_PLAYERS(state, players) {
      state.players = players;
    },
  },
  actions: {
    loadPlayers({ commit }, payload) {
      axios.get(`https://api.fantasy.nfl.com/v1/players/stats?statType=seasonStats&season=${payload.season}&week=${payload.week}&format=json`).then((result) => {
        commit('SAVE_PLAYERS', result.data.players);
      }).catch((error) => {
        throw new Error(`API ${error}`);
      });
    },
  },
  modules: {
  },
});
