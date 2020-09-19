import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    searchMovies: [],
    savedMovies: [],
    isSearchMovieResultVisible: false
  },
  getters: {
    searchMovies (state) {
      return state.searchMovies
    }
  },
  mutations: {
    setSearchMovies (state, searchMovies) {
      state.searchMovies = searchMovies
    },
    addMovieToSaved (state, movie) {
      state.savedMovies.push({
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path,
        overview: movie.overview
      })
    },
    async deleteMovieFromSaved (state, id) {
      const index = state.savedMovies.findIndex(item => item.id === id)

      state.savedMovies.splice(index, 1)
    },
    setSearchMoviesVisibility (state) {
      state.isSearchMovieResultVisible = !state.isSearchMovieResultVisible
    }
  },
  actions: {
    setSearchMovies (context, searchMovies) {
      context.commit('setSearchMovies', searchMovies)
    },
    addMovieToSaved (context, movie) {
      context.commit('addMovieToSaved', movie)
    },
    async deleteMovieFromSaved (context, id) {
      context.commit('deleteMovieFromSaved', id)
    },
  }
})
