<template>
  <div class="category">
    <div class="switch">
      <div @click="open = !open">
        <component :is="svgSwitch" />
      </div>
    </div>
    <div>
      <div class="title">{{ category.type }}</div>
      <div class="category_content" v-show="open">
        <CategoryItem
          v-for="item in category.items"
          :key="item.image"
          :categoryItem="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CategoryItem from "@/components/CategoryItem.vue";
import SvgHide from "@/components/svg/SvgHide.vue";
import SvgOpen from "@/components/svg/SvgOpen.vue";

import { mixinSwitch } from "@/mixins/mixin.js";

export default {
  mixins: [mixinSwitch],
  props: {
    category: Object,
  },
  components: {
    CategoryItem,
    SvgOpen,
    SvgHide,
  },
};
</script>

<style lang="scss" scoped>
.category {
  display: flex;
  font-size: 1.25rem;
  margin-bottom: 1em;
  .switch {
    padding: 0.5em 1em;
    > div {
      cursor: pointer;
    }
  }
  .title {
    padding: 0.5em 1em;
    border-radius: 5px;
    background-color: #2f3542;
    font-size: 1.25rem;
    width: 500px;
  }
  .category_content {
    margin: 1em;
  }
}
</style>