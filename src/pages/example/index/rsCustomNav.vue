<template>
  <view>
    <rs-navbar :bgColor="theme" :isBack="showLeft" :bg="bg" :backIconClass="backIconClass" :bgImage="bgImage">
      <block slot="backText">
        <text style="font-size: 15px">{{ backText }}</text>
      </block>
      <block slot="content">
        <text style="font-size: 18px; width: 180px" class="rs-flex-row rs-clamp-1">{{ titleText }}</text>
      </block>
    </rs-navbar>

    <view style="padding: 0 12px">
      <view class="rs-flex-row-center" style="margin-top: 20px">参数配置</view>
      <view style="margin-top: 20px">
        <view style="margin: 12px 0">
          <view class="rs-color-grey" style="font-size: 14px">标题长度</view>
          <rs-section-selector vibrateShort :list="['短', '中', '长']" @change="titleChange"></rs-section-selector>
        </view>
        <view style="margin: 12px 0">
          <view class="rs-color-grey" style="font-size: 14px">隐藏左侧返回区域</view>
          <rs-section-selector vibrateShort :current="1" :list="['是', '否']" @change="leftAreaChange"></rs-section-selector>
        </view>
        <view style="margin: 12px 0">
          <view class="rs-color-grey " style="font-size: 14px">自定义左侧内容</view>
          <rs-section-selector vibrateShort :current="1" :list="['是', '否']" @change="leftChange"></rs-section-selector>
        </view>
        <view style="margin: 12px 0">
          <view class="rs-color-grey" style="font-size: 14px">背景色</view>
          <rs-section-selector current="0" vibrateShort :list="['白色', '蓝色', '渐变', '填充背景图']" @change="themeChange"></rs-section-selector>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" src="./rsCustomNav.ts"></script>

<style scoped lang="scss"></style>
