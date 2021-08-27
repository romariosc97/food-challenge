<template>
  <div>
    <h5 class="title">AHRE {{msg}}</h5>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style lang="scss" scoped>
  $color: red;
  .title{
    color: $color;
  }
</style>
