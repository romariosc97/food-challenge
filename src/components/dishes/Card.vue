<template>
    <router-link :to="'/dish/' + data.id" class="wrapper">
        <div class="card">
            <img class="main" :src="data.img" :alt="data.title">
            <div v-show="like" class="circle-like">
                <img src="@/assets/images/like-fill.png" alt="Liked">
            </div>
            <div class="details">
                <div class="title">{{data.title}}</div>
                <Commend v-bind:absolute="true" />
                <span class="calories">{{data.calories}} Kcal</span>
                <div class="tags">
                    <img v-for="tag in data.tags" v-bind:key="tag" :src="tag.img" :alt="tag.name">
                </div>
            </div>
        </div>
    </router-link>
</template>

<script>
import Commend from '@/components/dishes/Commend.vue';
export default {
    name: 'Card',
    components: {
        Commend
    },
    props: {
        data: Object
    },
    computed: {
        like(){
            let like;
            if(this.data.id in this.$store.state.like)
                like = this.$store.state.like[this.data.id];
            else
                like = false;
            return like; 
        }
    }
}
</script>

<style lang="sass" scoped>
    .wrapper
        display: block
        margin-bottom: 30px
        &:last-child
            margin-bottom: 0px
    .card
        border: 1px solid #E8E8E8
        box-sizing: border-box
        border-radius: 10px
        position: relative
        .circle-like
            border-radius: 50%
            position: absolute
            top: 12px
            display: flex
            align-items: center
            right: 12px
            background: #FFF
            padding: 5px 5px
            img
                width: 13px
                height: 12px
        img.main
            object-fit: cover
            height: 205px
            width: 100%
            border-top-left-radius: 10px
            border-top-right-radius: 10px
        .details
            position: relative
            padding: 5px 15px 10px 15px
            font-weight: 600
            .title
                color: #35B266
                font-size: 1.0625rem
                margin-bottom: 5px
            .calories
                color: #606060
                font-size: 0.9375rem
            .tags
                float: right
                display: inline-block
                img
                    margin-right: 17px
                    height: 1.25rem
                    &:last-child
                        margin-right: 0px

</style>