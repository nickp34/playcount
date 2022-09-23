<template>
  <div>
    <v-app>
      <!-- <v-app-bar
        app
        color="primary"
        dark
      >
        <div class="d-flex align-center">
          <v-btn @click="undoPlay">
            <span>Undo</span>
          </v-btn>
          <v-btn :color="savePlayButtonColor" @click="savePlay">
            Save
          </v-btn>
          <v-btn :color="savePlayButtonColor">
            {{ playerInCount }}
          </v-btn>
          <v-btn color="orange" @click="clearField">
            Clear
          </v-btn>
        </div>
      </v-app-bar> -->

      <v-main>
        <v-tabs>
          <v-tab>Game</v-tab>
          <v-tab>Stats</v-tab>
          <v-tab-item>
            <FootballGame />
          </v-tab-item>
          <v-tab-item>
            <FootballPlayerStats />
          </v-tab-item>
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

export default {
  name: 'App',
  computed: {
    ...mapGetters({
      showSuccess: 'showSuccess',
    }),
    // playerInCount() {
    //   return this.playersIn.length;
    // },
    // savePlayButtonColor() {
    //   if (this.playerInCount < 5 || this.playerInCount > this.getMaxPlayers) {
    //     return 'red';
    //   }
    //   return this.playerInCount < this.getMaxPlayers ? 'orange' : 'green';
    // },
  },
  // methods: {
  //   savePlay() {
  //     this.$store.dispatch('savePlay');
  //   },
  //   undoPlay() {
  //     this.$store.dispatch('undoPlay');
  //   },
  //   clearField() {
  //     this.$store.dispatch('clearField');
  //   },
  // },
  components: {
    FootballGame,
    FootballPlayerStats,
  },
};
</script>
