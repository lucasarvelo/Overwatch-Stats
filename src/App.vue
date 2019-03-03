<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="overlap">
      <md-app-toolbar class="md-primary md-large">
        <Toolbar @toggleMenu="menuVisible = !menuVisible"/>
      </md-app-toolbar>
      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0"></md-toolbar>
        <Drawer/>
      </md-app-drawer>
      <md-app-content>
        <router-view v-if="this.battleTag" :profile="this.profile"/>
        <FormBattleTag :updateData="updateData" v-else/>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
// @ is an alias to /src
import Toolbar from "@/components/Toolbar.vue";
import Drawer from "@/components/Drawer.vue";
import FormBattleTag from "@/components/FormBattleTag.vue";

import axios from "axios";

export default {
  name: "App",
  components: {
    Toolbar,
    Drawer,
    FormBattleTag
  },
  data: () => ({
    menuVisible: false,
    battleTag: undefined,
    profile: undefined,
    heroes: undefined
  }),
  methods: {
    updateData() {
      this.battleTag = localStorage.getItem("battleTag");
      axios
        .all([
          axios.get(
            "https://ow-api.com/v1/stats/pc/us/" + this.battleTag + "/profile"
          ),
          axios.get("https://overwatch-api.net/api/v1/hero")
        ])
        .then(
          axios.spread((profile, heroes) => {
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

<style scope>
.md-app {
  border: 1px solid rgba(#000, 0.12);
  min-height: 100vh;
}

.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}

.md-toolbar {
  background-image: url("./assets/overwatch-header.jpg");
  background-size: cover;
  background-position: center 9%;
}

.menu-logo {
  margin: auto;
}
</style>