<template>
  <div class="home">
      <h1>Vista de Hoy</h1>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    
  },
  computed:{
    message(){ return this.$store.state.message; }
  }
}
</script>

<style lang="sass">
    .home
      text-align: center
</style>
