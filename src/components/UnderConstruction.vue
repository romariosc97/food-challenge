<template>
    <div class="under-construction">
        <FontAwesomeIcon icon="hammer" />
        <div class="title">En construcción</div>
        <div class="description">
            <span>"{{route}}"</span> se encuentra en desarrollo
        </div>
    </div>
</template>

<script>
export default {
    name: 'UnderConstruction',
    props: {
        route: String
    }
}
</script>

<style lang="sass" scoped>
    .under-construction
        margin-top: 35vh
        svg
            color: #A9A9A9
            width: 50px
            height: 50px
        .title
            color: #606060
            font-size: 2rem
            font-weight: 600
        .description
            font-size: 1rem
            color: #606060
            span
                font-weight: 600
</style>