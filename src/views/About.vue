<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button v-on:click="updateMessage()">Actualizar mensaje</button>
  </div>
</template>

<script>
export default {
  name: 'About',
  components: {
  },
  methods:{
    updateMessage(){
      console.log('me activé ochenta veces')
      this.$store.commit('updateMessage', 'El bandido ha caído.')
    }
  }
}
</script>