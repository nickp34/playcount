<template>
  <v-container>
    <v-row>
      <v-col v-for="player in roster" :key="player.jersey" cols="2" sm="3">
        <FootballPlayer showPlayCount :player=player />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import FootballPlayer from './FootballPlayer.vue';

export default {
  name: 'FootbalPlayerStats',
  computed: {
    roster() {
      return this.$store.getters.roster;
    },
  },
  components: {
    FootballPlayer,
  },
};
</script>
