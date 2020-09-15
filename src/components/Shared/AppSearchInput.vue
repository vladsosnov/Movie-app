<template>
  <form class="search-box">
    <input
      v-model="searchMovieName"
      type="text"
      placeholder="Search movie..."
      class="search-box__input"
    >
    <button
      class="search-box__button"
      @keyup.enter="getSearchMoveisData"
      @click.prevent="getSearchMoveisData"
    >
      Go
    </button>
  </form>
</template>

<script>
export default {
  name: 'AppSearchInput',
  data () {
    return {
      searchMovieName : '',
      fullPathName: ''
    }
  },
  watch: {
    async searchMovieName () {
      this.fullPathName = `${process.env.VUE_APP_API_URL}/search/movie?&api_key=${process.env.VUE_APP_API_KEY}&query=${this.searchMovieName}`
    },
  },
  methods: {
    getSearchMoveisData () {
      this.$store.commit('setSearchMoviesVisibility')
      this.$emit('setSearchQuery', this.fullPathName)
    }
  }
}
</script>

<style lang="scss" scoped>
.search-box {
  &__input {
    margin: 0;
    padding: .5rem 1rem;
    font-size: 1rem;
    font-weight: 500;
    border-radius: 3rem;
    outline: none;
    transition: all .2s ease;

    &:hover {
      box-shadow: 0 1px 2px 1px #b7a3a3;
    }
  }

  &__button {
    position: absolute;
    right: 1rem;
    top: 7px;
    padding: 2px 10px;
    background: no-repeat;
    border: 1px solid #333;
    border-radius: 3rem;
    z-index: 100;
    cursor: pointer;
    outline: none;
    transition: all .2s ease;

    &:hover {
      color: #fff;
      background-color: #333;
    }
  }
}
</style>
