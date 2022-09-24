<template>
  <v-container class="pa-0">
    <v-row no-gutters>
      <v-col>
        <v-card>
            <v-container class="pa-1">
              <v-row dense no-gutters>
                <v-col v-if="canSub">
                  <FootballPlayerIn :player="player" />
                </v-col>
                <v-col>
                  #{{ player.jerseyNumber }}
                </v-col>
                <v-col v-if="showName">
                  {{ player.lastName }}
                </v-col>
                <v-col v-if="canSub">
                  <FootballPlayerOut :player="player" />
                </v-col>
                <v-col v-if="showPlayCount">
                  <v-chip :color="playCountColor" text-color="white">
                    {{ player.playCount }}
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
// import { mapGetters } from 'vuex';
import FootballPlayerIn from './FootballPlayerIn.vue';
import FootballPlayerOut from './FootballPlayerOut.vue';

export default {
  name: 'FootballPlayer',
  props: {
    player: Object,
    canSub: Boolean,
    showPlayCount: Boolean,
    showName: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    playCountColor() {
      if (this.player.playCount < 3) {
        return 'red';
      }
      if (this.player.playCount <= 5) {
        return 'orange';
      }
      if (this.player.playCount < 10) {
        return 'blue';
      }
      return 'green';
    },
  },
  components: {
    FootballPlayerIn,
    FootballPlayerOut,
  },
};
</script>
