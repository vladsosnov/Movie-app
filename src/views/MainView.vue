<template>
  <main class="main-view">
    <app-carousel :movies="movies" />
    <div class="main-view__content">
      <movie-list :movies="movies" />
      <soon-movie-sidebar />
    </div>
  </main>
</template>

<script>
import axios from 'axios'

import AppCarousel from '../components/Shared/AppCarousel'
import MovieList from '../components/MovieList'
import SoonMovieSidebar from '../components/SoonMovieSidebar'

export default {
  name: 'MainView',
  components: {
    AppCarousel,
    MovieList,
    SoonMovieSidebar
  },
  data () {
    return {
      movies: {}
    }
  },
  async mounted () {
    await this.fetchMovies()
  },
  methods: {
    async fetchMovies () {
      try {
        const fetchData = await axios.get(`${process.env.VUE_APP_API_URL}/discover/movie?sort_by=popularity.desc&api_key=${process.env.VUE_APP_API_KEY}&page=1`)
        this.movies = {...fetchData.data.results}

        console.log(fetchData)
      }
      catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.main-view {
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  &__content {
    position: relative;
    display: flex;
  }
}
</style>
