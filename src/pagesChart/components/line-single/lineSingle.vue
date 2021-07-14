<template>
  <view class="lineSingle">
    <base-chart :defValue="defValue" :chartData="chartData" :renderChart="initChart"></base-chart>
  </view>
</template>

<script lang="ts" src="./lineSingle.ts"></script>

<style scoped lang="scss">
.lineSingle {
  height: 250px;
}
</style>
