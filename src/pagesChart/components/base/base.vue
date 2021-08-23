<template>
  <div>
    <!-- #ifdef MP-WEIXIN -->
    <canvas type="2d" class="f2-canvas" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd"></canvas>
    <!-- #endif -->
    <!-- #ifdef H5 -->
    <canvas id="f2-canvasId" width="400" height="260"></canvas>
    <!-- #endif -->
  </div>
</template>

<script lang="ts" src="./base.ts"></script>

<style scoped lang="scss">
.f2-canvas {
  width: 100%;
  height: 100%;
}
</style>
