<template>
    <div class="dish-detail">
        <TopBarDetail v-bind:data="value"/>
        <div class="dish">
            <img class="main" :src="value.img" alt="" srcset="">
            <div class="title">{{value.title}}</div>
            <Commend v-bind:absolute="false" />
            <div class="ingredients"><span>Ingredientes: </span>{{value.ingredients}}</div>
            <div class="nutritional-fact">
                <div class="calories">
                    <div class="label">Kcal</div>
                    <div class="value">{{value.calories}}</div>
                </div>
                <div class="separator"></div>
                <div class="fat">
                    <div class="label">Grasa</div>
                    <div class="value">{{value.fat}}g</div>
                </div>
                <div class="separator"></div>
                <div class="carbohydrates">
                    <div class="label">Carbo</div>
                    <div class="value">{{value.carbohydrates}}g</div>
                </div>
                <div class="separator"></div>
                <div class="proteins">
                    <div class="label">Prote</div>
                    <div class="value">{{value.proteins}}g</div>
                </div>
            </div>
            <div class="tags">
                <div class="item" v-for="tag in value.tags" v-bind:key="tag.name" >
                    <img :src="tag.img" :alt="tag.name">
                    <div class="name">{{tag.name}}</div>
                </div>
            </div>
            <SaladCard v-for="salad in value.salads" v-bind:key="salad.name" v-bind:data="salad" />
            <div class="extra">
                <CheckBox v-bind:label="'Camote'"/>
                <CheckBox v-bind:label="'Papa'"/>
                <CheckBox v-bind:label="'Arroz'"/>
                <div class="divider"></div>
                <CheckBox v-bind:label="'Incluir picante'"/>
            </div>
            <div class="action">
                <button v-on:click="addDish" class="add-order">Agregar al pedido</button>
            </div>
        </div>
    </div>
</template>

<script>
import TopBarDetail from '@/components/dishes/TopBarDetail.vue';
import Commend from '@/components/dishes/Commend.vue';
import SaladCard from '@/components/dishes/SaladCard.vue';
import CheckBox from '@/components/form/CheckBox.vue';
import dishJson from '@/data/dish';
import { calcProgressBar } from '@/helpers';
export default {
    name: 'DishDetail',
    components: {
        TopBarDetail,
        Commend,
        SaladCard,
        CheckBox
    },
    computed: {
        idParameter(){ return parseInt(this.$route.params.id); },
        order(){ return this.$store.state.order; },
        progressBar(){ return this.$store.state.progressBar; }
    },
    data: function(){
        return{
            dishesJson: dishJson,
            value: {}
        }
    },
    methods:{
        addDish: function() {
            this.$store.commit('updateDishes', [...this.order[this.order.currentDay.number][this.order.currentFood].dishes, this.value]);

            let { value: progressBarValue, percent } = calcProgressBar(this.progressBar, this.value.calories, '+');
            this.$store.commit('updateProgressBar', {...this.progressBar, value: progressBarValue, percent: percent});
            this.$router.push('/')
        }
    },
    created: function () {
        this.dishesJson.forEach(v => {
            if(v.id === this.idParameter)
                this.value = v; 
        });
    }
}
</script>

<style lang="sass" scoped>
    .dish-detail
        .dish
            padding: 30px 15px
            img.main
                border-radius: 10px
                object-fit: cover
                width: 100%
                height: 205px
            .title
                font-weight: 700
                margin-bottom: 8px
                margin-top: 8px
                color: #211E1F
                font-size: 1.1875rem
            .ingredients
                color: #606060
                font-size: 0.9375rem
                margin-top: 18px
                span
                    font-weight: 600
            .nutritional-fact
                display: flex
                border-radius: 10px
                border: 1px solid #E8E8E8
                padding: 10px 29px
                margin-top: 20px
                div.separator
                    margin: 0px auto
                    width: 1px
                    background: #E8E8E8
                    display: inline-block
                    height: 38px
                div.calories, div.fat, div.carbohydrates, div.proteins
                    text-align: center
                    font-weight: 600
                    display: inline-block
                    .label
                        font-size: 0.75rem
                        color: #A9A9A9
                    .value
                        font-size: 1rem
                        color: #35B266
            .tags
                margin-top: 20px
                display: flex
                flex-wrap: wrap
                justify-content: space-between
                .item
                    display: inline-block
                    margin-bottom: 8px
                    &:last-child
                        margin-right: 0px
                    img
                        margin-right: 4px
                        height: 17px
                        width: 17px
                    .name
                        display: inline-block
                        font-weight: 600
                        color: #A9A9A9
                        font-size: 0.75rem
            .extra
                margin-top: 50px
                color: #606060
                font-size: 0.875rem
                .divider
                    margin-top: 21px
                    margin-bottom: 12px
                    border-bottom: 1px solid #E8E8E8
            .action
                margin-top: 24px
                .add-order
                    font-weight: 600
                    font-size: 0.875rem
                    color: #606060
                    background: #FFD538
                    border-radius: 8px
                    width: 100%
                    padding: 16px 0px
</style>