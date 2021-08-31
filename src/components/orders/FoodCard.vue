<template>
    <div v-show="dishes.length<=0" v-bind:class="'food-card' + (data.active ? ' active' : '')">
        <img class="image" v-bind:src="data.img" alt="">
        <div class="text">
            <div class="title">{{data.title}}</div>
            <div class="calories">{{data.calories}} Kcal</div>
        </div>
        <div class="action">
            <router-link to="/dishes">
                <button v-if="data.active">Agregar</button>
            </router-link>
            <div v-if="!data.active">No tienes créditos</div>
        </div>
    </div>
    
    <div class="order-card" v-show="dishes.length>0">
        <div class="dish" v-for="(dish, index) in dishes" v-bind:key="dish.title">
            <ImgFull v-bind:imgFullStyle="imgFullStyle" v-bind:data="dish" />
            <div class="detail">
                <div class="title">{{dish.title || dish.name}}</div>
                <div class="calories">{{dish.calories}} Kcal</div>
            </div>
            <img v-on:click="deleteDish(index)" class="delete" src="@/assets/images/delete.png" alt="Eliminar">
            <div class="divider" v-if="index<dishes.length-1"></div>
        </div>
    </div>
</template>

<script>
import { calcProgressBar } from '@/helpers';
import ImgFull from '@/components/others/ImgFull.vue';
export default {
    name: 'FoodCard',
    components: { ImgFull },
    data: function(){
        return{
            imgFullStyle: {"width": '85px', "height": '70px', "border-radius": '10px', "object-fit": 'cover'}
        }
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
                if(this.data.id in this.order[this.order.currentDay.number])
                    dishes = this.order[this.order.currentDay.number][this.data.id].dishes;
            }
            if(!dishes)
                dishes = [];
            return dishes;
        },
    },
    methods:{
        deleteDish: function(dishIndex) {
            let deletedItem;
            let tmp = this.dishes.filter((v, index) => {
                let pass = true;
                if(index===dishIndex){
                    pass = false;
                    deletedItem = v;
                }
                return pass;
            });
            let { value, percent } = calcProgressBar(this.progressBar, deletedItem.calories, '-');
            this.$store.commit('updateProgressBar', {...this.progressBar, value: value, percent: percent});

            this.$store.commit('updateDishes', tmp);
        }
    },
    created: function () {
    }
}
</script>

<style lang="sass" scoped>
    .order-card
        margin-bottom: 14px
        border: 1px solid #E8E8E8
        border-radius: 9px
        padding: 5px
        .dish
            display: flex
            align-items: center
            flex-wrap: wrap
            .divider
                width: 98%
                margin-top: 10px
                margin-bottom: 10px
                margin-left: auto
                margin-right: auto
                height: 1px
                background: #E8E8E8
            .detail
                margin-left: 15px
                font-weight: 600
                .title
                    color: #35B266
                    font-size: 0.875rem
                    margin-bottom: 5px
                .calories
                    color: #A9A9A9
                    font-size: 0.75rem
            img.delete
                margin-left: auto
                margin-right: 10px
                width: 17px
                height: 19px
            
    .food-card
        margin-bottom: 14px
        background: #FAFAFA
        border: 1px solid #E8E8E8
        border-radius: 9px
        padding: 22px 14px
        display: flex
        align-items: center
        &.active
            background: #FFF
        .image
            width: 39px
            height: 39px
        .text
            margin-left: 14px
            font-weight: 600
            .title
                font-size: 0.875rem
                color: #606060
                margin-bottom: 5px
            .calories
                font-size: 0.75rem
                color: #A9A9A9
        .action
            margin-left: auto
            div
                font-size: 0.9375rem
                color: #A9A9A9
            button
                font-size: 0.9375rem
                color: #606060
                font-weight: 600
                border-radius: 8px
                padding: 12px 37px
                background: #FFD538
    @media (max-width: 350px)
        .food-card
            .action
                button
                    padding: 12px 22px
</style>