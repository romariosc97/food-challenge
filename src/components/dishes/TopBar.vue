<template>
    <div class="top-bar">
        <router-link v-bind:to="'/' + route" class="link">
            Atrás
        </router-link>
        <div class="title">{{route === 'orders' ? 'Almuerzo' : 'Detalle'}}</div>
        <div class="date" v-show="route === 'orders'">
            <div class="day">{{currentDay.text}}</div>
            <div class="number">{{currentDay.number}}</div>
        </div>
        <div class="like" v-show="route === 'dishes'">
            <img src="@/assets/images/like.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: 'TopBar',
    props: {
        route: String
    },
    computed: {
        currentDay(){ return this.$store.state.order.currentDay; }
    }
}
</script>

<style lang="sass" scoped>
    .top-bar
        box-shadow: 0px 2px 4px rgba(232, 232, 232, 0.5)
        color: #606060
        padding: 7px 15px
        display: flex
        align-items: center
        font-weight: 600
        min-height: 46.4px 
        .link
            font-size: 0.875rem
            text-decoration: underline
        .title
            margin-left: auto
            margin-right: auto
            font-size: 1.25rem
        .date
            .day
                font-size: 0.875rem
            .number
                font-size: 1.25rem
        .like
            height: 19px
            img
                width: 21px
                height: 19px
</style>