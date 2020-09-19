<template>
  <main class="main-view">
    <app-carousel :movies="movies" />
    <app-sort
      @sort-type-choosen="onSortTypeBtnClick"
      @change-side="onChangeSideBtnClick"
     />
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
import AppSort from '../components/Shared/AppSort'
import MovieList from '../components/MovieList'
import SoonMovieSidebar from '../components/SoonMovieSidebar'
import AppPagination from '../components/Shared/AppPagination'

export default {
  name: 'MainView',
  components: {
    AppCarousel,
    AppSort,
    MovieList,
    SoonMovieSidebar,
    AppPagination
  },
  data () {
    return {
      movies: {},
      currentPage: 1,
      sortType: 'popularity',
      sortSide: 'desc'
    }
  },
  async mounted () {
    await this.fetchMovies()
  },
  methods: {
    async fetchMovies () {
      try {
        const fetchData = await axios.get(`
          ${process.env.VUE_APP_API_URL}/discover/movie?sort_by=${this.sortType}.${this.sortSide}&api_key=${process.env.VUE_APP_API_KEY}&page=${this.currentPage}
        `)
        this.movies = {...fetchData.data.results}
      }
      catch (error) {
        console.log(error)
      }
    },
    async onSortTypeBtnClick (sortingType) {
      this.sortType = sortingType
      await this.fetchMovies()
    },
    async onChangeSideBtnClick () {
      this.sortSide === 'desc' ? this.sortSide = 'asc' : this.sortSide = 'desc'
      console.log(this.sortSide)
      await this.fetchMovies()
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
