<template>
  <view class="rsmodal">
    <rs-modal></rs-modal>
    <view class="rs-bg-gap title">Modal: 2个按钮</view>
    <button class="btn" @click="doShowSuccess">点击弹出</button>
    <view class="rs-bg-gap title">Modal: 1个按钮</view>
    <button class="btn" @click="doShowSuccess2">点击弹出</button>
    <view class="rs-bg-gap title">Modal: 1个按钮,点击退出小程序</view>
    <button class="btn" @click="doShowSuccess3">点击弹出</button>
  </view>
</template>

<script lang="ts" src="./rsModal.ts"></script>

<style scoped lang="scss">
.rsmodal {
  padding: 12px;

  .title {
    padding: 12px;
    font-size: 14px;
    margin-top: 12px;
    color: #666;
  }
}
</style>
