<template>
  <div
    class="md-layout-item md-layout md-xlarge-size-80 md-large-size-70 md-medium-size-70 md-small-size-100 md-xsmall-size-100 md-alignment-center-center md-gutter"
  >
    <md-card md-elevation-10 class="md-layout-item">
      <md-card-area>
        <md-card-header>
          <span class="md-subhead">Skill Rate</span>
          <br />
          <span class="md-title">Damage: {{this.$store.state.stats.stats.competitive_rank.damage}}</span>
          <br />
          <span class="md-title">Support: {{this.$store.state.stats.stats.competitive_rank.support}}</span>
          <br />
          <span class="md-title">Tank: {{this.$store.state.stats.stats.competitive_rank.tank}}</span>
        </md-card-header>
      </md-card-area>
    </md-card>
    <md-card md-elevation-10 class="md-layout-item">
      <md-card-area>
        <md-card-header>
          <span class="md-subhead">Win Rate</span>
          <br />
          <span
            class="md-title"
          >{{(this.$store.state.stats.stats.competitive.all.game.games_won/(this.$store.state.stats.stats.competitive.all.game.games_played-this.$store.state.stats.stats.competitive.all.game.games_tied)*100).toFixed(2)}}%</span>
        </md-card-header>
      </md-card-area>
    </md-card>
    <md-card md-elevation-10 class="md-layout-item">
      <md-card-area>
        <md-card-header>
          <span class="md-subhead">Time Played</span>
          <br />
          <span class="md-title">{{this.$store.state.stats.stats.competitive.all.game.time_played}}</span>
        </md-card-header>
      </md-card-area>
    </md-card>
  </div>
</template>

<script>
export default {
  name: "StatsDashboard"
};
</script>

<style scoped>
.md-layout-item {
  margin: 10px;
}
</style>
