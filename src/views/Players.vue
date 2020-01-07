<template>
  <section class="players">
    <div class="container">
      <b-field label="Select a season">
            <b-select v-model="season">
                <option
                    v-for="(s, index) in seasons"
                    :value="s"
                    :key="index">
                    {{ s }}
                </option>
            </b-select>
        </b-field>

      <b-field label="Select a week">
            <b-select v-model="week">
                <option
                    v-for="(w, index) in weeks"
                    :value="w"
                    :key="index">
                    {{ w }}
                </option>
            </b-select>
        </b-field>

      <button v-on:click="getPlayers(season, week)">Get Players</button>
      <stat-table :players="players" />
    </div>
  </section>
</template>
<script>
import StatTable from '@/components/StatTable.vue';

export default {
  name: 'Players',
  components: {
    StatTable,
  },
  data() {
    return {
      seasons: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018],
      weeks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
      week: '',
      season: '',
    };
  },
  created() {

  },
  methods: {
    getPlayers(season, week) {
      const payload = { season, week };
      this.$store.dispatch('loadPlayers', payload);
    },
  },
  computed: {
    players() {
      return this.$store.state.players;
    },
  },
};
</script>
