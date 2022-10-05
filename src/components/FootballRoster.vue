<template>
  <v-container v-bind:style="{ 'background-color': '#e3e3e3' }">
    <v-row>
      <v-col v-for="player in roster" :key="player.jersey" cols="12" sm="4">
        <FootballPlayerEdit
          :player=player
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import FootballPlayerEdit from './FootballPlayerEdit.vue';

export default {
  name: 'FootballRoster',
  data: () => ({
    showName: true,
  }),
  computed: {
    ...mapGetters({
      roster: 'roster',
    }),
  },
  methods: {
  },
  components: {
    FootballPlayerEdit,
  },
};
</script>
