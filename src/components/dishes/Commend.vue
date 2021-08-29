<template>
    <div :class="'commend' + (absolute ? ' absolute' : ' inline-block')">Recomendado</div>
</template>

<script>
export default {
    name: 'Commend',
    props: {
        absolute: Boolean
    }
}
</script>

<style lang="sass" scoped>
    .commend
        color: #35B266
        background: rgba(53, 178, 102, 0.1)
        border-radius: 4px
        font-weight: 600
        &.absolute
            font-size: 0.875rem
            padding: 5px 16px
            position: absolute
            right: 15px
            top: -5px
        &.inline-block
            font-size: 0.71875rem
            padding: 4px 9px
            display: inline-block
</style>