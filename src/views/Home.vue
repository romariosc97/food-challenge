<template>
  <MobileNavbar />
  <div class="home">
    <UnderConstruction v-bind:route="'Hoy'"/>
  </div>
</template>

<script>
import MobileNavbar from '@/components/navigation/MobileNavbar.vue';
import UnderConstruction from '@/components/UnderConstruction.vue';
export default {
  name: 'Home',
  components: {
    MobileNavbar,
    UnderConstruction
  }
}
</script>

<style lang="sass" scoped>
    .home
      text-align: center
</style>
