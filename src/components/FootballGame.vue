<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <v-btn color="yellow" @click="undoPlay">
            Undo
          </v-btn>
          <v-btn :color="savePlayButtonColor" @click="savePlay">
            Save {{ playerInCount }}
          </v-btn>
          <v-btn color="orange" @click="clearField">
            Clear
          </v-btn>
          <v-btn color="blue" @click="toggleNames">
            Names
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-bind:style="{ 'background-color': 'green' }">
      <v-row>
        <v-col v-for="player in playersIn" :key="player.jersey" cols="2" sm="3">
          <FootballPlayer :showName="showName" canSub :player=player />
        </v-col>
      </v-row>
    </v-container>
    <v-container v-bind:style="{ 'background-color': '#e3e3e3' }">
      <v-row>
        <v-col v-for="player in playersOut" :key="player.jersey" cols="2" sm="3">
          <FootballPlayer :showName="showName" canSub :player=player />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import FootballPlayer from './FootballPlayer.vue';

export default {
  name: 'FootballGame',
  data: () => ({
    showName: false,
  }),
  computed: {
    ...mapGetters({
      playersIn: 'playersIn',
      playersOut: 'playersOut',
      getMaxPlayers: 'getMaxPlayers',
      plays: 'plays',
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
      this.$store.dispatch('toggleSuccess');
    },
    undoPlay() {
      this.$store.dispatch('undoPlay');
      this.$store.dispatch('toggleSuccess');
    },
    clearField() {
      this.$store.dispatch('clearField');
    },
    toggleNames() {
      this.showName = !this.showName;
    },
  },
  components: {
    FootballPlayer,
  },
};
</script>
