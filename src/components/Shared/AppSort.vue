<template>
  <div class="app-sort">
    <ul class="app-sort__list list">
      <li
        v-for="(sortingType, index) in sortingsType"
        :key="index"
        class="list__item"
        @click="onSortingTypeClick(sortingType)"
      >
        {{ sortingType.name }}
      </li>
      <li
        class="list__item list__sort-side"
        :class="{ 'list__sort-side--change' : isSideChange }"
        @click="onSortSideBtnClick"
      >
        &#8595;
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AppSort',
  data () {
    return {
      sortingsType: [
        { name: 'popularity' },
        { name: 'release_date' },
        { name: 'original_title' },
        { name: 'vote_average' }
      ],
      isSideChange: false
    }
  },
  methods: {
    onSortingTypeClick (sortingType) {
      this.$emit('sort-type-choosen', sortingType.name)
    },
    onSortSideBtnClick () {
      this.isSideChange = !this.isSideChange
      this.$emit('change-side')
    }
  }
}
</script>

<style lang="scss" scoped>
.app-sort {
  &__list {
    margin-bottom: 2rem;
    margin-top: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    list-style: none;

    .list {
      &__item {
        width: 100%;
        padding: .5rem 0;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        background-color: #ccc;
        border: 1px solid;
        cursor: pointer;
        transition: background-color .2s ease;

        &:hover {
          background-color: #eee
        }

        &:not(:last-child) {
          border-right: none;
        }
      }

      &__sort-side {
        width: 20%;
        font-size: 2rem;

        &--change {
          transform: rotate(180deg);
        }
      }
    }
  }
}
</style>
