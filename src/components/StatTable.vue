<template>
  <b-table
        :data="players"
        narrowed
        :loading="isLoading"
        mobile-cards>

        <template slot-scope="props">
            <b-checkbox
                :native-value="props.row"
                v-on:input="$emit('updatePlayerGroup', props.row)">
            </b-checkbox>
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
</template>

<script>
export default {
  name: 'StatTable',
  props: {
    players: Array,
    playerGroup: Array,
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
    computedPlayerGroup() {
      return this.playerGroup;
    },
  },
};
</script>
