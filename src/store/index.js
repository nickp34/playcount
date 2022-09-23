/* eslint no-shadow: off */

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const MIN_PLAYERS_PER_PLAY = 11;

const state = {
  minPlayersPerPlay: MIN_PLAYERS_PER_PLAY,
  roster: [
    {
      firstName: 'Paxton', lastName: 'Green', jerseyNumber: 2, groups: [], playStatus: 'out', playCount: 0,
    },
    {
      firstName: 'Grayson', lastName: 'Cardenas ', jerseyNumber: 4, groups: [], playStatus: 'out', playCount: 0,
    },
    {
      firstName: 'Brendan', lastName: 'Hughart', jerseyNumber: 5, groups: [], playStatus: 'out', playCount: 0,
    },
    {
      firstName: 'Brantley', lastName: 'Taylor ', jerseyNumber: 6, groups: [], playStatus: 'out', playCount: 0,
    },
    {
      firstName: 'Nolan', lastName: 'Bales', jerseyNumber: 10, groups: [], playStatus: 'out', playCount: 0,
    },
    {
      firstName: 'Kellen', lastName: 'Spearman', jerseyNumber: 33, groups: [], playStatus: 'out', playCount: 0,
    },
    {
      firstName: 'Keller', lastName: 'Green', jerseyNumber: 35, groups: [], playStatus: 'out', playCount: 0,
    },
    {
      firstName: 'Ole', lastName: 'Dimick', jerseyNumber: 40, groups: [], playStatus: 'out', playCount: 0,
    },
    {
      firstName: 'Cameron', lastName: 'Hang ', jerseyNumber: 42, groups: [], playStatus: 'out', playCount: 0,
    },
    {
      firstName: 'Jonah', lastName: 'Miller', jerseyNumber: 44, groups: [], playStatus: 'out', playCount: 0,
    },
    {
      firstName: 'Mason', lastName: 'Woodard', jerseyNumber: 45, groups: [], playStatus: 'out', playCount: 0,
    },
    {
      firstName: 'Rey', lastName: 'LaRosa ', jerseyNumber: 50, groups: [], playStatus: 'out', playCount: 0,
    },
    {
      firstName: 'Parker', lastName: 'Bass', jerseyNumber: 51, groups: [], playStatus: 'out', playCount: 0,
    },
    {
      firstName: 'Evan', lastName: 'Ouellette', jerseyNumber: 54, groups: [], playStatus: 'out', playCount: 0,
    },
    {
      firstName: 'Nolan', lastName: 'Pate', jerseyNumber: 55, groups: [], playStatus: 'out', playCount: 0,
    },
    {
      firstName: 'Jordan', lastName: 'Gillock', jerseyNumber: 60, groups: [], playStatus: 'out', playCount: 0,
    },
    {
      firstName: 'Brayden', lastName: 'Ayers', jerseyNumber: 61, groups: [], playStatus: 'out', playCount: 0,
    },
    {
      firstName: 'Henry', lastName: 'Tischhauser', jerseyNumber: 63, groups: [], playStatus: 'out', playCount: 0,
    },
    {
      firstName: 'Benjamin', lastName: 'Roman', jerseyNumber: 64, groups: [], playStatus: 'out', playCount: 0,
    },
    {
      firstName: 'Logan', lastName: 'Minick', jerseyNumber: 71, groups: [], playStatus: 'out', playCount: 0,
    },
    {
      firstName: 'Parker', lastName: 'Clark', jerseyNumber: 74, groups: [], playStatus: 'out', playCount: 0,
    },
    {
      firstName: 'Jackson', lastName: 'Conroy', jerseyNumber: 75, groups: [], playStatus: 'out', playCount: 0,
    },
    {
      firstName: 'Baylor', lastName: 'Moehring ', jerseyNumber: 80, groups: [], playStatus: 'out', playCount: 0,
    },
    {
      firstName: 'Cameron', lastName: 'Moore', jerseyNumber: 83, groups: [], playStatus: 'out', playCount: 0,
    },
    {
      firstName: 'Logan', lastName: 'Niessner', jerseyNumber: 84, groups: [], playStatus: 'out', playCount: 0,
    },
    {
      firstName: 'Jackson', lastName: 'Hughes ', jerseyNumber: 85, groups: [], playStatus: 'out', playCount: 0,
    },
    {
      firstName: 'Meyer', lastName: 'Johnson', jerseyNumber: 87, groups: [], playStatus: 'out', playCount: 0,
    },
    {
      firstName: 'Brandon', lastName: 'Hernandez', jerseyNumber: 90, groups: [], playStatus: 'out', playCount: 0,
    },
  ],
  plays: [],
  settings: {
    showSuccess: false,
  },
};

const getters = {
  getMaxPlayers(state) {
    return state.minPlayersPerPlay;
  },
  playersByPlayCount(state) {
    // const playCountMap = getters.totalPlaysMap(state);
    return state.roster.sort(({ playCount: a }, { playCount: b }) => a - b);
  },
  playersIn(state) {
    return state.roster.filter((p) => p.playStatus === 'in').sort(({ jerseyNumber: a }, { jerseyNumber: b }) => a - b);
  },
  playersOut(state) {
    return state.roster.filter((p) => p.playStatus === 'out').sort(({ jerseyNumber: a }, { jerseyNumber: b }) => a - b);
  },
  plays(state) {
    return state.plays;
  },
  roster(state) {
    return state.roster;
  },
  showSuccess(state) {
    return state.settings.showSuccess;
  },
};

const mutations = {
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
};

const store = new Vuex.Store({
  actions,
  getters,
  mutations,
  state,
});

export default store;
