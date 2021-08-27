<template>
    <div class="menu">
        <img class="profile" src="@/assets/images/profile.jpg" alt="">
        <div class="label">Mis pedidos</div>
        <div class="circle-container">
            <div class="half"></div>
            <div class="level">2</div>
        </div>
        <div class="auto">
            <div class="circle"></div>
            <p>Auto</p>
        </div>
        <div class="icon-container">
            <img class="icon" src="@/assets/images/concierge-bell-config.png" alt="Concierge bell config">
        </div>
    </div>
</template>

<script>
export default {
  name: 'FloatingButton',
}
</script>

<style lang="sass" scoped>
    .menu
        padding: 14px 14px
        display: flex
        align-items: center
        font-weight: 600
        img
            &.profile
                object-fit: cover
                border-radius: 50%
                width: 30px
                height: 30px
        .label
            margin-left: 12px
            display: inline-block
            font-size: 1.25rem
            color: #606060
        .circle-container, .half
            position: relative
            margin-left: auto
            height: 20px
            width: 20px
            border-radius: 50%
            border: 3px solid #35B266
            transform: rotate(-45deg)
            .half
                position: absolute
                border-top: 3px solid #E8E8E8
                border-left: 3px solid #E8E8E8
                left: -3px
                top: -3px
                transform: rotate(0deg)
            .level
                position: absolute
                font-size: 12px
                color: #606060
                left: 50%
                transform: translateX(-50%) rotate(45deg)
                top: 2px
        .auto
            display: flex
            align-items: center
            border: 2px solid #E8E8E8
            border-radius: 12px
            padding: 2px 4px 2px 4px
            margin-left: 16px
            .circle
                display: inline-block
                width: 16px
                height: 16px
                border-radius: 50%
                background: #E8E8E8
            p
                margin-left: 2px
                display: inline-block
                color: #606060
                font-size: 0.75rem
        .icon-container
            display: flex
            align-items: center
            margin-left: 16px
            position: relative
            img
                &.icon
                    color: #606060
                    height: 24px
                    width: 33px
</style>