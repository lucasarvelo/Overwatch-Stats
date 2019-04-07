<template>
  <md-card
    md-elevation-10
    class="md-layout-item md-xlarge-size-25 md-large-size-30 md-medium-size-33 md-small-size-45 md-xsmall-size-100"
  >
    <md-card-area>
      <md-card-header>
        <span class="md-subhead">{{title}}</span>
        <br>
        <span class="md-title">{{content}}</span>
      </md-card-header>
    </md-card-area>
  </md-card>
</template>

<script>
export default {
  name: "StatsCard",
  props: {
    title: String,
    content: String
  }
};
</script>

<style scoped>
.md-layout-item {
  margin: 10px;
}
</style>
