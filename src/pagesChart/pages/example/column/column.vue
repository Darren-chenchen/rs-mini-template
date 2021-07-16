<template>
  <view class="column">
    <view class="rs-bg-gap title">基础柱状图</view>
    <column :chartData="chartData" :defValue="defValue"></column>
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
