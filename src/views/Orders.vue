<template>
  <div class="orders">
    <TopBar />
  </div>
</template>

<script>
import TopBar from '@/components/orders/TopBar.vue';
export default {
  name: 'Orders',
  components: { TopBar },
  methods:{
    updateMessage(){
      this.$store.commit('updateMessage', 'El bandido ha caído.')
    }
  }
}
</script>

<style lang="sass">
  
</style>