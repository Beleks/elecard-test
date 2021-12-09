<template>
  <div class="category">
    <div @click="open = !open" class="switch">svg</div>
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

export default {
  props: {
    category: Object,
  },
  data() {
    return {
      open: false,
    };
  },
  components: {
    CategoryItem,
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
  }
  .title {
    padding: 0.5em 1em;
    border-radius: 5px;
    background-color: #2f3542;
    font-size: 1.25rem;
    width: 300px;
  }
  .category_content {
    margin: 1em;
  }
}
</style>