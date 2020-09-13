<template>
  <div class="saved-movies-view">
    <div
      v-if="uniqMovies.length > 0"
      class="saved-movies-view__content content"
    >
      <div
        v-for="savedMovie in uniqMovies"
        :key="savedMovie.id"
        class="content__card card"
      >
        <img
          :src="savedMovie.poster_path"
          :alt="savedMovie.title"
          class="card__image"
        >
        <p class="card__title">
          {{ savedMovie.title }}
        </p>
      </div>
    </div>
    <div
      v-else
      class="saved-movies-view__empty-state"
    >
      You haven't saved any movies yet
    </div>
  </div>
</template>

<script>
export default {
  name: 'SavedMoviesView',
  data () {
    return {
      uniqMovies: []
    }
  },
  computed: {
    savedMovies () {
      return this.$store.state.savedMovies
    }
  },
  async mounted () {
    await this.uniqSavedMovies()
  },
  methods: {
    uniqSavedMovies () {
      let savetObj = {}

      this.savedMovies.forEach(item =>{
        savetObj[item['id']] = item
      })

      this.uniqMovies = Object.keys(savetObj).map(id => savetObj[id])
    }
  }
}
</script>

<style lang="scss" scoped>
.saved-movies-view {
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1rem;
  transition: .4s ease;

  &__content {
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(4, 1fr);

    .content {
      &__card {
        max-width: 215px;
        
        .card {
          &__image {
            max-width: 215px;
          }

          &__title {
            margin-bottom: 0;
          }
        }
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
