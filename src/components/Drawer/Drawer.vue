<template>
  <md-list>
    <router-link tag="md-list-item" to="/">
      <md-icon>apps</md-icon>
      <span class="md-list-item-text">Dashboard</span>
    </router-link>

    <router-link tag="md-list-item" to="/statistics">
      <md-icon>assessment</md-icon>
      <span class="md-list-item-text">Statistics</span>
    </router-link>

    <router-link tag="md-list-item" to="/heroes">
      <md-icon>contacts</md-icon>
      <span class="md-list-item-text">Heroes</span>
    </router-link>

    <router-link tag="md-list-item" to="/options">
      <md-icon>menu</md-icon>
      <span class="md-list-item-text">Options</span>
    </router-link>
  </md-list>
</template>