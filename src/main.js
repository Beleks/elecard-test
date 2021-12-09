import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.filter('fileSize', function (value) {
  return Math.round(value / 1000) + " КБ"
})
Vue.filter('date', function (value) {
  let newDate = new Date(Number(value))
  let months = ['Янв', 'Февр', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сент', 'Окт', 'Нояб', 'Дек'];
  let year = newDate.getFullYear();
  let month = months[newDate.getMonth()];
  let date = newDate.getDate();
  let hour = newDate.getHours();
  let min = newDate.getMinutes();
  let sec = newDate.getSeconds();
  let time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
  return time;
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
