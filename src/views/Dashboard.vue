<template>
  <div
    v-if="this.$store.state.profile && this.$store.state.stats"
    class="md-layout md-gutter md-alignment-center-center content"
  >
    <ProfileCard />
    <StatsDashboard />
    <div class="md-layout-item md-layout md-alignment-center-center md-gutter md-size-100">
      <h1 class="md-layout-item md-size-100">Competitive - Best</h1>
      <StatsCard
        v-for="(item, name) in this.$store.state.stats.stats.competitive.all.best"
        :key="name"
        :title="name.replace(/_/g, ' ').toUpperCase()"
        :content="item.toString()"
      />
    </div>
  </div>
  <Preloader v-else />
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
