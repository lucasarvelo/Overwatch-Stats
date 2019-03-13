<template>
  <md-card>
    <md-card-media-cover md-solid>
      <md-card-media>
        <img
          :src="' https://images.weserv.nl/?url=' + profileIcon.replace(/(^\w+:|^)\/\//, '')"
          crossorigin="anonymous"
        >
      </md-card-media>
      <md-card-area>
        <md-card-header>
          <span class="md-title">{{profileName}}</span>
          <span class="md-subhead">{{profileRating}}</span>
        </md-card-header>

        <md-card-actions>
          <md-button class="md-icon-button">
            <md-icon>favorite</md-icon>
          </md-button>

          <md-button class="md-icon-button">
            <md-icon>share</md-icon>
          </md-button>
        </md-card-actions>
      </md-card-area>
    </md-card-media-cover>
  </md-card>
</template>

<script>
export default {
  props: {
    profileIcon: {
      type: String,
      required: true,
      default: "@/assets/default-players-logo.png"
    },
    profileName: {
      type: String,
      required: true,
      default: "Player Name"
    },
    profileRating: {
      type: Number,
      required: true,
      default: 0
    },
    profileRatingIcon: {
      type: String,
      requiered: true,
      default: ""
    }
  }
};
</script>

<style scoped>
.md-card {
  width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
</style>