<template>
  <button class="floating">
    <FontAwesomeIcon icon="plus" />
  </button>
</template>

<script>
export default {
  name: 'FloatingButton',
}
</script>

<style lang="sass" scoped>
  .floating
    position: absolute
    bottom: 10px
    left: -5px
    background: #35B266
    border-radius: 50%
    width: 50px
    height: 50px
    z-index: 2
    svg
      color: #FFF
</style>
