<template>
  <view class="rssectionselect">
    <view class="rs-bg-gap title">分段选择器: 默认样式</view>
    <rs-section-selector :current="0" vibrateShort :list="['success', 'error', 'warning']" @change="change"></rs-section-selector>
    <view class="rs-bg-gap title">分段选择器: 自定义样式activeColor、buttonColor</view>
    <rs-section-selector
      activeColor="#ff5320"
      buttonColor="#333"
      :current="0"
      vibrateShort
      :list="['success', 'error', 'warning']"
      @change="change"
    ></rs-section-selector>
  </view>
</template>

<script lang="ts" src="./rsSectionSelect.ts"></script>

<style scoped lang="scss">
.rssectionselect {
  padding: 12px;
  .title {
    padding: 12px;
    font-size: 14px;
    margin-top: 12px;
    color: #666;
  }
}
</style>
