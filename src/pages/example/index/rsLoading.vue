<template>
  <view class="rsloading">
    <view style="padding: 12px">
      <rs-loading></rs-loading>

      <view class="hm-font-16 hm-color-black hm-flex-row-center hm-mt-20">参数配置</view>
      <view style="margin-top: 20px">
        <view style="margin: 8px 0">
          <view class="hm-font-14 hm-color-grey hm-mb-10">自定义配置</view>
          <rs-section-selector :current="-1" vibrateShort :list="['默认', '不显示title', '自定义GIF']" @change="countChange"></rs-section-selector>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" src="./rsLoading.ts"></script>

<style scoped lang="scss"></style>
