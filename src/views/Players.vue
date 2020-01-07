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
      <b-table
            :data="players"
            narrowed
            :loading="false"
            mobile-cards>

            <template slot-scope="props">
                <b-table-column field="name" label="Name">
                  {{ props.row.name }}
                </b-table-column>
                <b-table-column field="position" label="Position">
                  {{ props.row.position }}
                </b-table-column>
                <b-table-column field="team" label="Team">
                  {{ props.row.teamAbbr }}
                </b-table-column>
                <b-table-column field="points" label="Points">
                  {{ props.row.weekPts }}
                </b-table-column>
                <b-table-column field="points" label="Projected Points">
                  {{ props.row.weekProjectedPts }}
                </b-table-column>
            </template>

            <template slot="empty">
                <section class="section">
                  <div class="content has-text-grey has-text-centered">
                      <p>
                          <b-icon
                              icon="emoticon-sad"
                              size="is-large">
                          </b-icon>
                      </p>
                      <p>Nothing here.</p>
                  </div>
                </section>
            </template>
        </b-table>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Players',
  data() {
    return {
      seasons: [2010, 2011, 2012, 2013, 2014, 2015],
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
