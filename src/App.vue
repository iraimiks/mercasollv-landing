<script setup>
import Navigation from '@/components/Navigation.vue';
import Footer from './components/Footer.vue';
import TopBar from './components/TopBar.vue';
</script>
<template>
  <main>
    <TopBar />
    <Navigation />
    <RouterView />
    <Footer />
  </main>
</template>

<style scoped></style>
