<template>
  <div class="main">
    <div class="section">
      <div>Elecard</div>
    </div>
    <div class="content">
      <router-view />
    </div>
    <div class="section"></div>
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Home",
  components: {},
};
</script>

<style lang="scss" scoped>
.main {
  > :first-child {
  }
  > :last-child {
    bottom: 0;
  }
  .section {
    position: fixed;
    height: 60px;
    width: 100%;
    background-color: #2f3542;
  }
}


</style>
