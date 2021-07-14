<template>
  <view class="line">
    <view class="rs-bg-gap title">多个折线，多个坐标轴，设置默认值</view>
    <line :chartData="chartData" :defValue="defValue"></line>
    <view class="rs-bg-gap title">单个折线，渐变面积</view>
    <line-single :chartData="chartData" :defValue="defValue"></line-single>
  </view>
</template>

<script lang="ts" src="./line.ts"></script>

<style scoped lang="scss">
.line {
  .title {
    padding: 12px;
    font-size: 15px;
    margin-top: 12px;
    color: #666;
  }
}
</style>
