<template>
  <div class="category_item">
    <div class="switch">
      <div @click="open = !open">
        <component :is="svgSwitch" />
      </div>
    </div>
    <div>
      <div class="title">{{ categoryItem.image | imageTitle }}</div>
      <div v-show="open" class="item_content">
        <div>
          <div class="img" @click="openImg = true">
            <img :src="imgPath" />
          </div>
          <div v-if="openImg" class="open_img">
            <div class="img_area">
              <div class="close" @click="openImg = false">Скрыть</div>
              <img :src="imgPath" alt="" />
            </div>
          </div>
          <div>{{ categoryItem.filesize | fileSize }}</div>
        </div>
        <div>{{ categoryItem.timestamp | date }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import SvgHide from "@/components/svg/SvgHide.vue";
import SvgOpen from "@/components/svg/SvgOpen.vue";

import { mixinSwitch } from "@/mixins/mixin.js";

export default {
  mixins: [mixinSwitch],
  props: {
    categoryItem: Object,
  },
  data() {
    return {
      openImg: false,
      defPath: "http://contest.elecard.ru/frontend_data/",
    };
  },
  computed: {
    imgPath() {
      return this.defPath + this.categoryItem.image;
    },
  },
  components: {
    SvgOpen,
    SvgHide,
  },
};
</script>

<style lang="scss" scoped>
.category_item {
  display: flex;
  font-size: 1.25rem;
  margin-bottom: 1em;
  .switch {
    padding: 0.4em 1em;
    > div {
      cursor: pointer;
    }
  }
  .title {
    padding: 0.5em 1em;
    border-radius: 5px;
    background-color: #2f3542;
    font-size: 1rem;
    width: 500px;
  }
  .item_content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;
    padding: 0.8em 0.5em;
    > :first-child {
      display: flex;
      align-items: center;
      > div {
        margin-right: 1em;
      }
    }
    .img {
      width: 50px;
      height: 25px;
      border-radius: 5px;
      overflow: hidden;
      cursor: pointer;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .open_img {
      position: fixed;
      top: 0;
      left: 0;
      background-color: rgba(47, 53, 66, 0.8);
      z-index: 1000;
      height: 100vh;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      .img_area {
        position: relative;
        img{
          border-radius: 5px;
        }
        .close {
          position: absolute;
          right: 0;
          top: -30px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>