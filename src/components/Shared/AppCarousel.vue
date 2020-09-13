<template>
  <carousel
    class="app-carousel"
    :autoplay="false"
    :autoplayTimeout="6000"
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
    movies: {
      required: true
    }
  },
  data () {
    return {
      newMovies: [
        {
          id: '1',
          title: 'Mulan',
          vote: '7.7',
          image: 'https://image.tmdb.org/t/p/w1280/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg',
          overview: `
            In Madrid, Spain, a mysterious serial killer ruthlessly murders his victims by recreating the first appearance of several
            comic book superheroes. Cosme, a veteran police inspector who is about to retire, works on the case along with the tormented
            inspector David Valentín and his own son Jorge Elías, a nerdy young man who owns a comic book store.
          `,
          release: '2020-09-10'
        },
        {
          id: '2',
          title: 'The 2nd',
          vote: '5.1',
          image: 'https://image.tmdb.org/t/p/w1280/o1WvNhoackad1QiAGRgjJCQ1Trj.jpg',
          overview: `
            Secret-service agent Vic Davis is on his way to pick up his estranged son, Sean, from his college campus when he
            finds himself in the middle of a high-stakes terrorist operation. His son's friend Erin Walton, the daughter of
            Supreme Court Justice Walton is the target, and this armed faction will stop at nothing to kidnap her and use her as
            leverage for a pending landmark legal case.
          `,
          release: '2020-09-01'
        },
        {
          id: '3',
          title: 'Project Power',
          vote: '6.7',
          image: 'https://image.tmdb.org/t/p/w1280/TnOeov4w0sTtV2gqICqIxVi74V.jpg',
          overview: `
            In Madrid, Spain, a mysterious serial killer ruthlessly murders his victims by recreating the first appearance of several
            comic book superheroes. Cosme, a veteran police inspector who is about to retire, works on the case along with the tormented
            inspector David Valentín and his own son Jorge Elías, a nerdy young man who owns a comic book store.
          `,
          release: '2020-08-14'
        }
      ]
    }
  },
  methods: {
    onAddMovieToSavedClick (movie) {
      this.$store.dispatch('addMovieToSaved', {
        id: movie.id,
        title: movie.title,
        poster_path: movie.image,
        overview: movie.overview
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.app-carousel {
  margin-bottom: 3rem;

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
