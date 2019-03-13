<template>
  <div class="dashboard">
    <ProfileCard
      v-if="this.profile"
      :profileIcon="this.profile.portrait"
      :profileName="this.profile.username"
      :profileRating="this.profile.level"
      :profileRatingIcon="this.profile.levelFrame"
    />
  </div>
</template>

<script>
import ProfileCard from "@/components/ProfileCard.vue";
import profileService from "@/services/profileService.js";
import heroesService from "@/services/heroesService.js";

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
    getProfile() {
      this.battleTag = localStorage.getItem("battleTag");
      profileService(this.$axios)
        .get(this.battleTag)
        .then(profile => {
          this.profile = profile;
        })
        .catch(error => error);
    },
    getHeroes() {
      heroesService(this.$axios)
        .get()
        .then(heroes => {
          this.heroes = heroes;
        })
        .catch(error => error);
    }
  },
  created() {
    const battleTag = localStorage.getItem("battleTag");
    if (battleTag) {
      this.getProfile();
      this.getHeroes();
    }
  }
};
</script>
