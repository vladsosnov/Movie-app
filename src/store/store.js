import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    searchMovies: [],
    savedMovies: []
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
    }
  },
  actions: {
    setSearchMovies (context, searchMovies) {
      context.commit('setSearchMovies', searchMovies)
    },
    addMovieToSaved (context, movie) {
      context.commit('addMovieToSaved', movie)
    }
  }
})
