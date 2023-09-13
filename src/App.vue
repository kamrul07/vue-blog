<script setup>

  import { ref } from 'vue';
  import navigation from './components/navigation.vue';
  import bloglist from './components/bloglist.vue';
</script>

<template>
<navigation />
 
<RouterView :key="$route.fullPath" />
</template>

<style scoped>

</style>
