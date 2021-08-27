<template>
  <MobileNavbar />
  <router-view/>
</template>
<script>
  import MobileNavbar from '@/components/navigation/MobileNavbar.vue';
  export default {
    components: { MobileNavbar }
  }
</script>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap');
  * { 
    margin: 0; 
    padding: 0;
    border: 0;
  }
  body{
    font-family: 'Open Sans', sans-serif;
  }
  a{
    text-decoration: none;
  }
</style>
