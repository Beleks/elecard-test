<template>
  <div>
    <div class="img">Картинка</div>
    <div>
      <div>
        <span>{{ photo.category }}</span>
        <span>{{ photo.timestamp }}</span>
      </div>
      <div>{{ photo.filesize }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    photo: Object,
  },
};
</script>

<style>
</style>