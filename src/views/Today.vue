<template>
  <MobileNavbar />
  <div class="today">
    <UnderConstruction v-bind:route="'Hoy'"/>
  </div>
</template>

<script>
import MobileNavbar from '@/components/navigation/MobileNavbar.vue';
import UnderConstruction from '@/components/UnderConstruction.vue';
export default {
  name: 'Today',
  components: {
    MobileNavbar,
    UnderConstruction
  }
}
</script>

<style lang="sass" scoped>
    .today
      text-align: center
</style>
