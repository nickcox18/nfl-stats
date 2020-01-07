<template>
  <div class="players">
    {{ players }}
  </div>
</template>
<script>
export default {
  name: 'Players',
  props: {
    msg: String,
  },
  created() {
    this.$store.dispatch('loadPlayers');
  },
  computed: {
    players() {
      return this.$store.state.players;
    },
  },
};
</script>
