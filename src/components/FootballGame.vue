<template>
  <v-container>
    <v-row>
      <v-col v-for="player in onField" :key="player.jersey" cols="12" sm="4">
        <FootballPlayer :player=player />
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row>
      <v-col v-for="player in onSideline" :key="player.jersey" cols="12" sm="4">
        <FootballPlayer :player=player />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import FootballPlayer from './FootballPlayer.vue';

export default {
  name: 'FootballGame',
  data: () => ({
    plays: [],
  }),
  computed: {
    roster() {
      return this.$store.getters.roster;
    },
    onField() {
      return this.$store.getters.playersIn;
    },
    onSideline() {
      return this.$store.getters.playersOut;
    },
    allPlays() {
      return this.$store.getters.plays;
    },
  },
  components: {
    FootballPlayer,
  },
};
</script>
