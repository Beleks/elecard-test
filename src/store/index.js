import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    photo: []
  },
  getters: {
    sortedArray: state => type => {
      let sortedArray = []
      switch (type) {
        case 'category':
          sortedArray = state.photo
          break;

        default: 'category'
          break;
      }
      return sortedArray
    }
  },
  mutations: {
    setPhoto(state, newPhotoArr) {
      state.photo = newPhotoArr
    }
  },
  actions: {
    async getPhoto({ commit, dispatch }) {
      try {
        await fetch("http://contest.elecard.ru/frontend_data/catalog.json")
          .then(response => response.json())
          .then(obj => {
            commit("setPhoto", obj)
            dispatch("setToLocalStorage")
          })
      }
      catch {

      }
    },
    getPhotoFromLocalStorage({ commit }) {
      const newPhotoArr = JSON.parse(localStorage.getItem("photo"))
      console.log('getPhotoFromLocalStorage');
      commit("setPhoto", newPhotoArr)
    },
    setToLocalStorage({ state }) {
      localStorage.setItem("photo", JSON.stringify(state.photo))
    }
  },
  modules: {
  }
})
