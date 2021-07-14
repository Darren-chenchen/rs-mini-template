<template>
  <view style="padding: 12px;">
    <view>
      <view>演示效果</view>
      <view style="padding: 24rpx;display: flex;flex-wrap: wrap;justify-content: center;">
        <view style="padding: 20px 40px;background-color: #f7f7f7;">
          <rs-footer :loadingStyle="loadingStyle" :borderColor="themeColor"></rs-footer>
        </view>
      </view>
    </view>
    <view style="margin-top: 20px;">
      <view style="margin: 8px 0;">
        <view style="font-size: 16px">样式选择</view>
        <rs-section-selector current="0" vibrateShort :list="['样式1', '样式2']" @change="countChange"></rs-section-selector>
      </view>
    </view>
    <view style="margin-top: 20px;">
      <view style="margin: 8px 0;">
        <view style="font-size: 16px">颜色自定义</view>
        <rs-section-selector current="0" vibrateShort :list="['颜色1', '颜色2']" @change="countChange2"></rs-section-selector>
      </view>
    </view>
  </view>
</template>

<script lang="ts" src="./rsFooter.ts"></script>

<style scoped lang="scss"></style>
