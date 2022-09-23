<template>
  <v-app>
    <v-app-bar
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
    </v-app-bar>

    <v-main>
      <FootballGame />
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';
// import { mapState } from 'vuex';
import FootballGame from './components/FootballGame.vue';

export default {
  name: 'App',

  components: {
    FootballGame,
  },

  computed: {
    ...mapGetters({
      playersIn: 'playersIn',
      getMaxPlayers: 'getMaxPlayers',
    }),
    playerInCount() {
      return this.playersIn.length;
    },
    savePlayButtonColor() {
      if (this.playerInCount < 5 || this.playerInCount > this.getMaxPlayers) {
        return 'red';
      }
      return this.playerInCount < this.getMaxPlayers ? 'orange' : 'green';
    },
  },
  methods: {
    savePlay() {
      this.$store.dispatch('savePlay');
    },
    undoPlay() {
      this.$store.dispatch('undoPlay');
    },
    clearField() {
      this.$store.dispatch('clearField');
    },
  },
};
</script>
