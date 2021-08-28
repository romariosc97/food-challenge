<template>
    <div class="top-bar">
        <router-link to="/orders" class="link">
            Atrás
        </router-link>
        <div class="title">Almuerzo</div>
        <div class="date">
            <div class="day">Vie</div>
            <div class="number">27</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'TopBar',
  components: {
  },
  methods:{
    
  }
}
</script>

<style lang="sass" scoped>
    .top-bar
        box-shadow: 0px 2px 4px rgba(232, 232, 232, 0.5)
        color: #606060
        padding: 8px 15px
        display: flex
        align-items: center
        font-weight: 600
        .link
            font-size: 0.875rem
            text-decoration: underline
        .title
            margin-left: auto
            margin-right: auto
            font-size: 1.25rem
        .date
            .day
                font-size: 0.875rem
            .number
                font-size: 1.25rem
</style>