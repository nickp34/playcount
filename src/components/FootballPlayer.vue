<template>
  <v-container>
    <v-row no-gutters>
      <v-col>
        <v-card class="pa-2" outlined tile>
            <FootballPlayerIn :player="player" />
            #{{ player.jerseyNumber }} {{ player.lastName }}
            <FootballPlayerOut :player="player" />
            <v-chip :color="playCountColor" text-color="white">
              {{ playCount }}
            </v-chip>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import FootballPlayerIn from './FootballPlayerIn.vue';
import FootballPlayerOut from './FootballPlayerOut.vue';

export default {
  name: 'FootballPlayer',
  props: {
    player: Object,
  },
  computed: {
    ...mapGetters([
      'totalPlays',
    ]),
    playCount() {
      return this.totalPlays(this.player);
    },
    playCountColor() {
      if (this.playCount < 3) {
        return 'red';
      }
      if (this.playCount >= 10) {
        return 'green';
      }
      return 'orange';
    },
  },
  components: {
    FootballPlayerIn,
    FootballPlayerOut,
  },
};
</script>
