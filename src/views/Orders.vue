<template>
  <MobileNavbar />
  <div class="orders">
    <TopBar />
    <Calendar />
    <Delivery />
    <FoodSection />
  </div>
</template>

<script>
import MobileNavbar from '@/components/navigation/MobileNavbar.vue';
import TopBar from '@/components/orders/TopBar.vue';
import Calendar from '@/components/orders/Calendar.vue';
import Delivery from '@/components/orders/Delivery.vue';
import FoodSection from '@/components/orders/FoodSection.vue';
export default {
  name: 'Orders',
  components: { MobileNavbar, TopBar, Calendar, Delivery, FoodSection },
  methods:{
  }
}
</script>

<style lang="sass" scoped>
  
</style>