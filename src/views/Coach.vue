<template>
  <MobileNavbar />
  <div class="coach">
    <h1>Vista de Coach.</h1>
  </div>
</template>

<script>
import MobileNavbar from '@/components/navigation/MobileNavbar.vue';
export default {
  name: 'Coach',
  components: {
    MobileNavbar
  },
  methods:{
    
  }
}
</script>

<style lang="sass" scoped>
    .coach
        text-align: center
</style>