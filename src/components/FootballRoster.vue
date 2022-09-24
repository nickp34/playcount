<template>
  <v-container v-bind:style="{ 'background-color': '#e3e3e3' }">
    <v-row>
      <v-col>
        <v-btn color="blue">
          Save
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="player in sortedRoster" :key="player.jersey" cols="12" sm="4">
        <FootballPlayer
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
  name: 'FootballRoster',
  data: () => ({
    showName: true,
  }),
  computed: {
    ...mapGetters({
      playersByPlayCount: 'playersByPlayCount',
    }),
    sortedRoster() {
      return this.playersByPlayCount;
    },
  },
  methods: {
  },
  components: {
    FootballPlayer,
  },
};
</script>
