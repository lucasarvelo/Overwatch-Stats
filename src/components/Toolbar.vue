<template>
  <div class="md-toolbar-row">
    <md-button class="md-icon-button" @click="$emit('toggleMenu')">
      <md-icon>menu</md-icon>
    </md-button>

    <span class="md-title">My Overwatch</span>
  </div>
</template>

<script>
export default {
  data: () => ({
    menuVisible: false
  })
};
</script>