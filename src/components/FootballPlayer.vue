<template>
  <v-container>
    <v-row no-gutters>
      <v-col>
        <v-card>
            <v-container>
              <v-row dense no-gutters>
                <v-col>
                  <FootballPlayerIn :player="player" />
                </v-col>
                <v-col>
                  #{{ player.jerseyNumber }}
                </v-col>
                <v-col v-if="showLastName">
                  {{ player.lastName }}
                </v-col>
                <v-col>
                  <FootballPlayerOut :player="player" />
                </v-col>
                <v-col v-if="showPlayerCount">
                  <v-chip :color="playCountColor" text-color="white">
                    {{ playCount }}
                  </v-chip>
                </v-col>
              </v-row>
          </v-container>
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
    showLastName() {
      return this.$store.state.settings.showLastName;
    },
    showPlayerCount() {
      return this.$store.state.settings.showPlayerCount;
    },
  },
  components: {
    FootballPlayerIn,
    FootballPlayerOut,
  },
};
</script>
