<template>
  <view class="rsbanner">
    <view class="rs-bg-gap title">轮播图</view>
    <rs-banner @clickItem="clickItem" :swiperList="swiperList" style="width: 100%"></rs-banner>
    <view class="rs-bg-gap title">轮播图：card样式</view>
    <rs-banner :swiperList="swiperList" style="width: 100%" :card="true"></rs-banner>
  </view>
</template>

<script lang="ts" src="./rsBanner.ts"></script>

<style scoped lang="scss">
.rsbanner {
  .title {
    padding: 12px;
    font-size: 14px;
    margin-top: 12px;
    color: #666;
  }
}
</style>
