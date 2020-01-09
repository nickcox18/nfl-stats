<template>
  <section class="comparedPlayers">
    <Bar v-for="(c, index) in comparedPlayers" :chart-data="c" :key="index" />
  </section>
</template>
<script>
import { Bar } from 'vue-chartjs';

export default {
  name: 'ComparedPlayers',
  components: {
    Bar,
  },
  data() {
    return {
    };
  },
  mounted() {
  },
  created() {

  },
  methods: {
  },
  computed: {
    comparedPlayers() {
      return this.$store.state.comparedPlayers;
    },
  },
};
</script>
