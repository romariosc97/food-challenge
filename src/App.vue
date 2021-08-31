<template>
  <router-view/>
</template>
<script>
export default {
  components: {  },
  beforeCreate: function() {
    if(window.innerWidth>540)
      this.$router.push('/unsupported-device')
  }
}
</script>
<style lang="sass">
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap')
  *
    margin: 0 
    padding: 0
    border: 0
    font-family: 'Open Sans', sans-serif
  a
    text-decoration: none
  @media (max-width: 350px)
    html
      font-size: 13px
</style>
