<template>
  <div class="app-pagination">
    <button
      @click.prevent="onPrevBtnClick"
      class="app-pagination__prev-button"
    >
      previous
    </button>
    <button
      @click.prevent="onNextBtnClick"
      class="app-pagination__next-button"
    >
      next
    </button>
  </div>
</template>

<script>
export default {
  name: 'AppPaginaton',
  methods: {
    onPrevBtnClick () {
      this.$emit('prev-button')
    },
    onNextBtnClick () {
      this.$emit('next-button')
    }
  }
}
</script>

<style lang="scss" scoped>
.app-pagination {
  max-width: 58.5rem;
  margin-bottom: 3rem;
  display: flex;
  justify-content: center;
  text-align: center;

  &__prev-button,
  &__next-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    padding: 4px;
    border-radius: 3rem;
    border: 1px solid #333;
    cursor: pointer;
    outline: none;
    transition: all .2s ease;

    &:hover {
      color: #fff;
      background-color: #333;
    }
  }

  &__prev-button {
    margin-right: 2rem;
  }
}
</style>
