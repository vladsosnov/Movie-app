<template>
  <div class="movie-card">
    <img
      v-if="movie.poster_path" 
      :src="fullImagePath"
      :alt="movie.title"
      class="movie-card__poster"
    >
    <div class="movie-card__detail detail">
      <p class="detail__title">
        {{ movie.title }}
      </p>
      <p class="detail__rating">
        Rating: {{ movie.vote_average }}
      </p>
      <span>
        {{ movie.release_date }}
      </span>
      <span class="detail__overview">
        {{ movie.overview }}
      </span>
      <button
        class="detail__save-button"
        @click.prevent="onAddMovieToSavedClick(movie)"
      >
        {{ buttonText }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieCard',
  props: {
    movie: {
      required: true
    }
  },
  data () {
    return {
      imagePath: 'https://image.tmdb.org/t/p/w1280',
      buttonText: 'Save movie'
    }
  },
  computed: {
    fullImagePath () {
      return this.imagePath + this.movie.poster_path
    }
  },
  methods: {
    onAddMovieToSavedClick (movie) {
      const allSavedMovies = [...this.$store.state.savedMovies]
      
      const newMovieData = {
        id: movie.id,
        title: movie.title,
        poster_path: `${this.imagePath}${movie.poster_path}`,
        overview: movie.overview
      }

      allSavedMovies.some(item => item.id === movie.id) !== true 
        ? this.$store.dispatch('addMovieToSaved', newMovieData)
        : ''
    }
  }
}
</script>

<style lang="scss" scoped>
.movie-card {
  position: relative;
  transition: all .4s ease;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    max-height: 315px;
    height: 100%;
    background: rgba(0, 0, 0, .8);
    opacity: 0;
    transition: all .3s ease-in;
  }

  &:hover {
    &::before,
    .movie-card__detail {
      opacity: 1;
    }
  }

  &__poster {
    max-width: 210px;
  }

  &__detail {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    max-height: 315px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    opacity: 0;
    color: #fff;

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #333;
      border: 1px solid #fff;
      border-radius: 10px;
    }

    p {
      margin-top: 0;
    }

    .detail {
      &__title {
        margin: 1rem 0;
        font-size: 1.2rem;
        font-weight: 600;
        text-align: center;
      }

      &__rating {
        margin-bottom: .3rem;
      }

      &__overview {
        padding: .5rem;
        font-size: 14px;
      }

      &__save-button {
        max-width: 10rem;
        margin-bottom: .5rem;
        padding: .5rem 1rem;
        border-radius: 3rem;
        transition: background-color .2s ease;
        border: 1px solid #fff;
        outline: none;
        background: transparent;
        color: #fff;
        cursor: pointer;

        &:hover {
          background-color: #777;
        }
      }
    }
  }
}
</style>
