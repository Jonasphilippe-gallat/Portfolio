<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>

  <header class="hidden">
    <div class="flex w-full justify-center text-center items-center absolute">

    </div>

    <div class="bg-black flex justify-between">
      <RouterLink to="/">
        <img class="h-18 p-6 pl-8 " src="../public/logo.png" alt="logo du portfolio">
      </RouterLink>
      <RouterLink class="self-center mx-auto pr-20 uppercase font-bold text-2xl font-montserrat text-white" to="/">
        <h1>Jonas
          Philippe-Gallat
        </h1>
      </RouterLink>
    </div>
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
