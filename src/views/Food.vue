<template>
  <MobileNavbar />
  <div class="food">
    <h1>Vista de comida.</h1>
  </div>
</template>

<script>
import MobileNavbar from '@/components/navigation/MobileNavbar.vue';
export default {
  name: 'Food',
  components: {
    MobileNavbar
  },
  methods:{
    
  }
}
</script>

<style lang="sass" scoped>
    .food
        text-align: center
</style>