/* eslint no-shadow: off */

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const MIN_PLAYERS_PER_PLAY = 11;

const state = {
  minPlayersPerPlay: MIN_PLAYERS_PER_PLAY,
  roster: [
    {
      firstName: 'Paxton', lastName: 'Green', jerseyNumber: 2, groups: [], playStatus: 'out',
    },
    {
      firstName: 'Grayson', lastName: 'Cardenas ', jerseyNumber: 4, groups: [], playStatus: 'out',
    },
    {
      firstName: 'Brendan', lastName: 'Hughart', jerseyNumber: 5, groups: [], playStatus: 'out',
    },
    {
      firstName: 'Brantley', lastName: 'Taylor ', jerseyNumber: 6, groups: [], playStatus: 'out',
    },
    {
      firstName: 'Nolan', lastName: 'Bales', jerseyNumber: 10, groups: [], playStatus: 'out',
    },
    {
      firstName: 'Kellen', lastName: 'Spearman', jerseyNumber: 33, groups: [], playStatus: 'out',
    },
    {
      firstName: 'Keller', lastName: 'Green', jerseyNumber: 35, groups: [], playStatus: 'out',
    },
    {
      firstName: 'Ole', lastName: 'Dimick', jerseyNumber: 40, groups: [], playStatus: 'out',
    },
    {
      firstName: 'Cameron', lastName: 'Hang ', jerseyNumber: 42, groups: [], playStatus: 'out',
    },
    {
      firstName: 'Jonah', lastName: 'Miller', jerseyNumber: 44, groups: [], playStatus: 'out',
    },
    {
      firstName: 'Mason', lastName: 'Woodard', jerseyNumber: 45, groups: [], playStatus: 'out',
    },
    {
      firstName: 'Rey', lastName: 'LaRosa ', jerseyNumber: 50, groups: [], playStatus: 'out',
    },
    {
      firstName: 'Parker', lastName: 'Bass', jerseyNumber: 51, groups: [], playStatus: 'out',
    },
    {
      firstName: 'Evan', lastName: 'Ouellette', jerseyNumber: 54, groups: [], playStatus: 'out',
    },
    {
      firstName: 'Nolan', lastName: 'Pate', jerseyNumber: 55, groups: [], playStatus: 'out',
    },
    {
      firstName: 'Jordan', lastName: 'Gillock', jerseyNumber: 60, groups: [], playStatus: 'out',
    },
    {
      firstName: 'Brayden', lastName: 'Ayers', jerseyNumber: 61, groups: [], playStatus: 'out',
    },
    {
      firstName: 'Henry', lastName: 'Tischhauser', jerseyNumber: 63, groups: [], playStatus: 'out',
    },
    {
      firstName: 'Benjamin', lastName: 'Roman', jerseyNumber: 64, groups: [], playStatus: 'out',
    },
    {
      firstName: 'Logan', lastName: 'Minick', jerseyNumber: 71, groups: [], playStatus: 'out',
    },
    {
      firstName: 'Parker', lastName: 'Clark', jerseyNumber: 74, groups: [], playStatus: 'out',
    },
    {
      firstName: 'Jackson', lastName: 'Conroy', jerseyNumber: 75, groups: [], playStatus: 'out',
    },
    {
      firstName: 'Baylor', lastName: 'Moehring ', jerseyNumber: 80, groups: [], playStatus: 'out',
    },
    {
      firstName: 'Cameron', lastName: 'Moore', jerseyNumber: 83, groups: [], playStatus: 'out',
    },
    {
      firstName: 'Logan', lastName: 'Niessner', jerseyNumber: 84, groups: [], playStatus: 'out',
    },
    {
      firstName: 'Jackson', lastName: 'Hughes ', jerseyNumber: 85, groups: [], playStatus: 'out',
    },
    {
      firstName: 'Meyer', lastName: 'Johnson', jerseyNumber: 87, groups: [], playStatus: 'out',
    },
    {
      firstName: 'Brandon', lastName: 'Hernandez', jerseyNumber: 90, groups: [], playStatus: 'out',
    },
  ],
  plays: [],
};

const getters = {
  getMaxPlayers(state) {
    return state.minPlayersPerPlay;
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
  totalPlays: (state) => (player) => {
    let cnt = 0;
    state.plays.forEach((play) => {
      play.forEach((p) => {
        if (p.jerseyNumber === player.jerseyNumber) {
          cnt += 1;
        }
      });
    });
    return cnt;
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
  },
  undoPlay(state) {
    if (state.plays.length > 0) {
      state.plays.pop();
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
};

const store = new Vuex.Store({
  actions,
  getters,
  mutations,
  state,
});

export default store;
