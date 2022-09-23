<template>
  <v-icon :color="iconColor" @click="click">mdi-account-check</v-icon>
</template>

<script>
export default {
  name: 'FootballPlayerIn',
  props: {
    player: Object,
  },
  computed: {
    iconColor() {
      return this.player.playStatus === 'in' ? 'green' : 'gray';
    },
  },
  methods: {
    click() {
      this.$store.commit('playerIn', this.player);
    },
  },
};
</script>
