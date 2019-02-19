import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import ApiModule from './Api'

Vue.use(Vuex)

export default new Store({
  modules: {
    Api: ApiModule
  }
})
