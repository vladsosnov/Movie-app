<template>
  <carousel
    class="app-carousel"
    :autoplay="true"
    :autoplayTimeout="5000"
    :loop="true"
  >
    <slide
      v-for="newMovie in newMovies"
      :key="newMovie.id"
      class="app-carousel__slide slide"
    >
      <img
        :src="newMovie.image"
        :alt="newMovie.title"
        class="slide__image"
      >
      <div class="slide__detail detail">
        <p>
          <span class="detail__title">
            {{ newMovie.title }}
          </span>
          <span class="detail__vote">
            {{ newMovie.vote }}
          </span>
        </p>
        <p class="detail__overview">
          {{ newMovie.overview }}
        </p>
        <p class="detail__release">
          Release: {{ newMovie.release }}
        </p>
        <button
          class="detail__save-btn"
          @click.prevent="onAddMovieToSavedClick(newMovie)"
        >
          Save movie
        </button>
      </div>
    </slide>
  </carousel>
</template>

<script>
export default {
  name: 'AppCarousel',
  props: {
    newMovies: {
      required: true
    }
  },
  methods: {
    onAddMovieToSavedClick (movie) {
      const allSavedMovies = [...this.$store.state.savedMovies]
      const newMovieData = {
        id: movie.id,
        title: movie.title,
        poster_path: movie.image,
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
.app-carousel {
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    display: none;
  }

  &__slide {
    display: flex;

    &:not(:last-child) {
      margin-right: 1rem;
    }

    .slide-wrap {
      display: flex;
      align-items: flex-start;
      text-decoration: none;
      color: #333;
    }

    .slide {
      &__detail {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .detail {
          &__title {
            margin-right: .5rem;
            font-size: 1.1rem;
            letter-spacing: .5px;
          }

          &__vote {
            font-size: .8rem;
            letter-spacing: .2px;
            font-weight: 600;
          }

          &__overview {
            max-width: 400px;
            margin-top: 0;
          }

          &__release {
            margin-top: 0;
          }

          &__save-btn {
            border: 1px solid #333;
            max-width: 10rem;
            padding: .5rem 1rem;
            border-radius: 3rem;
            transition: background-color .2s ease;
            background: none;
            outline: none;
            cursor: pointer;

            &:hover {
              background-color: #ccc
            }
          }
        }
      }
      
      &__image {
        max-width: 180px;
        margin-right: 1rem;
      }
    }
  }
}
</style>
