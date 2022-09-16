import { getCookie } from '@/utils/cookies'
import { createStore } from 'vuex'

export default createStore({
  state () {
    return {
      connected : getCookie('token'),
    }
  },
  getters: {
    doneConnected (state) {
      return state.connected
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
