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
    },
    computed:{
        order(){ return this.$store.state.order; },
    },
    created: function () {
        if(Object.keys(this.order).length<=2){
            let foodState = {};
            this.food.forEach(v => {
                foodState[v.id] = {dishes: []};
            });
            this.$store.commit('createOrderFood', {...foodState});
            this.$store.commit('updateFood', this.food);
        }
    }
}
</script>

<style lang="sass" scoped>
    .food-container
        margin-bottom: 75px
        padding: 14px
</style>