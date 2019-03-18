<template>
  <div class="dashboard">
    <ProfileCard v-if="this.$store.state.profile"/>
  </div>
</template>

<script>
import ProfileCard from "@/components/ProfileCard.vue";

export default {
  name: "Dashboard",
  components: {
    ProfileCard
  },
  created() {
    this.$store.dispatch("fetchProfile");
    this.$store.dispatch("fetchHeroes");
    this.$store.dispatch("fetchStats");
  }
};
</script>
