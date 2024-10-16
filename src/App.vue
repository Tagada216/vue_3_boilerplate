<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <header class="flex flex-col items-center justify-center mt-10">
    <img
      alt="Vue logo"
      class=""
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="flex flex-col items-center justify-center">
      <HelloWorld msg="You did it!" />

      <nav class="flex items-center justify-between">
        <RouterLink to="/" class="text-primary-light mr-5">Home</RouterLink>
        <RouterLink to="/about" class="text-primary-light">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
