<template>
    <div class="unsupported-device">
        <FontAwesomeIcon icon="laptop-code" />
        <div class="title">No disponible</div>
        <div class="description">La aplicación se encuentra optimizada únicamente para dispositivos móviles</div>
    </div>
</template>

<script>
export default {
    name: 'UnsupportedDevice',
}
</script>

<style lang="sass" scoped>
    .unsupported-device
        position: fixed
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)
        text-align: center
        width: 100%
        svg
            color: #606060
            width: 100px
            height: 100px
        .title
            color: #606060
            font-size: 2.25rem
            font-weight: 600
        .description
            padding: 0px 20px
            font-size: 1.25rem
            color: #606060
</style>