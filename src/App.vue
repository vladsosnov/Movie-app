<template>
  <div class="app">
    <app-header @setPathForFetch="fetchSearchMoveis" />
    <search-movie-result
      :search-movie="allSearchMovies"
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
      allSearchMovies: {}
    }
  },
  computed: {
    searchMovies () {
      return this.$store.getters['searchMovies']
    }
  },
  methods: {
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
