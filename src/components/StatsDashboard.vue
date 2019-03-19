<template>
  <div class="md-layout md-layout-item md-gutter">
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
</style>
