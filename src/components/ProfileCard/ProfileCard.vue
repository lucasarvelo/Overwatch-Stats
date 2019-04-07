<template>
  <div
    class="md-layout-item md-alignment-center-center md-xlarge-size-15 md-large-size-20 md-medium-size-25 md-small-size-30 md-xsmall-size-50"
  >
    <md-card>
      <md-card-media-cover md-text-scrim>
        <md-card-media>
          <img
            :src="' https://images.weserv.nl/?url=' + this.$store.state.profile.portrait.replace(/(^\w+:|^)\/\//, '')"
            crossorigin="anonymous"
          >
        </md-card-media>
        <md-card-area>
          <md-card-header>
            <span class="md-title">{{this.$store.state.profile.username}}</span>
            <span class="md-subhead">
              Level:
              <br>
              {{this.$store.state.profile.level}}
            </span>
          </md-card-header>
        </md-card-area>
      </md-card-media-cover>
    </md-card>
  </div>
</template>

<script>
export default {
  name: "ProfileCard"
};
</script>

<style scoped>
.md-card {
  min-width: 165px;
  padding: 5px;
}
.md-layout-item {
  margin: 5px;
}
</style>