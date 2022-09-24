<template>
  <v-container v-bind:style="{ 'background-color': '#e3e3e3' }">
    <v-row>
      <v-col>
        <v-btn color="blue" @click="toggleNames">
          Toggle Names
        </v-btn>
        <v-btn color="green">
          Plays {{ playCount }}
        </v-btn>
      </v-col>
      <v-col>
        <v-btn color="red" @click="clearData">
          Clear Game
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="player in sortedRoster" :key="player.jersey" cols="12" sm="4">
        <FootballPlayer
          showPlayCount
          :showName="showName"
          :player=player
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import FootballPlayer from './FootballPlayer.vue';

export default {
  name: 'FootballPlayerStats',
  data: () => ({
    showName: true,
  }),
  computed: {
    ...mapGetters({
      playersByPlayCount: 'playersByPlayCount',
      playCount: 'playCount',
    }),
    sortedRoster() {
      return this.playersByPlayCount;
    },
  },
  methods: {
    toggleNames() {
      this.showName = !this.showName;
    },
    clearData() {
      this.$store.dispatch('clearStore');
    },
  },
  components: {
    FootballPlayer,
  },
};
</script>
