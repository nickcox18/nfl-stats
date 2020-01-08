import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    players: [],
    isLoading: false,
    comparePlayerModal: false,
  },
  mutations: {
    SAVE_PLAYERS(state, players) {
      state.players = players;
    },
    SET_LOADING(state, isLoading) {
      state.isLoading = isLoading;
    },
    SET_COMPARE_PLAYER_MODAL(state, comparePlayerModal) {
      state.comparePlayerModal = comparePlayerModal;
    },
  },
  actions: {
    loadPlayers({ commit }, payload) {
      commit('SET_LOADING', true);
      axios.get(`https://api.fantasy.nfl.com/v1/players/stats?statType=seasonStats&season=${payload.season}&week=${payload.week}&position=${payload.position}&format=json`).then((result) => {
        commit('SAVE_PLAYERS', result.data.players);
        commit('SET_LOADING', false);
      }).catch((error) => {
        throw new Error(`API ${error}`);
      });
    },
    toggleComparePlayerModal({ commit }, payload) {
      commit('SET_COMPARE_PLAYER_MODAL', payload);
    },
  },
  modules: {
  },
});
