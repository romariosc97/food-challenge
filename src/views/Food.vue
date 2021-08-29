<template>
  <MobileNavbar />
  <div class="food">
    <UnderConstruction v-bind:route="'Comidas'"/>
  </div>
</template>

<script>
import MobileNavbar from '@/components/navigation/MobileNavbar.vue';
import UnderConstruction from '@/components/UnderConstruction.vue';
export default {
  name: 'Food',
  components: {
    MobileNavbar,
    UnderConstruction
  },
  methods:{
    
  }
}
</script>

<style lang="sass" scoped>
    .food
        text-align: center
</style>