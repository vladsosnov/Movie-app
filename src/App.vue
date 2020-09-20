<template>
  <div class="app">
    <app-header
      :autoCompleteMoviesTitle="titlesToAutoComplete"
      @set-search-path="fetchSearchMoveis"
    />
    <search-result
      :movies="searchResult"
      @close-results="isSearchResultVisible"
    />
    <router-view />
    <app-footer />
  </div>
</template>

<script>
import axios from 'axios'

import AppHeader from './components/Shared/AppHeader'
import SearchResult from './components/SearchResult'
import AppFooter from './components/Shared/AppFooter'

export default {
  name: 'App',
  components: {
    AppHeader,
    SearchResult,
    AppFooter
  },
  data () {
    return {
      searchResult: {},
      titlesToAutoComplete: ''
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
        this.titlesToAutoComplete = Object.values(fetchData.data.results).map(item => item.title)
      }
      catch (error) {
        console.log(error)
      }
    },
    async fetchSearchMoveis (searchMoviePath) {
      try {
        const fetchSeatchData = await axios.get(searchMoviePath)
        this.searchResult = {...fetchSeatchData.data.results}

        await this.$store.dispatch('setSearchMovies', this.searchResult)
      }
      catch (error) {
        console.log(error)
      }
    },
    isSearchResultVisible () {
      this.$store.commit('setSearchResultVisibility')
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
