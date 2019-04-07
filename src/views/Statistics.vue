<template>
  <div class="content">
    <md-tabs md-sync-route class="md-transparent" md-alignment="fixed">
      <md-tab id="tab-average" md-label="Average" to="/statistics"></md-tab>
      <md-tab id="tab-assist" md-label="Assist" to="/assists"></md-tab>
      <md-tab id="tab-total" md-label="Total" to="/total"></md-tab>
      <md-tab id="tab-awards" md-label="Awards" to="/Awards"></md-tab>
    </md-tabs>
    <router-view v-if="this.$store.state.stats"></router-view>
    <Preloader v-else/>
  </div>
</template>

<script>
import Preloader from "@/components/Preloader/Preloader.vue";
export default {
  name: "Statistics",
  created() {
    if (!this.$store.state.stats) {
      this.$store.dispatch("fetchProfile");
      this.$store.dispatch("fetchHeroes");
      this.$store.dispatch("fetchStats");
    }
  },
  components: {
    Preloader
  }
};
</script>

<style scoped>
.content {
  margin-bottom: 64px;
}
</style>
