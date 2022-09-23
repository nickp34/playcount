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
                <v-col v-if="showLastName">
                  {{ player.lastName }}
                </v-col>
                <v-col v-if="canSub">
                  <FootballPlayerOut :player="player" />
                </v-col>
                <v-col v-if="showPlayCount">
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
    canSub: Boolean,
    showPlayCount: Boolean,
    showLastName: Boolean,
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
      if (this.playCount <= 5) {
        return 'orange';
      }
      if (this.playCount < 10) {
        return 'yellow';
      }
      return 'green';
    },
    // showLastName() {
    //   return this.$store.state.settings.showLastName;
    // },
  },
  components: {
    FootballPlayerIn,
    FootballPlayerOut,
  },
};
</script>
