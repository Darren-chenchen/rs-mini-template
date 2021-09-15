<template>
  <view class="column">
    <view class="rs-bg-gap title">基础柱状图</view>
    <column :width="width" :height="400" canvasId="columnCanvasId1" :chartData="chartData" :defValue="defValue"></column>
    <view class="rs-bg-gap title">基础条状图</view>
    <column-h :width="width" :height="400" canvasId="columnCanvasId2" :chartData="chartData" :defValue="defValue"></column-h>
  </view>
</template>

<script lang="ts" src="./column.ts"></script>

<style scoped lang="scss">
.column {
  .title {
    padding: 12px;
    font-size: 15px;
    margin-top: 12px;
    color: #666;
  }
}
</style>
