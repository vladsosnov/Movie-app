<template>
  <aside class="soon-movie-sidebar">
    <h2 class="soon-movie-sidebar__title">
      Soon on the site
    </h2>
    <div
      v-for="soonMovie in soonMovie"
      :key="soonMovie.id"
      class="soon-movie-sidebar__movies movie"
    >
      <img
        v-if="soonMovie.poster_path !== null" 
        :src="soonMovie.image" 
        :alt="soonMovie.title"
        class="movie__image"
      >
      {{ soonMovie.title }}
    </div>
  </aside>
</template>

<script>
export default {
  name: 'SoonMovieSidebar',
  data () {
    return {
      soonMovie: [
        {
          id: '337401',
          title: 'Mulan',
          image: 'https://image.tmdb.org/t/p/w1280/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg',
        },
        {
          id: '724717',
          title: 'The 2nd',
          image: 'https://image.tmdb.org/t/p/w1280/o1WvNhoackad1QiAGRgjJCQ1Trj.jpg'
        },
        {
          id: '605116',
          title: 'Project Power',
          image: 'https://image.tmdb.org/t/p/w1280/TnOeov4w0sTtV2gqICqIxVi74V.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.soon-movie-sidebar {
  width: 100%;
  max-width: 310px;

  @media (max-width: 768px) {
    display: none;
  }

  &__title {
    margin-top: 0;
    font-size: 1.4rem;
  }

  &__movies {
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    display: flex;

    &:not(:last-child) {
      border-bottom: 2px solid;
    }

    .movie {
      &__image {
        max-width: 80px;
        margin-right: 1rem;
      }
    }
  }
}
</style>
