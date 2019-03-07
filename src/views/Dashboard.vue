<template>
  <div class="dashboard">
    <ProfileCard
      v-if="this.profile"
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
  data: () => ({
    battleTag: undefined,
    profile: undefined,
    heroes: undefined
  }),
  methods: {
    updateData() {
      this.battleTag = localStorage.getItem("battleTag");
      this.$axios
        .all([
          this.$axios.get(
            "https://ow-api.com/v1/stats/pc/us/" + this.battleTag + "/profile"
          ),
          this.$axios.get("https://overwatch-api.net/api/v1/hero")
        ])
        .then(
          this.$axios.spread((profile, heroes) => {
            this.profile = profile;
            this.heroes = heroes;
            localStorage.setItem("profile", JSON.stringify(profile));
            localStorage.setItem("heroes", JSON.stringify(heroes));
            return 200;
          })
        )
        .catch(e => {
          this.errors.push(e);
        });
    }
  },
  created() {
    const battleTag = localStorage.getItem("battleTag");
    if (battleTag) {
      this.updateData();
    }
  }
};
</script>
