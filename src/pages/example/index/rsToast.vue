<template>
  <view class="rstoast">
    <rs-toast></rs-toast>

    <view style="margin-top: 20px; padding: 12px">
      <view style="margin: 12px 0">
        <view class="hm-font-14 hm-color-grey hm-mb-10 hm-mt-20">状态</view>
        <rs-section-selector :current="-1" vibrateShort :list="['success', 'error', 'warning']" @change="change1"></rs-section-selector>
      </view>
    </view>
  </view>
</template>

<script lang="ts" src="./rsToast.ts"></script>

<style scoped lang="scss"></style>
