<template>
  <view class="column">
    <base-chart :defValue="defValue" :chartData="chartData" :renderChart="initChart"></base-chart>
  </view>
</template>

<script lang="ts" src="./column.ts"></script>

<style scoped lang="scss">
.column {
  height: 300px;
}
</style>
