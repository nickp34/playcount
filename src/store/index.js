/* eslint no-shadow: off */

import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';

const vuexPersist = new VuexPersist({
  key: 'playcount-app',
  storage: window.localStorage,
});

Vue.use(Vuex);

const MIN_PLAYERS_PER_PLAY = 11;
const baseRoster = [
  {
    firstName: 'Paxton', lastName: 'Green', jerseyNumber: 14, groups: [], playStatus: 'out', playCount: 0, isPlaying: true,
  },
  {
    firstName: 'Grayson', lastName: 'Cardenas ', jerseyNumber: 4, groups: [], playStatus: 'out', playCount: 0, isPlaying: true,
  },
  {
    firstName: 'Brendan', lastName: 'Hughart', jerseyNumber: 5, groups: [], playStatus: 'out', playCount: 0, isPlaying: true,
  },
  {
    firstName: 'Brantley', lastName: 'Taylor ', jerseyNumber: 6, groups: [], playStatus: 'out', playCount: 0, isPlaying: true,
  },
  {
    firstName: 'Nolan', lastName: 'Bales', jerseyNumber: 10, groups: [], playStatus: 'out', playCount: 0, isPlaying: true,
  },
  {
    firstName: 'Kellen', lastName: 'Spearman', jerseyNumber: 16, groups: [], playStatus: 'out', playCount: 0, isPlaying: true,
  },
  {
    firstName: 'Keller', lastName: 'Green', jerseyNumber: 9, groups: [], playStatus: 'out', playCount: 0, isPlaying: true,
  },
  {
    firstName: 'Ole', lastName: 'Dimick', jerseyNumber: 45, groups: [], playStatus: 'out', playCount: 0, isPlaying: true,
  },
  {
    firstName: 'Cameron', lastName: 'Hang ', jerseyNumber: 20, groups: [], playStatus: 'out', playCount: 0, isPlaying: true,
  },
  {
    firstName: 'Jonah', lastName: 'Miller', jerseyNumber: 44, groups: [], playStatus: 'out', playCount: 0, isPlaying: true,
  },
  {
    firstName: 'Mason', lastName: 'Woodard', jerseyNumber: 60, groups: [], playStatus: 'out', playCount: 0, isPlaying: true,
  },
  {
    firstName: 'Rey', lastName: 'LaRosa ', jerseyNumber: 50, groups: [], playStatus: 'out', playCount: 0, isPlaying: true,
  },
  {
    firstName: 'Parker', lastName: 'Bass', jerseyNumber: 66, groups: [], playStatus: 'out', playCount: 0, isPlaying: true,
  },
  {
    firstName: 'Evan', lastName: 'Ouellette', jerseyNumber: 72, groups: [], playStatus: 'out', playCount: 0, isPlaying: true,
  },
  {
    firstName: 'Nolan', lastName: 'Pate', jerseyNumber: 55, groups: [], playStatus: 'out', playCount: 0, isPlaying: true,
  },
  {
    firstName: 'Jordan', lastName: 'Gillock', jerseyNumber: 18, groups: [], playStatus: 'out', playCount: 0, isPlaying: true,
  },
  {
    firstName: 'Brayden', lastName: 'Ayers', jerseyNumber: 65, groups: [], playStatus: 'out', playCount: 0, isPlaying: true,
  },
  {
    firstName: 'Henry', lastName: 'Tischhauser', jerseyNumber: 63, groups: [], playStatus: 'out', playCount: 0, isPlaying: true,
  },
  {
    firstName: 'Benjamin', lastName: 'Roman', jerseyNumber: 64, groups: [], playStatus: 'out', playCount: 0, isPlaying: true,
  },
  {
    firstName: 'Logan', lastName: 'Minick', jerseyNumber: 2, groups: [], playStatus: 'out', playCount: 0, isPlaying: true,
  },
  {
    firstName: 'Parker', lastName: 'Clark', jerseyNumber: 81, groups: [], playStatus: 'out', playCount: 0, isPlaying: true,
  },
  {
    firstName: 'Jackson', lastName: 'Conroy', jerseyNumber: 42, groups: [], playStatus: 'out', playCount: 0, isPlaying: true,
  },
  {
    firstName: 'Baylor', lastName: 'Moehring ', jerseyNumber: 80, groups: [], playStatus: 'out', playCount: 0, isPlaying: true,
  },
  {
    firstName: 'Cameron', lastName: 'Moore', jerseyNumber: 83, groups: [], playStatus: 'out', playCount: 0, isPlaying: true,
  },
  {
    firstName: 'Logan', lastName: 'Niessner', jerseyNumber: 84, groups: [], playStatus: 'out', playCount: 0, isPlaying: true,
  },
  {
    firstName: 'Jackson', lastName: 'Hughes ', jerseyNumber: 85, groups: [], playStatus: 'out', playCount: 0, isPlaying: true,
  },
  {
    firstName: 'Meyer', lastName: 'Johnson', jerseyNumber: 13, groups: [], playStatus: 'out', playCount: 0, isPlaying: true,
  },
  {
    firstName: 'Brandon', lastName: 'Hernandez', jerseyNumber: 8, groups: [], playStatus: 'out', playCount: 0, isPlaying: true,
  },
  {
    firstName: 'David', lastName: 'Cardenas', jerseyNumber: 19, groups: [], playStatus: 'out', playCount: 0, isPlaying: true,
  },
  {
    firstName: 'Jake', lastName: 'DeAngelo', jerseyNumber: 40, groups: [], playStatus: 'out', playCount: 0, isPlaying: true,
  },
];

const state = {
  games: [],
  plays: [],
  roster: baseRoster,
  settings: {
    minPlayersPerPlay: MIN_PLAYERS_PER_PLAY,
    showSuccess: false,
  },
};

const getters = {
  playingRoster(state) {
    return state.roster
      .filter((p) => p.isPlaying === true)
      .sort(({ jerseyNumber: a }, { jerseyNumber: b }) => a - b);
  },
  getMaxPlayers(state) {
    return state.settings.minPlayersPerPlay;
  },
  playersByPlayCount(state, getters) {
    return getters.playingRoster
      .sort(({ playCount: a }, { playCount: b }) => a - b)
      .sort(({ lastName: a }, { lastName: b }) => a - b);
  },
  playersIn(state, getters) {
    return getters.playingRoster.filter((p) => p.playStatus === 'in').sort(({ jerseyNumber: a }, { jerseyNumber: b }) => a - b);
  },
  playersOut(state, getters) {
    return getters.playingRoster.filter((p) => p.playStatus === 'out').sort(({ jerseyNumber: a }, { jerseyNumber: b }) => a - b);
  },
  plays(state) {
    return state.plays;
  },
  roster(state) {
    return state.roster
      .sort(({ jerseyNumber: a }, { jerseyNumber: b }) => a - b)
      .sort(({ lastName: a }, { lastName: b }) => a - b);
  },
  showSuccess(state) {
    return state.settings.showSuccess;
  },
  playCount(state) {
    return state.plays.length;
  },
};

const mutations = {
  clearStore(state) {
    state.roster = baseRoster;
    state.plays = [];
  },
  playerIn(state, player) {
    const p = state.roster.find((p) => p.jerseyNumber === player.jerseyNumber);
    p.playStatus = 'in';
  },
  playerOut(state, player) {
    const p = state.roster.find((p) => p.jerseyNumber === player.jerseyNumber);
    p.playStatus = 'out';
  },
  savePlay(state, players) {
    state.plays.push(players);

    const jerseysIn = players.map((p) => (p.jerseyNumber)).flat();

    for (let i = 0; i < state.roster.length; i += 1) {
      const p = state.roster[i];
      if (jerseysIn.indexOf(p.jerseyNumber) !== -1) {
        p.playCount += 1;
      }
    }
  },
  undoPlay(state) {
    if (state.plays.length > 0) {
      const players = state.plays[state.plays.length - 1];

      state.plays.pop();

      const jerseysIn = players.map((p) => (p.jerseyNumber)).flat();

      for (let i = 0; i < state.roster.length; i += 1) {
        const p = state.roster[i];
        if (jerseysIn.indexOf(p.jerseyNumber) !== -1) {
          p.playCount -= 1;
        }
      }
    }
  },
  clearField(state) {
    for (let i = 0; i < state.roster.length; i += 1) {
      state.roster[i].playStatus = 'out';
    }
  },
  setSuccess(state, toggle) {
    state.settings.showSuccess = toggle;
  },
  savePlayer(state, payload) {
    const p = state.roster.find((p) => p.jerseyNumber === payload.player.jerseyNumber);
    if (payload.action === 'firstName') {
      p.firstName = payload.value;
    }
    if (payload.action === 'lastName') {
      p.lastName = payload.value;
    }
    if (payload.action === 'jerseyNumber') {
      p.jerseyNumber = payload.value;
    }
    if (payload.action === 'isPlaying') {
      p.isPlaying = payload.value;
    }
  },
};

const actions = {
  savePlay({ commit, getters }) {
    commit('savePlay', getters.playersIn);
  },
  undoPlay({ commit }) {
    commit('undoPlay');
  },
  clearField({ commit }) {
    commit('clearField');
  },
  toggleSuccess({ commit }) {
    commit('setSuccess', true);
    setTimeout(() => {
      commit('setSuccess', false);
    }, 1000);
  },
  toggleNames({ commit }) {
    commit('toggleNames');
  },
  clearStore({ commit }) {
    commit('clearStore');
  },
  savePlayer({ commit }, payload) {
    commit('savePlayer', payload);
  },
};

const store = new Vuex.Store({
  actions,
  getters,
  mutations,
  state,
  plugins: [vuexPersist.plugin],
});

export default store;
