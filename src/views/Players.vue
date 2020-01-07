<template>
  <div class="players">
    <select v-model="season">
      <option disabled value="">Please select a season</option>
      <option>2015</option>
      <option>2016</option>
      <option>2017</option>
      <option>2018</option>
    </select>
    <select v-model="week">
      <option disabled value="">Please select a week</option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option>8</option>
      <option>9</option>
      <option>10</option>
      <option>11</option>
      <option>12</option>
      <option>13</option>
      <option>14</option>
      <option>15</option>
      <option>16</option>
      <option>17</option>
    </select>
    <br />
    <button v-on:click="getPlayers(season, week)">Get Players</button>
    {{ players }}
  </div>
</template>
<script>
export default {
  name: 'Players',
  data() {
    return {
      season: '',
      week: '',
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
