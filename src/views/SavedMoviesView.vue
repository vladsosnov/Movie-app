<template>
  <div class="saved-movies-view">
    <div
      v-if="savedMovies.length > 0"
      class="saved-movies-view__content content"
    >
      <div
        v-for="savedMovie in savedMovies"
        :key="savedMovie.id"
        class="content__card card"
      >
        <img
          :src="savedMovie.poster_path"
          :alt="savedMovie.title"
          class="card__image"
        >
        <div class="card__title title">
          <p class="title__text">
            {{ savedMovie.title }}
          </p>
          <button
            class="title__button"
            @click="onDeleteMovieBtnClick(savedMovie)"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
    <div
      v-else
      class="saved-movies-view__empty-state"
    >
      <h2 class="title">
        You haven't saved any movies yet
      </h2>
      <img
        src="@/assets/images/not-found-saved.png"
        alt="Search result"
        class="image"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'SavedMoviesView',
  computed: {
    savedMovies () {
      return [...this.$store.state.savedMovies]
    }
  },
  methods: {
    async onDeleteMovieBtnClick (savedMovie) {
      this.$store.dispatch('deleteMovieFromSaved', savedMovie.id)
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

    @media (max-width: 992px) {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    .content {
      &__card {
        max-width: 215px;
        
        .card {
          &__image {
            max-width: 215px;
          }

          &__title {
            margin-top: .5rem;
            display: flex;
            justify-content: space-around;
            align-items: center;

            .title {
              &__text {
                margin: 0;
                margin-right: .2rem;
                font-size: .875rem;
              }

              &__button {
                max-width: 10rem;
                padding: .5rem 1rem;
                border-radius: 3rem;
                background: #ff0000;
                border: 1px solid #333;
                outline: none;
                cursor: pointer;
                color: #fff;
                transition: background-color .2s ease;

                &:hover {
                  background-color: #ff0000b5;
                }
              }
            }
          }
        }
      }
    }
  }

  &__empty-state {
    text-align: center;
    font-size: 3rem;
    font-weight: 600;

    .title{
      font-size: 3rem;

      @media (max-width: 768px) {
        font-size: 2rem;
      }
    }

    .image {
      max-width: 100%;
    }
  }
}
</style>
