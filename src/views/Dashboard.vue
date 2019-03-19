<template>
  <div class="md-layout md-gutter">
    <div
      class="md-layout md-layout-item md-alignment-center-center md-large-size-15 md-medium-size-20 md-small-size-30 md-xsmall-size-100"
    >
      <ProfileCard v-if="this.$store.state.profile"/>
    </div>
    <div
      class="md-layout md-layout-item md-large-size-85 md-medium-size-80 md-small-size-70 md-xsmall-size-100 md-alignment-center-center"
    >
      <StatsDashboard v-if="this.$store.state.profile && this.$store.state.stats"/>
    </div>
  </div>
</template>

<script>
import ProfileCard from "@/components/ProfileCard.vue";
import StatsDashboard from "@/components/StatsDashboard.vue";
export default {
  name: "Dashboard",
  components: {
    ProfileCard,
    StatsDashboard
  },
  created() {
    this.$store.dispatch("fetchProfile");
    this.$store.dispatch("fetchHeroes");
    this.$store.dispatch("fetchStats");
  }
};
</script>

<style scoped>
</style>
