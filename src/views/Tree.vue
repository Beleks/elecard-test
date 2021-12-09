<template>
  <div>
    <Category
      :category="category"
      v-for="category in tree"
      :key="category.type"
      class="category"
    />
  </div>
</template>

<script>
import Category from "@/components/Category.vue";

export default {
  computed: {
    tree() {
      return this.$store.state.tree;
    },
  },
  methods: {},
  components: {
    Category,
  },
};
</script>

<style lang="scss" scoped>
</style>