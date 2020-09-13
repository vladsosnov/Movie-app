<template>
  <div class="app">
    <app-header />
    <search-movie-result
      v-if="searchMovies" 
      @close-results="clearSearchMovies"
    />
    <router-view/>
    <app-footer />
  </div>
</template>

<script>
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
  computed: {
    searchMovies () {
      return JSON.stringify(this.$store.state.searchMovies) !== "{}"
    }
  },
  methods: {
    async clearSearchMovies () {
      return this.$store.state.searchMovies = {}
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
