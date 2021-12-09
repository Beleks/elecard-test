<template>
  <div>
    <div class="panel">
      <div class="filters">
        <div>Сортировать по:</div>
        <div>
          <span
            v-for="filter in filters"
            :key="filter.title"
            :class="{ active: selectedFilter == filter.sort }"
            @click="changeFilter(filter.sort)"
          >
            {{ filter.title }}
          </span>
        </div>
      </div>
      <div class="pages">
        <div
          class="page"
          v-for="page in pagesList"
          :key="page"
          :class="{ active_page: page == selectedPage }"
          @click="selectedPage = page"
        >
          {{ page }}
        </div>
      </div>
    </div>
    <div class="cards">
      <Card v-for="photo in photoArr" :key="photo.image" :photo="photo" />
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  data() {
    return {
      selectedFilter: "category",
      filters: [
        { title: "Категории", sort: "category" },
        { title: "Дате", sort: "date" },
        { title: "Названию", sort: "title" },
        { title: "Размеру", sort: "size" },
      ],
      selectedPage: 1,
      photo: [],
    };
  },
  computed: {
    pagesList() {
      return Math.ceil(this.$store.state.photo.length / 50);
    },

    photoArr() {
      this.sortedArray();
      let startIndex = (this.selectedPage - 1) * 50;
      let cutArr = this.photo.slice(startIndex, startIndex + 50);
      return cutArr;
    },
  },
  methods: {
    sortedArray() {
      this.photo = this.$store.getters.sortedArray(this.selectedFilter);
    },
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
  align-items: center;
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
  .pages {
    display: flex;
    border: 1px solid #6f6ff0;
    border-radius: 5px;
    margin-left: 2.5em;
    overflow: hidden;
    .page {
      padding: 0.25em 0.625em;
      cursor: pointer;
      transition: background-color 0.3s ease-in-out;
    }
    .page:hover {
      background-color: #6f6ff081;
    }
    .active_page {
      background-color: #6f6ff0;
    }
  }
}
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>