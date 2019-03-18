import Vue from "vue";
import Vuex from "vuex";
import profileService from "./services/profileService";
import statsService from "./services/statsService";
import heroesService from "./services/heroesService";
import axios from "axios";
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    battleTag: null,
    profile: null,
    stats: null,
    heroes: null
  },
  mutations: {
    SET_BATTLETAG(state, battleTag) {
      state.battleTag = battleTag;
    },
    SET_PROFILE(state, profile) {
      state.profile = profile;
    },
    SET_STATS(state, stats) {
      state.stats = stats;
    },
    SET_HEROES(state, heroes) {
      state.heroes = heroes;
    }
  },
  actions: {
    fetchProfile(context) {
      profileService(axios)
        .get(this.state.battleTag)
        .then(profile => {
          context.commit("SET_PROFILE", profile);
        });
    },
    fetchHeroes(context) {
      heroesService(axios)
        .get()
        .then(heroes => {
          context.commit("SET_HEROES", heroes);
        });
    },
    fetchStats(context) {
      statsService(axios)
        .get(this.state.battleTag)
        .then(stats => {
          context.commit("SET_STATS", stats);
        });
    }
  },
  getters: {}
});

export default store;
