<template>
    <div class="salads">
        <img class="main" :src="data.img" :alt="data.name">
        <div class="info">
            <div class="title">{{data.name}}</div>
            <Commend v-bind:absolute="false" />
            <div class="calories">
                <div class="value">{{data.calories}} Kcal</div>
                <img src="@/assets/images/info.png" alt="Info">
            </div>
        </div>
        <button v-show="!deleteIcon" v-on:click="addSalad" class="add">Agregar</button>
        <button v-show="deleteIcon" v-on:click="deleteDish" class="delete">Eliminar</button>
    </div>
</template>

<script>
import Commend from '@/components/dishes/Commend.vue';
import { calcProgressBar } from '@/helpers';
export default {
    name: 'SaladCard',
    components: {
        Commend
    },
    props: {
        data: Object
    },
    computed:{
        order(){ return this.$store.state.order; },
        progressBar(){ return this.$store.state.progressBar; },
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
    },
    data: function(){
        return{
            deleteIcon: false
        }
    },
    methods: {
        addSalad: function() {
            this.$store.commit('updateDishes', [...this.order[this.order.currentDay.number][this.order.currentFood].dishes, this.data]);

            let { value, percent } = calcProgressBar(this.progressBar, this.data.calories, '+');
            this.$store.commit('updateProgressBar', {...this.progressBar, value: value, percent: percent});
            this.deleteIcon = true;
        },
        deleteDish: function() {
            let deletedItem,
                dishesLength = this.dishes.length-1;
                this.dishes
            let tmp = this.dishes.filter((v, index) => {
                let pass = true;
                if(index===dishesLength){
                    pass = false;
                    deletedItem = v;
                }
                return pass;
            });
            let { value, percent } = calcProgressBar(this.progressBar, deletedItem.calories, '-');
            this.$store.commit('updateProgressBar', {...this.progressBar, value: value, percent: percent});

            this.$store.commit('updateDishes', tmp);
            this.deleteIcon = false;
        }
    }
}
</script>

<style lang="sass" scoped>
    .button
        margin-left: auto
        font-weight: 600
        font-size: 0.875rem
        color: #606060
        border-radius: 8px
        padding: 1rem 1.125rem
        height: fit-content
    .salads
        margin-top: 18px
        border: 1px solid #E8E8E8
        border-radius: 8px
        padding: 0.625rem
        display: flex
        align-items: center
        img.main
            height: 4.75rem
            width: 5.5rem
            object-fit: cover
            border-radius: 4px
        .info
            margin-left: 10px
            .title
                color: #211E1F
                font-size: 0.8125
                font-weight: 600
                margin-bottom: 4px
            .calories
                margin-top: 7px
                .value
                    color: #979797
                    font-size: 0.75rem
                    display: inline-block
                img
                    margin-left: 5px
                    width: 14px
                    height: 14px
        .add
            @extend .button
            background: #FFD538
        .delete
            @extend .button
            background: #FFD538
</style>