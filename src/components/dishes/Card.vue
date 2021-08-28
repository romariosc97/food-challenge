<template>
    <div class="card">
        <img class="main" :src="data.img" alt="">
        <div class="details">
            <div class="title">{{data.title}}</div>
            <div class="commend">Recomendado</div>
            <span class="calories">{{data.calories}} Kcal</span>
            <div class="tags">
                <img v-for="tag in data.tags" v-bind:key="tag" :src="tag" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        data: Object
    }
}
</script>

<style lang="sass" scoped>
    .card
        border: 1px solid #E8E8E8
        box-sizing: border-box
        border-radius: 10px
        margin-bottom: 30px
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
            .commend
                position: absolute
                right: 15px
                top: -5px
                font-size: 0.875rem
                color: #35B266
                padding: 5px 16px
                background: rgba(53, 178, 102, 0.1)
            .calories
                color: #606060
                font-size: 0.9375rem
            .tags
                float: right
                display: inline-block
                img
                    margin-right: 17px
                    height: 20px
                    &:last-child
                        margin-right: 0px

</style>