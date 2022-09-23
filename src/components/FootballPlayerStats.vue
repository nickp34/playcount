<template>
  <v-container v-bind:style="{ 'background-color': '#e3e3e3' }">
    <v-row>
      <v-col>
        <v-btn color="green" @click="toggleNames">
          Sort
        </v-btn>
      </v-col>
      <v-col>
        <v-btn color="blue" @click="toggleNames">
          Names
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="player in sortedRoster" :key="player.jersey" cols="12" sm="4">
        <FootballPlayer showPlayCount :showName="showName" :player=player />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import FootballPlayer from './FootballPlayer.vue';

export default {
  name: 'FootbalPlayerStats',
  data: () => ({
    showName: true,
  }),
  computed: {
    ...mapGetters({
      playersByPlayCount: 'playersByPlayCount',
      roster: 'roster',
    }),
    sortedRoster() {
      return this.playersByPlayCount;
    },
  },
  methods: {
    toggleNames() {
      this.showName = !this.showName;
    },
  },
  components: {
    FootballPlayer,
  },
};
</script>
