<template>
    <div class="food-container">
        <div class="disposable" v-show="dishes.length>0">
            <CheckBox v-on:click="switchCutlery" v-bind:label="''"/>
            <img src="@/assets/images/disposable.png" alt="Descartable">
            <span>Deseo cubiertos descartables</span>
        </div>
        <FoodCard v-for="data in food" v-bind:key="data.title" v-bind:data="data" />
    </div>
</template>

<script>
import FoodCard from '@/components/orders/FoodCard.vue';
import CheckBox from '@/components/form/CheckBox.vue';
import foodJson from '@/data/food';
export default {
    name: 'FoodSection',
    components: { FoodCard, CheckBox },
    data: function(){
        return{
            food: foodJson
        }
    },
    computed:{
        order(){ return this.$store.state.order; },
        dishes(){
            let dishes;
            if(this.order.currentDay.number in this.order){
                if(this.order.currentFood in this.order[this.order.currentDay.number])
                    dishes = this.order[this.order.currentDay.number][this.order.currentFood].dishes;
            }
            if(!dishes)
                dishes = [];
            return dishes;
        },
        cutlery(){
            let cutlery = false;
            if(this.order.currentDay.number in this.$store.state.cutlery){
                cutlery = this.$store.state.cutlery[this.order.currentDay.number];
            }
            return cutlery;
        },
    },
    methods: {
        switchCutlery: function(){
            let tmp = !this.cutlery;
            this.$store.commit('updateCutlery', {[this.order.currentDay.number]: tmp});
        }
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
    .disposable
        color: #606060
        font-size: 0.875rem
        margin-bottom: 15px
        display: flex
        align-items: center
        .input
            display: inline-block
        img
            width: 12px
            height: 14px
            margin-left: 10px
            margin-right: 6px
        span
            color: #606060
</style>