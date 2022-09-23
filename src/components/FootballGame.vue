<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <v-btn color="yellow" @click="undoPlay">
            Undo Play
          </v-btn>
        </v-col>
        <v-col>
          <v-btn :color="savePlayButtonColor" @click="savePlay">
            Save Play => {{ playerInCount }}
          </v-btn>
        </v-col>
        <v-col>
          <v-btn color="orange" @click="clearField">
            Clear Field
          </v-btn>
        </v-col>
        <v-col>
          <v-btn color="green" @click="toggleNames">
            Names
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-bind:style="{ 'background-color': 'green' }">
      <v-row>
        <v-col v-for="player in playersIn" :key="player.jersey" cols="2" sm="3">
          <FootballPlayer :showLastName="showNames" canSub :player=player />
        </v-col>
      </v-row>
    </v-container>
    <v-container v-bind:style="{ 'background-color': '#e3e3e3' }">
      <v-row>
        <v-col v-for="player in playersOut" :key="player.jersey" cols="2" sm="3">
          <FootballPlayer :showLastName="showNames" canSub :player=player />
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
    showNames: true,
  }),
  computed: {
    ...mapGetters({
      playersIn: 'playersIn',
      playersOut: 'playersOut',
      getMaxPlayers: 'getMaxPlayers',
      roster: 'roster',
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
      this.showNames = !this.showNames;
    },
  },
  components: {
    FootballPlayer,
  },
};
</script>
