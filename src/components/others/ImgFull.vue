<template>
    <img v-on:click="switchFull" :style="(full ? '' : imgFullStyle)" :class="'img-full' + (full ? ' full' : '')" :src="data.img" :alt="data.name">
    <div v-on:click="switchFull" v-show="full" class="background-full"></div>
</template>

<script>
export default {
    name: 'ImgFull',
    props: {
        data: Object,
        imgFullStyle: Object
    },
    data: function(){
        return{
            full: false
        }
    },
    methods: {
        switchFull: function() {
            this.full = !this.full;
        }
    }
}
</script>

<style lang="sass" scoped>
    .position
        position: fixed
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)
    .img-full
        &.full
            border-radius: 8px
            transition: 0.2s width ease-in-out
            width: 92%
            z-index: 2
            &
                @extend .position
    .background-full
        @extend .position
        width: 100%
        height: 1000px
        background: #D8D8D8
</style>