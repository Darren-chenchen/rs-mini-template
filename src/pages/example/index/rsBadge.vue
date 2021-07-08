<template>
  <view style="padding: 12px;">
    <view>
      <view>演示效果</view>
      <view class="rs-badge-wrapper">
        <view style="padding: 20px 40px;background-color: #f7f7f7;">
          <rs-badge :count="count" :dot="dot" :bg-color="theme">
            <image src="/static/example/ic_homepage_selected.png" class="badge-image" />
          </rs-badge>

          <rs-badge :count="count" :dot="dot" :bg-color="theme">
            <a src="#" class="text-link">文字链接</a>
          </rs-badge>
        </view>
      </view>
    </view>
    <view style="margin-top: 20px;">
      <view style="margin: 8px 0;">
        <view style="font-size: 16px">数值显示</view>
        <rs-section-selector current="1" vibrateShort :list="[0, 8, 15, 106, 209]" @change="countChange"></rs-section-selector>
      </view>
      <view style="margin: 12px 0">
        <view style="font-size: 16px">类型选择</view>
        <rs-section-selector vibrateShort current="1" :list="['显示圆点', '显示文本']" @change="typeChange"></rs-section-selector>
      </view>
      <view style="margin: 12px 0;">
        <view style="font-size: 16px">更换主题</view>
        <rs-section-selector vibrateShort current="0" :list="['红色', '蓝色']" @change="isThemeChange"></rs-section-selector>
      </view>
    </view>
  </view>
</template>

<script lang="ts" src="./rsBadge.ts"></script>

<style scoped lang="scss">
.rs-badge-wrapper {
  padding: 24rpx;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .badge-image {
    width: 96rpx;
    height: 96rpx;
  }
  .text-link {
    padding: 10px;
  }
}
</style>
