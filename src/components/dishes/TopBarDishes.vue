<template>
    <div class="top-bar">
        <router-link v-bind:to="'/'" class="link">
            Atrás
        </router-link>
        <div class="title">Almuerzo</div>
        <div class="date">
            <div class="day">{{currentDay.text}}</div>
            <div class="number">{{currentDay.number}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TopBar',
    computed: {
        currentDay(){ return this.$store.state.order.currentDay; }
    }
}
</script>

<style lang="sass" scoped>
    .top-bar
        box-shadow: 0px 2px 4px rgba(232, 232, 232, 0.5)
        color: #606060
        padding: 0.5rem 15px
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
                text-align: center
                font-size: 1.25rem
</style>