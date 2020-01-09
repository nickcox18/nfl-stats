<template>
  <section class="players">
    <div class="container">
      <div class="columns is-flex-end">
        <div class="column is-narrow">
          <b-field label="Season">
              <b-select v-model="season">
                  <option
                      v-for="(s, index) in seasons"
                      :value="s"
                      :key="index">
                      {{ s }}
                  </option>
              </b-select>
          </b-field>
        </div>
      <div class="column is-narrow">
        <b-field label="Week">
            <b-select v-model="week">
                <option
                    v-for="(w, index) in weeks"
                    :value="w"
                    :key="index">
                    {{ w }}
                </option>
            </b-select>
        </b-field>
      </div>
      <div class="column is-narrow">
        <b-field label="Position">
            <b-select v-model="position">
                <option
                    v-for="(p, index) in positions"
                    :value="p"
                    :key="index">
                    {{ p }}
                </option>
            </b-select>
        </b-field>
      </div>
        <div class="column is-narrow">
          <b-button type="is-primary is-medium" v-on:click="getPlayers(season, week, position)">
            Get Players
          </b-button>
        </div>
      </div>
      <stat-table :players="players"
                  v-on:updatePlayerGroup="getPlayerGroup"
                  :playerGroup="playerGroup"
      />
      <bottom-nav :playerGroup="playerGroup" />
    </div>
  </section>
</template>
<script>
import StatTable from '@/components/StatTable.vue';
import BottomNav from '@/components/BottomNav.vue';

export default {
  name: 'Players',
  components: {
    StatTable,
    BottomNav,
  },
  data() {
    return {
      seasons: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
      weeks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
      positions: ['QB', 'RB', 'WR', 'TE', 'K', 'DEF', 'DL', 'LB', 'DB'],
      playerGroup: [],
      week: '',
      season: '',
      position: '',
    };
  },
  created() {

  },
  methods: {
    getPlayers(season, week, position) {
      const payload = { season, week, position };
      this.$store.dispatch('loadPlayers', payload);
    },
    getPlayerGroup(value) {
      this.playerGroup.push(value);
    },
  },
  computed: {
    players() {
      return this.$store.state.players;
    },
  },
};
</script>
<style lang="css" scoped>
  .is-flex-end {
    align-items: flex-end;
  }
</style>
