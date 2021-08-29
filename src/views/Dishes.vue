<template>
    <div class="dishes">
        <TopBar v-bind:route="'orders'"/>
        <div class="list">
            <Card v-for="data in dishes" v-bind:key="data.title" v-bind:data="data" />
        </div>
    </div>
</template>

<script>
import TopBar from '@/components/dishes/TopBar.vue';
import Card from '@/components/dishes/Card.vue';
import dishJson from '@/data/dish';
export default {
    name: 'Dishes',
    components: {
        TopBar,
        Card
    },
    data: function(){
        return{
            dishes: dishJson
        }
    },
}
</script>

<style lang="sass" scoped>
    .dishes
        .list
            padding: 30px 15px
</style>