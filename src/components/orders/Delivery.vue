<template>
    <div class="delivery">
        <img class="briefcase" src="@/assets/images/briefcase.png" alt="">
        <div class="text">
            <div class="label">Entregar en</div>
            <div class="address">Av. Mariscal Ramón Castilla 1155</div>
        </div>
        <FontAwesomeIcon icon="chevron-right" />
    </div>
</template>

<script>
export default {
    name: 'Delivery',
    computed:{
    }
}
</script>

<style lang="sass" scoped>
    .delivery
        padding: 10px 14px
        border-bottom: 1px solid #E8E8E8
        display: flex
        align-items: center
        .briefcase
            width: 40px
            height: 34px
        .text
            margin-left: 10px
            font-weight: 600
            .label
                font-size: 0.875rem
                color: #606060
            .address
                font-size: 0.75rem
                color: #A9A9A9
        svg
            color: #606060
            margin-left: auto
</style>