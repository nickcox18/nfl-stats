<template>
  <b-modal :active="comparePlayerModal">
      {{ playerGroup }}
  </b-modal>
</template>

<script>
export default {
  name: 'CompareModal',
  props: {
    playerGroup: Array,
  },
  method: {

  },
  computed: {
    comparePlayerModal() {
      return this.$store.state.comparePlayerModal;
    },
    closePlayerModal() {
      return this.$store.dispatch('toggleComparePlayerModal', false);
    },
  },
};
</script>
