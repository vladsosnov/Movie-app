<template>
  <div class="app">
    <app-header
      :autoCompleteMoviesTitle="moviesTitleToAutoComplete"
      @setPathForFetch="fetchSearchMoveis"
    />
    <search-movie-result
      :movies="allSearchMovies"
      @close-results="isSearchMovesResultVisible"
    />
    <router-view />
    <app-footer />
  </div>
</template>

<script>
import axios from 'axios'

import AppHeader from './components/Shared/AppHeader'
import SearchMovieResult from './components/SearchMovieResult'
import AppFooter from './components/Shared/AppFooter'

export default {
  name: 'App',
  components: {
    AppHeader,
    SearchMovieResult,
    AppFooter
  },
  data () {
    return {
      allSearchMovies: {},
      moviesTitleToAutoComplete: ''
    }
  },
  async mounted () {
    await this.fetchMoviesTitle()
  },
  computed: {
    searchMovies () {
      return this.$store.getters['searchMovies']
    }
  },
  methods: {
    async fetchMoviesTitle () {
      try {
        const fetchData = await axios.get(`${process.env.VUE_APP_API_URL}/discover/movie?sort_by=popularity.desc&api_key=${process.env.VUE_APP_API_KEY}`)
        this.moviesTitleToAutoComplete = Object.values(fetchData.data.results).map(item => item.title)
      }
      catch (error) {
        console.log(error)
      }
    },
    async fetchSearchMoveis (allPath) {
      try {
        const fetchSeatchData = await axios.get(allPath)
        this.allSearchMovies = {...fetchSeatchData.data.results}

        await this.$store.dispatch('setSearchMovies', this.allSearchMovies)
      }
      catch (error) {
        console.log(error)
      }
    },
    isSearchMovesResultVisible () {
      this.$store.commit('setSearchMoviesVisibility')
    }
  }
}
</script>

<style lang="scss">
@import url('./assets/normalize.css');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');

html {
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  background-color: #f2f2f2;

  @media (max-width: 1024px){
    font-size: 12px;
  }
}
</style>
