<template>
  <b-navbar fixed-bottom>
    <template slot="end">
      <b-navbar-item tag="div">
          <div class="buttons">
              <a v-on:click="setComparedPlayers(playerGroup)" class="button is-primary">
                  Compare Players
              </a>
          </div>

      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: 'BottomNav',
  props: {
    playerGroup: Array,
  },
  methods: {
    setComparedPlayers(playerGroup) {
      this.$store.dispatch('setComparedPlayer', playerGroup);
      this.$router.push('/compare');
    },
  },
};
</script>
