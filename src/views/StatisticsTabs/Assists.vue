<template>
  <div class="md-layout md-alignment-center-center md-gutter md-size-100">
    <StatsCard
      v-for="(item, title) in this.$store.state.stats.stats.competitive.all.assists"
      :key="title"
      :title="title.replace(/_/g, ' ').toUpperCase()"
      :content="item.toString()"
    />
  </div>
</template>

<script>
import StatsCard from "@/components/StatsCard/StatsCard.vue";

export default {
  name: "Assist",
  components: {
    StatsCard
  }
};
</script>

<style scoped>
</style>