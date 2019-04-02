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
        <router-view v-if="this.$store.state.battleTag"/>
        <FormBattleTag v-else/>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
// @ is an alias to /src
import Toolbar from "@/components/Toolbar/Toolbar.vue";
import Drawer from "@/components/Drawer/Drawer.vue";
import FormBattleTag from "@/components/FormBattleTag/FormBattleTag.vue";

export default {
  name: "App",
  components: {
    Toolbar,
    Drawer,
    FormBattleTag
  },
  data: () => ({
    menuVisible: false,
    battleTag: undefined
  }),
  created() {
    const battleTag = localStorage.getItem("battleTag");
    if (battleTag) {
      this.$store.commit("SET_BATTLETAG", battleTag);
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