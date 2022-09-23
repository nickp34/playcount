<template>
  <v-container>
    <v-row no-gutters>
      <v-col>
        <v-card class="pa-2" outlined tile>
            <v-container>
              <v-row>
                <v-col>
                  <FootballPlayerIn :player="player" />
                </v-col>
                <v-col>
                  #{{ player.jerseyNumber }} {{ player.lastName }}
                </v-col>
                <v-col>
                  <FootballPlayerOut :player="player" />
                </v-col>
                <v-col>
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
  },
  components: {
    FootballPlayerIn,
    FootballPlayerOut,
  },
};
</script>
