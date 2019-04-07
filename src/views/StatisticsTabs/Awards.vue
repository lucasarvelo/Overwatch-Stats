<template>
  <div class="md-layout md-alignment-center-center md-gutter md-size-100">
    <StatsCard
      v-for="item in this.$store.state.stats.stats.match_awards.competitive"
      :key="item.title"
      :title="item.title"
      :content="item.value"
    />
  </div>
</template>

<script>
import StatsCard from "@/components/StatsCard/StatsCard.vue";

export default {
  name: "Awards",
  components: {
    StatsCard
  }
};
</script>

<style scoped>
</style>