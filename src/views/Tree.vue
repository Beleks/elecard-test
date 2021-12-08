<template>
  <div>{{photo}}</div>
</template>

<script>
export default {
  computed: {
    photo(){
      return this.$store.state.photo
    }
  },
};
</script>

<style lang="scss" scoped>
</style>