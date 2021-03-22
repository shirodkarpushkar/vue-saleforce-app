<template>
  <v-app>
    <v-main>
      <transition name="fade" mode="out-in">
        <RouterView :key="$route.fullPath" />
      </transition>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {},

  data: () => ({
    //
  }),
}
</script>
<style lang="scss" >
@import "./assets/css/style.scss";
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
