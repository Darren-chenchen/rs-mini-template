<template>
  <view class="line-wrapper">
    <base-chart :defValue="defValue" :chartData="chartData" :renderChart="initChart"></base-chart>
  </view>
</template>

<script lang="ts" src="./line.ts"></script>

<style scoped lang="scss">
.line-wrapper {
  height: 250px;
}
</style>
