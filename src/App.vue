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

        <v-spacer></v-spacer>

        <v-btn :color="savePlayButtonColor" @click="savePlay">
          <span>Save</span>
        </v-btn>
        <v-btn :color="savePlayButtonColor">
          <span>{{ playerInCount }}</span>
        </v-btn>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">New Game</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
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
  },
};
</script>
