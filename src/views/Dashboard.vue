<template>
  <div class="dashboard">
    <ProfileCard
      :profileIcon="this.profile.data.icon"
      :profileName="this.profile.data.name"
      :profileRating="this.profile.data.rating"
      :profileRatingIcon="this.profile.data.ratingIcon"
    />
  </div>
</template>

<script>
import ProfileCard from "@/components/ProfileCard.vue";

export default {
  name: "Dashboard",
  components: {
    ProfileCard
  },
  props: {
    profile: {
      type: Object,
      default: () => {
        return { data: {} };
      }
    }
  }
};
</script>
