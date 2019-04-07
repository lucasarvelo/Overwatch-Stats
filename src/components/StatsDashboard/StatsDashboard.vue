<template>
  <div
    class="md-layout-item md-layout md-xlarge-size-80 md-large-size-70 md-medium-size-70 md-small-size-100 md-xsmall-size-100 md-alignment-center-center md-gutter"
  >
    <md-card md-elevation-10 class="md-layout-item">
      <md-card-area>
        <md-card-header>
          <span class="md-subhead">Skill Rate</span>
          <br>
          <span class="md-title">{{this.$store.state.profile.competitive.rank}}</span>
        </md-card-header>
      </md-card-area>
    </md-card>
    <md-card md-elevation-10 class="md-layout-item">
      <md-card-area>
        <md-card-header>
          <span class="md-subhead">Win Rate</span>
          <br>
          <span class="md-title">{{this.$store.state.profile.games.competitive.win_rate}}%</span>
        </md-card-header>
      </md-card-area>
    </md-card>
    <md-card md-elevation-10 class="md-layout-item">
      <md-card-area>
        <md-card-header>
          <span class="md-subhead">Time Played</span>
          <br>
          <span class="md-title">{{this.$store.state.profile.playtime.competitive.substr(0, 5)}}</span>
        </md-card-header>
      </md-card-area>
    </md-card>
    <md-card md-elevation-10 class="md-layout-item">
      <md-card-area>
        <md-card-header>
          <span class="md-subhead">Main Hero</span>
          <br>
          <span
            class="md-title"
          >{{this.$store.state.stats.stats.top_heroes.competitive.played[0].hero}}</span>
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
