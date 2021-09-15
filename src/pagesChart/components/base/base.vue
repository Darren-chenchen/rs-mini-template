<template>
  <div>
    <!-- #ifdef MP-WEIXIN -->
    <canvas
      :style="{ height: canvasHeight + 'px', width: canvasWidth + 'px' }"
      type="2d"
      class="f2-canvas"
      @touchstart="touchStart"
      @touchmove="touchMove"
      @touchend="touchEnd"
    ></canvas>
    <!-- #endif -->
    <!-- #ifdef H5 || MP-ALIPAY -->
    <canvas
      :style="{ height: canvasHeight + 'px', width: canvasWidth + 'px' }"
      :canvasId="canvasId"
      :id="canvasId"
      @touchstart="touchStart"
      @touchmove="touchMove"
      @touchend="touchEnd"
    ></canvas>
    <!-- #endif -->
  </div>
</template>

<script lang="ts" src="./base.ts"></script>

<style scoped lang="scss"></style>
