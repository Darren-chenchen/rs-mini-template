<template>
  <canvas type="2d" class="f2-canvas" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd"></canvas>
</template>

<script lang="ts" src="./base.ts"></script>

<style scoped lang="scss">
.f2-canvas {
  width: 100%;
  height: 100%;
}
</style>
