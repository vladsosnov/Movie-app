<template>
  <div class="search-movie-result">
    <div
      v-if="searchMovies"
      class="search-movie-result__content content"
    >
      <h2 class="search-movie-result__title">
        Your search result
        <span @click="closeSearchMovieResult">x</span>
      </h2>
      <div class="search-movie-result__wrap">
        <div
          v-for="searchMovie in searchMovies"
            :key="searchMovie.id"
          class="search-movie-result__box-item box-item"
        >
          <img
            v-if="searchMovie.poster_path !== null" 
            :src="`https://image.tmdb.org/t/p/w1280${searchMovie.poster_path}`" 
            :alt="searchMovie.title"
            class="box-item__image"
          >
          <div
            v-else
            class="box-item__un-image"
          >
            Not found
          </div>
          <p class="box-item__title">
            {{ searchMovie.title }}
          </p>
        </div>
      </div>
    </div>
    <!-- <div
      v-else
      class="saved-movies-view__empty-state"
    >
      You haven't saved any movies yet
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'SearchMovieResult',
  computed: {
    searchMovies () {
      return this.$store.state.searchMovies
    }
  },
  methods: {
    closeSearchMovieResult () {
      this.$emit('close-results')
    }
  }
}
</script>

<style lang="scss" scoped>
.search-movie-result {
  max-width: 80rem;
  margin: 0 auto 2rem;
  padding: 0 1rem;

  &__content {
    border-bottom: 1px solid #ccc;
  }

  &__title {
    position: relative;
    margin-top: 0;
    font-size: 1.5rem;
    font-weight: 600;
    color: #333;

    span {
      position: absolute;
      right: 1rem;
      cursor: pointer;

      &:hover {
        color: #000;
      }
    }
  }

  &__wrap {
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(5, 1fr);
  }

  &__box-item {
    display: flex;
    flex-direction: column;

    .box-item {
      &__image {
        max-width: 210px;
        height: 315px;
      }

      &__un-image {
        width: 210px;
        height: 315px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        font-weight: 600;
        background-color: #908c8c;
        color: #fff;
      }

      &__title {
        max-width: 210px;
      }
    }
  }

  &__empty-state {
    text-align: center;
    font-size: 3rem;
    font-weight: 600;
  }
}
</style>
