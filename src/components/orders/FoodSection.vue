<template>
    <div class="food-container">
        <FoodCard v-for="data in food" v-bind:key="data.title" v-bind:data="data" />
    </div>
</template>

<script>
import FoodCard from '@/components/orders/FoodCard.vue';
import foodJson from '@/data/food';
export default {
    name: 'FoodSection',
    components: { FoodCard },
    data: function(){
        return{
            food: foodJson
        }
    }
}
</script>

<style lang="sass" scoped>
    .food-container
        margin-bottom: 75px
        padding: 14px
</style>