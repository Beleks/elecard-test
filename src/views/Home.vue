<template>
  <div class="main">
    <div class="section">
      <div class="title">
        <span>Elecard</span>
        <span>тестовое</span>
      </div>
      <div class="tabs">
        <router-link to="/cards" v-slot="{ navigate, href, isActive }" custom>
          <div :href="href" @click="navigate" :class="{ linkActive: isActive }">
            <SvgCards />
            <div>Cards</div>
          </div>
        </router-link>
        <router-link to="/tree" v-slot="{ navigate, href, isActive }" custom>
          <div :href="href" @click="navigate" :class="{ linkActive: isActive }">
            <SvgTree />
            <div>Tree</div>
          </div>
        </router-link>
      </div>
      <div></div>
    </div>
    <div class="content">
      <div v-if="loading">Загрузка...</div>
      <div v-else><router-view /></div>
    </div>
    <div class="section"></div>
  </div>
</template>

<script>
import SvgCards from "@/components/svg/SvgCards.vue";
import SvgTree from "@/components/svg/SvgTree.vue";

export default {
  name: "Home",
  data() {
    return {};
  },
  computed: {
    loading() {
      if (this.$store.state.photo) {
        return true;
      } else {
        return false;
      }
    },
  },
  mounted() {
    if (localStorage.getItem("photo")) {
      // this.$store.dispatch("getPhotoFromLS");
    } else {
      this.$store.dispatch("getPhoto");
    }
  },
  components: {
    SvgCards,
    SvgTree,
  },
};
</script>

<style lang="scss">
.svg {
  height: 24px;
  width: 24px;
  svg {
    stroke: #f1f1fd;
    transition: stroke 0.3s ease-in-out;
  }
}
.linkActive {
  color: #6f6ff0;
  svg {
    stroke: #6f6ff0;
  }
}
//

.main {
  > :first-child {
    padding: 1.5em 2.5em;
    display: flex;
    align-items: center;
    > div {
      margin-right: 5em;
    }
    .title {
      display: flex;
      align-items: center;
      > :first-child {
        font-family: "Roboto Medium";
        font-size: 1.5rem;
        margin-right: 1.25em;
        color: #6f6ff0;
      }
      > :last-child {
        color: rgba(241, 241, 253, 0.6);
      }
    }
    .tabs {
      display: flex;
      align-items: center;
      > div {
        display: flex;
        align-items: center;
        cursor: pointer;
        transition: color 0.3s ease-in-out;
        > :last-child {
          margin-left: 1em;
        }
      }
      > div:hover {
        color: #6f6ff0;
        svg {
          stroke: #6f6ff0;
        }
      }
      > :first-child {
        margin-right: 2.5em;
      }
    }
  }
  > :last-child {
    bottom: 0;
  }
  .section {
    position: fixed;
    height: 60px;
    width: 100%;
    background-color: #2f3542;
  }
  .content {
    padding: 90px 40px;
  }
}
</style>
