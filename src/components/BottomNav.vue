<template>
  <b-navbar fixed-bottom>
    <template slot="end">
      <b-navbar-item tag="div">
          <div class="buttons">
              <a class="button is-primary">
                  <strong>Get Player Info</strong>
              </a>
              <a class="button is-light">
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
    // players: Array,
  },
  computed: {
    // isLoading() {
    //   return this.$store.state.isLoading;
    // },
  },
};
</script>
