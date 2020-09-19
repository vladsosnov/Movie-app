<template>
  <main class="main-view">
    <app-carousel :movies="movies" />
    <div class="main-view__content">
      <movie-list :movies="movies" />
      <soon-movie-sidebar />
    </div>
    <app-pagination
      @prev-button="onPrevBtnClick"
      @next-button="onNextBtnClick"
    />
  </main>
</template>

<script>
import axios from 'axios'

import AppCarousel from '../components/Shared/AppCarousel'
import MovieList from '../components/MovieList'
import SoonMovieSidebar from '../components/SoonMovieSidebar'
import AppPagination from '../components/Shared/AppPagination'

export default {
  name: 'MainView',
  components: {
    AppCarousel,
    MovieList,
    SoonMovieSidebar,
    AppPagination
  },
  data () {
    return {
      movies: {},
      currentPage: 1
    }
  },
  async mounted () {
    await this.fetchMovies()
  },
  methods: {
    async fetchMovies () {
      try {
        const fetchData = await axios.get(`${process.env.VUE_APP_API_URL}/discover/movie?sort_by=popularity.desc&api_key=${process.env.VUE_APP_API_KEY}&page=${this.currentPage}`)
        this.movies = {...fetchData.data.results}
      }
      catch (error) {
        console.log(error)
      }
    },
    async onPrevBtnClick () {
      if (this.currentPage !== 1) {
        this.currentPage--
        await this.fetchMovies()
      }  
    },
    async onNextBtnClick () {
      this.currentPage++
      await this.fetchMovies()
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
  flex-direction: column;
  justify-content: space-between;

  &__content {
    position: relative;
    display: flex;
    margin-bottom: 3rem;
  }
}
</style>
