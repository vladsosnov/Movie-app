<template>
   <section class="app-loader">
    <div class="app-loader__circle-list circle-list">
      <span class="circle-list__item" style="--i:1;"></span>
      <span class="circle-list__item" style="--i:2;"></span>
      <span class="circle-list__item" style="--i:3;"></span>
      <span class="circle-list__item" style="--i:4;"></span>
      <span class="circle-list__item" style="--i:5;"></span>
      <span class="circle-list__item" style="--i:6;"></span>
      <span class="circle-list__item" style="--i:7;"></span>
      <span class="circle-list__item" style="--i:8;"></span>
      <span class="circle-list__item" style="--i:9;"></span>
      <span class="circle-list__item" style="--i:10;"></span>
      <span class="circle-list__item" style="--i:11;"></span>
      <span class="circle-list__item" style="--i:12;"></span>
      <span class="circle-list__item" style="--i:13;"></span>
      <span class="circle-list__item" style="--i:14;"></span>
      <span class="circle-list__item" style="--i:15;"></span>
      <span class="circle-list__item" style="--i:16;"></span>
      <span class="circle-list__item" style="--i:17;"></span>
      <span class="circle-list__item" style="--i:18;"></span>
      <span class="circle-list__item" style="--i:19;"></span>
      <span class="circle-list__item" style="--i:20;"></span>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AppLoader'
}
</script>

<style lang="scss" scoped>
.app-loader {
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: .3s ease-in;

  &__circle-list {
    position: relative;
    width: 7.5rem;
    height: 7.5rem;

    .circle-list {
      &__item {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        transform: rotate(calc(18deg * var(--i)));

        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 1rem;
          height: 1rem;
          border-radius: 50%;
          background-color: #00ff0a;
          box-shadow: 0 0 10px #00ff0a
                      0 0 20px #00ff0a
                      0 0 40px #00ff0a
                      0 0 60px #00ff0a
                      0 0 10px #00ff0a
                      0 0 100px #00ff0a;
          animation: circleAnimate 2s linear infinite;
          animation-delay: calc(.1s * var(--i));
        }

        @keyframes circleAnimate {
          0% {
            transform: scale(1);
            filter: hue-rotate(0deg);
          }

          80%, 100% {
            transform: scale(0);
            filter: hue-rotate(360deg);
          }
        }
      }
    }
  }
}
</style>

