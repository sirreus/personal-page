<template>
  <div
    @click="handleClick"
    :class="goDown ? 'scroll-button down' : 'scroll-button up'"
  >
    <div class="chevron"></div>
    <div class="chevron"></div>
    <div class="chevron"></div>
  </div>
</template>

<script>
export default {
  props: {
    isRotatable: Boolean,
    order: String,
  },
  data() {
    return {
      goDown: this.order === "last" ? false : true,
    };
  },
  methods: {
    handleClick() {
      if (this.isRotatable) this.goDown = !this.goDown;
    },
  },
};
</script>

<style scoped>
:root {
  --base: 0.6rem;
}

.scroll-button {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 6vh;
  cursor: pointer;
}
.scroll-button.down {
  transform: rotate(0);
}
.scroll-button.up {
  transform: rotate(180deg);
}

.chevron {
  position: absolute;
  /* width: 0.6rem * 3.5;
  height: 0.6rem * 0.8; */
  width: 1.4rem;
  height: 0.32rem;
  opacity: 0;
  transform: scale(0.3);
  animation: move-chevron 3s ease-out infinite;
}

.chevron:first-child {
  animation: move-chevron 3s ease-out 1s infinite;
}

.chevron:nth-child(2) {
  animation: move-chevron 3s ease-out 2s infinite;
}

.chevron:before,
.chevron:after {
  content: "";
  position: absolute;
  top: 0;
  height: 100%;
  width: 50%;
  background: #2c3e50;
}

.chevron:before {
  left: 0;
  transform: skewY(30deg);
}

.chevron:after {
  right: 0;
  width: 50%;
  transform: skewY(-30deg);
}

@keyframes move-chevron {
  25% {
    opacity: 1;
  }
  33.3% {
    opacity: 1;
    transform: translateY(1.52rem);
  }
  66.6% {
    opacity: 1;
    transform: translateY(2.08rem);
  }
  100% {
    opacity: 0;
    transform: translateY(3.2rem) scale(0.5);
  }
}
</style>
