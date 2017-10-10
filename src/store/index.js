import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import getters from './getters'
import permission from './modules/permission'

import createLogger from 'vuex/dist/logger'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  modules: {
    user,
    permission
  },
  getters,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

export default store
