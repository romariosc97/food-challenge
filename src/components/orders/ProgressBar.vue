<template>
    <div class="progress-bar">
        <span class="min">{{progressBar.value}} Kcal</span>
        <span class="max">{{progressBar.max}} Kcal</span>
        <div class="progress">
            <div class="completed" v-bind:style="`width: ${progressBar.percent}%`"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProgressBar',
    computed:{
        progressBar(){ return this.$store.state.progressBar; },
    }
}
</script>

<style lang="sass" scoped>
    .progress-bar
        padding: 0px 14px 14px 14px
        .min, .max
            font-size: 0.875rem
            font-weight: 600
            color: #606060
        .max
            float: right
        .progress, .completed
            border-radius: 2px
            margin-top: 4px
            height: 6px
        .progress
            background: #E8E8E8
            width: 100%
        .completed
            background: #FFD538
</style>