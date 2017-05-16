import Vue from 'vue'
import Bootstrap from 'bootstrap-vue'
import store from './store'
import Main from './components/Main.vue'

Vue.use(Bootstrap)

new Vue({
  store,
  el: '#application',
  render: append => append(Main)
})
