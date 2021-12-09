<template>
  <div class="card">
    <div class="img">
      <img :src="imgPath" />
      <div class="close"><SvgClose /></div>
    </div>
    <div class="desc">
      <div>
        <span>{{ photo.category }}</span>
        <span>{{ photo.timestamp }}</span>
      </div>
      <div>{{ photo.filesize }}</div>
    </div>
  </div>
</template>

<script>
import SvgClose from "@/components/svg/SvgClose.vue";

export default {
  props: {
    photo: Object,
  },
  data() {
    return {
      defPath: "http://contest.elecard.ru/frontend_data/",
    };
  },
  computed: {
    imgPath() {
      return this.defPath + this.photo.image;
    },
  },
  components: {
    SvgClose,
  },
};
</script>

<style lang="scss" scoped>
.card {
  background-color: #2f3542;
  width: 300px;
  height: 230px;
  margin: 0 2em 2.5em 0;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  .img {
    height: 150px;
    background-color: gainsboro;
    overflow: hidden;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      // width: 100%;
    }
    .close {
      height: 30px;
      width: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(255, 255, 255, 0.479);
      // backdrop-filter: blur(20px);
      border-radius: 10px;
      // backdrop-filter: brightness(60%);
      cursor: pointer;
      position: absolute;
      top: 10px;
      right: 10px;
    }
  }
  .desc {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1em 1.25em;
    > :first-child {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>