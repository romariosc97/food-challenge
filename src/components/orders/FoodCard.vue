<template>
    <div v-bind:class="'food-card' + (data.active ? ' active' : '')">
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
</template>

<script>
export default {
    name: 'FoodCard',
    components: { },
    methods:{
    },
    props: {
        data: Object
    }
}
</script>

<style lang="sass" scoped>
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
</style>