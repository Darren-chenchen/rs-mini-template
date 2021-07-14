<template>
  <view class="rspop">
    <rs-section-selector :current="-1" vibrateShort :list="['上方弹出', '下方弹出', '左方弹出', '右方弹出']" @change="change1"></rs-section-selector>

    <rs-popup height="300px" popupId="1" ref="filter1" transition="slider" type="top">
      <view>你好你好</view>
    </rs-popup>

    <rs-popup height="300px" popupId="2" ref="filter2" transition="slider" type="bottom">
      <view>你好你好</view>
    </rs-popup>

    <rs-popup height="100vh" width="80vw" popupId="3" ref="filter3" transition="slider" type="left">
      <view>你好你好</view>
    </rs-popup>

    <rs-popup height="100vh" width="80vw" popupId="4" ref="filter4" transition="slider" type="right">
      <view>你好你好</view>
    </rs-popup>
  </view>
</template>

<script lang="ts" src="./rsPop.ts"></script>

<style scoped lang="scss"></style>
