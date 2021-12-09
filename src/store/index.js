import Vue from 'vue'
import Vuex from 'vuex'

// Корректируем название 
function titleСorrection(title) {
  let index = title.match(/\//).index
  return title.substring(index + 1)
}


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    photo: []
  },
  getters: {
    sortedArray: state => type => {
      let sortedArray = state.photo.slice()
      switch (type) {
        case 'category':
          sortedArray
          break;
        case 'date':
          sortedArray.sort((a, b) => a.timestamp > b.timestamp ? 1 : -1)
          break;
        case 'size':
          sortedArray.sort((a, b) => a.filesize > b.filesize ? 1 : -1)
          break;
        case 'title':
          sortedArray.sort((a, b) => titleСorrection(a.image) > titleСorrection(b.image) ? 1 : -1)
          break;
      }
      return sortedArray
    }
  },
  mutations: {
    setPhoto(state, newPhotoArr) {
      state.photo = newPhotoArr
    },
    removeEl(state, indexEl) {
      state.photo.splice(indexEl, 1)
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
    },
    closeCard({ state, commit, dispatch }, cardSrc) {
      let index = state.photo.findIndex(el => el.image === cardSrc)
      commit("removeEl", index)
      dispatch("setToLocalStorage")
    },
    resetChanges({ dispatch }) {
      localStorage.removeItem("photo")
      dispatch("getPhoto")
    }
  },
  modules: {
  }
})
