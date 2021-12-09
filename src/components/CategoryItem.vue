<template>
  <div>
    <div @click="open = !open" class="switch">svg</div>
    <div>
      <div class="title">{{ categoryItem.image }}</div>
      <div>{{ categoryItem.filesize | fileSize }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    categoryItem: Object,
  },
  data() {
    return {
      open: false,
    };
  },
};
</script>

<style>
</style>