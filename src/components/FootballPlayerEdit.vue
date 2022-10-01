<template>
<v-form>
    <v-container class="pa-0">
      <v-row>
        <v-col>
          <v-text-field v-model="firstName" />
        </v-col>

        <v-col>
          <v-text-field
            v-model="lastName" />
        </v-col>

        <v-col>
          <v-text-field v-model="jersey" />
        </v-col>

        <v-col>
          <v-switch v-model="isPlaying" label="Playing"></v-switch>
        </v-col>
      </v-row>
    </v-container>
</v-form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'FootballPlayerEdit',
  props: {
    player: Object,
  },
  methods: {
    ...mapActions(['savePlayer']),
  },
  computed: {
    firstName: {
      get() {
        return this.player.firstName;
      },
      set(value) {
        this.savePlayer({
          player: this.player,
          value,
          action: 'firstName',
        });
      },
    },
    lastName: {
      get() {
        return this.player.lastName;
      },
      set(value) {
        this.savePlayer({
          player: this.player,
          value,
          action: 'lastName',
        });
      },
    },
    jersey: {
      get() {
        return this.player.jerseyNumber;
      },
      set(value) {
        this.savePlayer({
          player: this.player,
          value,
          action: 'jerseyNumber',
        });
      },
    },
    isPlaying: {
      get() {
        return this.player.isPlaying;
      },
      set(value) {
        this.savePlayer({
          player: this.player,
          value,
          action: 'isPlaying',
        });
      },
    },
  },
};
</script>
