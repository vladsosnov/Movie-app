<template>
  <header class="app-header">
    <div class="app-header__container">
      <router-link :to="{ name: 'Main' }">
        <img
          src="../../assets/images/film-logo.svg"
          alt="Logo"
          class="app-header__logo"
        >
      </router-link>
      <nav class="app-header__nav nav">
        <router-link
          :to="{name: 'SavedMovies'}"
          class="nav__item"
          active-class="nav__item--active"
        >
          Saved Movies
        </router-link>
      </nav>
      <app-search-input class="app-header__search-box" />
    </div>
  </header>
</template>

<script>
import AppSearchInput from './AppSearchInput'

export default {
  name: 'AppHeader',
  components: {
    AppSearchInput
  }
}
</script>

<style lang="scss" scoped>
.app-header {
  position: sticky;
  top: 0;
  margin-bottom: 2rem;
  padding: .5rem 1rem;
  transition: .4s ease;
  background-color: #f2f2f2;
  box-shadow: 0 1px 3px 0 rgba(0,0,0, .1), 0 1px 2px 0 rgba(0,0,0, .06);
  z-index: 100;

  &__container {
    max-width: 80rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__logo {
    max-width: 4rem;
  }

  &__nav {
    .nav {
      &__item {
        text-decoration: none;
        color: #333;
        font-size: 1.2rem;
        transition: color .2s ease;

        &:hover {
          color: #000;
        }

        &--active {
          font-weight: 600;
        }
      }
    }
  }

  &__search-box {
    position: relative;
  }
}
</style>
