<template>
  <div
    v-if="this.$store.state.profile && this.$store.state.stats"
    class="md-layout md-gutter md-alignment-center-center content"
  >
    <ProfileCard/>
    <StatsDashboard/>
    <div class="md-layout-item md-layout md-alignment-center-center md-gutter">
      <StatsCard
        v-for="item in this.$store.state.stats.stats.best.competitive"
        :key="item.title"
        :title="item.title"
        :content="item.value"
      />
    </div>
  </div>
  <Preloader v-else/>
</template>

<script>
import ProfileCard from "@/components/ProfileCard/ProfileCard.vue";
import StatsDashboard from "@/components/StatsDashboard/StatsDashboard.vue";
import Preloader from "@/components/Preloader/Preloader.vue";
import StatsCard from "@/components/StatsCard/StatsCard.vue";

export default {
  name: "Dashboard",
  components: {
    ProfileCard,
    StatsDashboard,
    Preloader,
    StatsCard
  },
  created() {
    this.$store.dispatch("fetchProfile");
    this.$store.dispatch("fetchHeroes");
    this.$store.dispatch("fetchStats");
  }
};
</script>

<style scoped>
.content {
  margin-bottom: 64px;
}
</style>
