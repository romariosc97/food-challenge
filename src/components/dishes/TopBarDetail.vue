<template>
    <div class="top-bar">
        <router-link v-bind:to="'/dishes'" class="link">
            Atrás
        </router-link>
        <div class="title">Detalle</div>
        <div class="like">
            <img v-show="!like" v-on:click="switchLike" src="@/assets/images/like.png" alt="">
            <img v-show="like" v-on:click="switchLike" src="@/assets/images/like-fill.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: 'TopBar',
    props: {
        data: Object
    },
    computed: {
        currentDay(){ return this.$store.state.order.currentDay; },
        like(){
            let like;
            if(this.data.id in this.$store.state.like)
                like = this.$store.state.like[this.data.id];
            else
                like = false;
            return like; 
        }
    },
    data: function(){
        return{
        }
    },
    methods: {
        switchLike: function(){
            let tmp = !this.like;
            this.$store.commit('updateLike', {[this.data.id]: tmp});
        }
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
        .like
            height: 19px
            img
                width: 21px
                height: 19px
</style>