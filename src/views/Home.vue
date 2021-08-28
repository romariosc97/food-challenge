<template>
  <MobileNavbar />
  <div class="home">
      <h1>Vista de Hoy</h1>
  </div>
</template>

<script>
import MobileNavbar from '@/components/navigation/MobileNavbar.vue';
export default {
  name: 'Home',
  components: {
    MobileNavbar
  }
}
</script>

<style lang="sass" scoped>
    .home
      text-align: center
</style>
