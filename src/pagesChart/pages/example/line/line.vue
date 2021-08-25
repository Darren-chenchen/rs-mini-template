<template>
  <view class="line">
    <view class="rs-bg-gap title">多个折线，多个坐标轴，设置默认值</view>
    <line-d canvasId="lineCanvasId1" :width="width" :height="300" :chartData="chartData" :defValue="defValue"></line-d>
    <view class="rs-bg-gap title">设置宽高</view>
    <line-d canvasId="lineCanvasId2" :width="width" :height="100" :chartData="chartData" :defValue="defValue"></line-d>
    <view class="rs-bg-gap title">单个折线，渐变面积</view>
    <line-single canvasId="lineCanvasId3" :width="width" :height="300" :chartData="chartData" :defValue="defValue"></line-single>
  </view>
</template>

<script lang="ts" src="./line.ts"></script>

<style scoped lang="scss">
.line {
  .title {
    padding: 12px;
    font-size: 15px;
    color: #666;
    margin-top: 12px;
  }
}
</style>
