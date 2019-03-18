<template>
  <md-card>
    <md-card-media-cover md-solid>
      <md-card-media>
        <img
          :src="' https://images.weserv.nl/?url=' + this.$store.state.profile.portrait.replace(/(^\w+:|^)\/\//, '')"
          crossorigin="anonymous"
        >
      </md-card-media>
      <md-card-area>
        <md-card-header>
          <span class="md-title">{{this.$store.state.profile.username}}</span>
          <span class="md-subhead">{{this.$store.state.profile.level}}</span>
        </md-card-header>
      </md-card-area>
    </md-card-media-cover>
  </md-card>
</template>

<script>
export default {
  name: "ProfileCard"
};
</script>

<style scoped>
.md-card {
  width: 250px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
</style>