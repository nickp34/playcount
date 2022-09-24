<template>
  <div>
    <v-app>
      <v-main>
        <v-tabs>
          <v-tab>Game</v-tab>
          <v-tab>Stats</v-tab>
          <!-- <v-tab>Roster</v-tab> -->
          <v-tab-item>
            <FootballGame />
          </v-tab-item>
          <v-tab-item>
            <FootballPlayerStats />
          </v-tab-item>
          <!-- <v-tab-item>
            <FootballRoster />
          </v-tab-item> -->
        </v-tabs>
        <v-alert v-if="showSuccess" type="success">Success</v-alert>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import FootballGame from './components/FootballGame.vue';
import FootballPlayerStats from './components/FootballPlayerStats.vue';
// import FootballRoster from './components/FootballRoster.vue';

export default {
  name: 'App',
  computed: {
    ...mapGetters({
      showSuccess: 'showSuccess',
    }),
  },
  components: {
    FootballGame,
    FootballPlayerStats,
    // FootballRoster,
  },
};
</script>

<style>
.body {
  overscroll-behavior: contain;
}
</style>
