<template>
  <view class="pie">
    <!-- canvasId是h5必须的，微信小程序可以不设置 -->
    <pie :width="width" :height="300" canvasId="pieCanvasId1" :chartData="chartData"></pie>
  </view>
</template>

<script lang="ts" src="./pie.ts"></script>

<style scoped lang="scss"></style>
