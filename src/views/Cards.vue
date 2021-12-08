<template>
  <div>
    <div class="panel">
      <div class="filters">
        <div>Сортировать по:</div>
        <div>
          <span
            v-for="filter in filters"
            :key="filter.title"
            :class="{ active: selectedFilter.title == filter.title }"
            @click="changeFilter(filter)"
          >
            {{ filter.title }}
          </span>
        </div>
      </div>
      <div class="pages"></div>
    </div>
    <Card v-for="photo in photoArr" :key="photo.image" :photo="photo"/>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  data() {
    return {
      selectedFilter: { title: "Категории", sort: "category" },
      filters: [
        { title: "Категории", sort: "category" },
        { title: "Дате", sort: "date" },
        { title: "Названию", sort: "title" },
        { title: "Размеру", sort: "size" },
      ],
      // C выбранной стр
      // photo: []
    };
  },
  computed: {
    photoArr() {
      console.log(this.selectedFilter.sort);
      return this.$store.getters.sortedArray(this.selectedFilter.sort);
    },
  },
  methods: {
    changeFilter(currentFilter) {
      this.selectedFilter = currentFilter;
    },
  },
  components: {
    Card,
  },
};
</script>

<style lang="scss" scoped>
.active {
  color: #6f6ff0;
}

.panel {
  display: flex;
  margin-bottom: 30px;
  .filters {
    display: flex;
    > :first-child {
      color: rgba(241, 241, 253, 0.6);
      margin-right: 1.8em;
    }
    span {
      margin-right: 1em;
      cursor: pointer;
      transition: color 0.3s ease-in-out;
    }
  }
}
</style>