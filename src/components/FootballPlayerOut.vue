<template>
  <v-icon large right :color="iconColor" @click="click">mdi-account-remove</v-icon>
</template>

<script>
export default {
  name: 'FootballPlayerOut',
  props: {
    player: Object,
  },
  computed: {
    iconColor() {
      return this.player.playStatus === 'out' ? 'red' : 'gray';
    },
  },
  methods: {
    click() {
      this.$store.commit('playerOut', this.player);
    },
  },
};
</script>
