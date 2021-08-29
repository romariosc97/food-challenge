<template>
  <MobileNavbar />
  <div class="coach">
    <UnderConstruction v-bind:route="'Coaching'"/>
  </div>
</template>

<script>
import MobileNavbar from '@/components/navigation/MobileNavbar.vue';
import UnderConstruction from '@/components/UnderConstruction.vue';
export default {
  name: 'Coach',
  components: {
    MobileNavbar,
    UnderConstruction
  },
  methods:{
    
  }
}
</script>

<style lang="sass" scoped>
    .coach
        text-align: center
</style>