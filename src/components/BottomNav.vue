<template>
  <b-navbar fixed-bottom>
    <template slot="end">
      <b-navbar-item tag="div">
          <div class="buttons">
              <a v-on:click="openComparePlayerModal" class="button is-primary">
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
  methods: {
    openComparePlayerModal() {
      this.$store.dispatch('toggleComparePlayerModal', true);
    },
  },
};
</script>
