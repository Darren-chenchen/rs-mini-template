<template>
  <view class="rsnumberstep">
    <view class="rs-bg-gap title">计数器:支持最大值、最小值</view>
    <rs-number-stepper v-model="nummber" :max="5" :min="1"></rs-number-stepper>
    <view class="rs-bg-gap title">计数器:支持step</view>
    <rs-number-stepper :step="3"></rs-number-stepper>
  </view>
</template>

<script lang="ts" src="./rsNumberStep.ts"></script>

<style scoped lang="scss">
.rsnumberstep {
  padding: 12px;

  .title {
    padding: 12px;
    font-size: 14px;
    margin-top: 12px;
    color: #666;
    margin-bottom: 10px;
  }
}
</style>
