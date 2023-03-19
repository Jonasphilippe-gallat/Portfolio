<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Menu from './components/Menu.vue';

</script>

<template>
  <header class="">
    <Menu class="tablet:hidden"></Menu>

  </header>
  <Suspense>
    <RouterView />
  </Suspense>
</template>

<style scoped>
body {
  background: #111111;
}
</style>
