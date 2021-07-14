<template>
  <view class="pie">
    <base-chart :chartData="chartData" :renderChart="initChart"></base-chart>
  </view>
</template>

<script lang="ts" src="./pie.ts"></script>

<style scoped lang="scss">
.pie {
  height: 300px;
}
</style>
