<template>
  <form class="search-box">
    <ejs-autocomplete
      v-model="searchMovieName"
      :dataSource="autocompleteMovie"
      :fields="dataFields"
      :showClearButton="false"
      :highlight="true"
      placeholder="Select a movie"
    />
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
  name: '',
  props: {
    autoCompleteMoviesTitle: {
      required: true
    }
  },
  data () {
    return {
      dataFields: { value: 'title' },
      searchMovieName : '',
      fullPathName: ''
    }
  },
  watch: {
    async searchMovieName () {
      this.fullPathName = `${process.env.VUE_APP_API_URL}/search/movie?&api_key=${process.env.VUE_APP_API_KEY}&query=${this.searchMovieName}`
    }
  },
  computed: {
    autocompleteMovie () {
      return Object.values(this.autoCompleteMoviesTitle)
    }
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
@import url(https://cdn.syncfusion.com/ej2/material.css);

.search-box {
  &__button {
    position: absolute;
    right: 0;
    top: 3px;
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
