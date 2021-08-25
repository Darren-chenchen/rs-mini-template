<template>
  <view>
    <base-chart
      :canvasWidth="width"
      :canvasHeight="height"
      :canvasId="canvasId"
      :defValue="defValue"
      :chartData="chartData"
      :renderChart="initChart"
    ></base-chart>
  </view>
</template>

<script lang="ts" src="./column.ts"></script>

<style scoped lang="scss"></style>
