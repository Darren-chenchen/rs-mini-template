<template>
  <view class="rs-flex-column">
    <view class="rs-flex-column box" v-for="(item, index) in dataCssArr" :key="index">
      <view class="card">
        <view class="header">{{ item.title }}</view>
        <view class="cell" v-for="(em, i) in item.value" :key="i">{{ em.detail }}</view>
      </view>
    </view>
    <view class="box">
      <view class="card">
        <view class="header">文本（最大支持10行）</view>
        <view class="cell rs-flex-column" style="font-size: 14px;">
          <text style="line-height: 30px;">
            <text>rs-clamp-1:</text>
            <text class="rs-clamp-1">
              一行展示一行展示一行展示一行展示一行展示一行展示一行展示一行展示一行展示一行展示
            </text>
          </text>
        </view>
        <view class="cell rs-flex-column" style="font-size: 14px;">
          <text style="line-height: 30px;">
            <text>rs-clamp-2:</text>
            <text class="rs-clamp-2">
              2行展示,支持rs-clamp-1到rs-clamp-10，支持rs-clamp-1到rs-clamp-10，支持rs-clamp-1到rs-clamp-10，支持rs-clamp-1到rs-clamp-10，支持rs-clamp-1到rs-clamp-10
            </text>
          </text>
        </view>
      </view>
    </view>
    <view class="box">
      <view class="card">
        <view class="header">
          项目主题颜色的使用
          <view class="rs-color-main">rs-color-main</view>
          <view class="rs-color-black">rs-color-black</view>
          <view class="rs-color-error">rs-color-error</view>
          <view class="rs-color-warning">rs-color-warning</view>
          <view class="rs-color-success">rs-color-success</view>
          <view class="rs-bg-main">rs-bg-main</view>
          <view class="rs-bg-black">rs-bg-black</view>
          <view class="rs-bg-error">rs-bg-error</view>
          <view class="rs-bg-warning">rs-bg-warning</view>
          <view class="rs-bg-success">rs-bg-success</view>
          <view class="rs-bg-gd-main">rs-bg-gd-main</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" src="./commoncss.ts"></script>
<style scoped>
.box {
  width: 100vw;
  background-color: #f3f5f9;
  padding: 0 24rpx 16rpx 24rpx;
  box-sizing: border-box;
}
.card {
  background-color: #ffffff;
  padding: 12px;
  box-shadow: 0px 4px 12px 0px rgba(196, 209, 236, 0.2);
  border-radius: 8px;
}
.header {
  padding-bottom: 2px;
  font-size: 14px;
  line-height: 20px;
  color: #a1a1a1;
}
.cell {
  padding-top: 10px;
  font-size: 14px;
  line-height: 20px;
  color: #202124;
}
</style>
