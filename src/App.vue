<template>
  <Header></Header>
  <main class="d-flex flex-column flex-fill">
    <router-view v-slot="{ Component }">
      <Suspense>
          <component :is="Component" />
      </Suspense>
    </router-view>
  </main>
  <Footer></Footer>
</template>

<script setup lang="ts">
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import { useHead } from '@unhead/vue'

useHead({
  titleTemplate: 'Open Source-KI.nrw - %s',
  meta: [
    {
      name: '',
      content: '',
    },
  ],
})
</script>

<style lang="scss" scoped>
</style>
