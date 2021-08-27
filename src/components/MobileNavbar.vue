<template>
  <div class="mobile-nav">
    <div class="pass-through"></div>
    <router-link to="/">
      <FontAwesomeIcon icon="calendar-alt" />
      <div class="label">Hoy</div>
    </router-link>
    <router-link to="/about">
      <FontAwesomeIcon icon="concierge-bell" />
      <div class="label">Mis pedidos</div>
    </router-link>
    <div class="floating-container">
      <FloatingButton />
    </div>
    <router-link to="/food">
      <FontAwesomeIcon icon="utensils" />
      <div class="label">Comidas</div>
    </router-link>
    <router-link to="/coach">
      <FontAwesomeIcon icon="user-md" />
      <div class="label">Coach</div>
    </router-link>
  </div>
</template>

<script>
import FloatingButton from '@/components/navigation/FloatingButton.vue';
export default {
  components: {
    FloatingButton
  },
  data: function () {
    return {
    }
  },
}
</script>

<style lang="scss" scoped>
  .mobile-nav{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    width: 100%;
    //box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.09);
    a{
      padding: 10px 0px;
      text-align: center;
      svg{
        width: 17px;
        height: 17px;
        color: #9A9A9A;
      }
      .label{
        font-size: 0.875rem;
        white-space: nowrap;
        clear: both;
        overflow: hidden;
        color: #9A9A9A;
      }
    }
    .floating-container{
      width: 50px;
      position: relative;
    }
    .pass-through{
      background-image: url('./../assets/navbar7.png');
      left: 50%;
      transform: translateX(-50%);
      bottom: 10px;
      position: fixed;
      background-size: cover;
      background-repeat: no-repeat;
      z-index: -1;
    }
  }
</style>