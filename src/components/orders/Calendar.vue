<template>
    <div class="calendar">
        <div class="card active">
            <div class="text">Vier</div>
            <div class="number">27</div>
        </div>
        <div class="card">
            <div class="text">Sab</div>
            <div class="number">28</div>
        </div>
        <div class="card">
            <div class="text">Dom</div>
            <div class="number">29</div>
        </div>
        <div class="card">
            <div class="text">Lun</div>
            <div class="number">30</div>
        </div>
        <div class="card">
            <div class="text">Mar</div>
            <div class="number">31</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Calendar',
    computed:{
    }
}
</script>

<style lang="sass" scoped>
    .calendar
        padding: 8px 26px
        display: flex
        flex-direction: row
        justify-content: space-between
        border-bottom: 1px solid #E8E8E8
        .card
            border-radius: 8px
            padding: 5px 17px
            color: #C9C9C9
            &.active
                color: #606060
                background: #FFD538  
            .text
                font-size: 0.875rem
                font-weight: 400
            .number
                font-size: 1.25rem
                font-weight: 600
</style>