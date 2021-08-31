<template>
    <div :class="'delivery' + (warning ? ' warning' : '')">
        <img class="briefcase" src="@/assets/images/briefcase.png" alt="">
        <div class="text">
            <div class="label">Entregar en</div>
            <div class="address">Av. Mariscal Ramón Castilla 1155</div>
        </div>
        <FontAwesomeIcon v-on:click="showWarning" icon="chevron-right" />
    </div>
    <div v-show="warning" class="warning-delivery">
        Solo tenemos disponible un horario de entrega para esta dirección
    </div>
</template>

<script>
export default {
    name: 'Delivery',
    data: function(){
        return{
            warning: false
        }
    },
    methods:{
        showWarning: function() {
            this.warning = true;
        }
    }
}
</script>

<style lang="sass" scoped>
    .delivery
        padding: 10px 14px
        display: flex
        align-items: center
        border-bottom: 1px solid #E8E8E8
        &.warning
            border-bottom: none
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
    .warning-delivery
        font-size: 0.75rem
        color: #FFB321
        background: #FFF6E5
        border-top: 1px solid rgba(255, 179, 33, 0.4)
        border-bottom: 1px solid rgba(255, 179, 33, 0.4)
        padding: 8px 14px
</style>