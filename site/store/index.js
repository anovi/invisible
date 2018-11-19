import Vuex from 'vuex'
import data from '~/assets/data'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      grid: false,
      data: data,
      toc: []
    }),
    mutations: {
      buildTOC (state, items) {
        state.toc = items
      },
      toggleGrid (state) {
        state.grid = !state.grid
      }
    }
  })
}

export default createStore