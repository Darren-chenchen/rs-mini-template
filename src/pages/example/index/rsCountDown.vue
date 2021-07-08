<template>
  <view style="padding: 12px;">
    <view>
      <view>演示效果</view>
      <view style="padding: 24rpx;display: flex;flex-wrap: wrap;justify-content: center;">
        <view style="padding: 20px 40px;background-color: #f7f7f7;">
          <rs-countdown
            @timeup="timeend"
            color="#FFFFFF"
            :splitorColor="splitorColor"
            :background-color="timebackgroundColor"
            border-color="#000"
            :show-day="showday"
            :second="second"
            :showColon="showColon"
          ></rs-countdown>
        </view>
      </view>
    </view>
    <view style="margin-top: 20px;">
      <view style="margin: 12px 0;">
        <view style="font-size: 16px">倒计时样式</view>
        <rs-section-selector current="0" vibrateShort :list="['天', '时分秒', '文字时分秒']" @change="countChange"></rs-section-selector>
      </view>

      <view style="margin: 12px 0;">
        <view style="font-size: 16px">Theme</view>
        <rs-section-selector current="0" vibrateShort :list="themeList" @change="countChange2"></rs-section-selector>
      </view>
      <view style="margin: 12px 0;">
        <view style="font-size: 16px">splitorColor</view>
        <rs-section-selector current="0" vibrateShort :list="themeList" @change="countChange3"></rs-section-selector>
      </view>
    </view>
  </view>
</template>

<script lang="ts" src="./rsCountDown.ts"></script>

<style scoped lang="scss"></style>
