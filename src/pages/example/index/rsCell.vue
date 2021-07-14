<template>
  <view class="rscell">
    <view class="rs-bg-gap title">单元格：箭头支持隐藏</view>
    <rs-cell title="我的收藏"></rs-cell>
    <rs-cell title="我的设置" :showArrow="false"></rs-cell>
    <view class="rs-bg-gap title">单元格：分割线支持隐藏</view>
    <rs-cell title="我的收藏" :showLine="false"></rs-cell>
    <rs-cell title="我的设置" :showLine="false"></rs-cell>
    <view class="rs-bg-gap title">单元格：支持slot</view>
    <rs-cell title="我的收藏">
      <text style="font-size: 12px;color: #ccc;margin-left: 10px">我是描述</text>
    </rs-cell>
    <rs-cell title="我的设置">
      <text style="font-size: 12px;color: #ccc;margin-left: 10px">我是描述</text>
    </rs-cell>

    <view class="rs-bg-gap title">单元格：支持箭头颜色设置</view>
    <rs-cell title="我的收藏" arrowColor="red"></rs-cell>
    <rs-cell title="我的设置" arrowColor="blue"></rs-cell>
  </view>
</template>

<script lang="ts" src="./rsCell.ts"></script>

<style scoped lang="scss">
.rscell {
  padding: 12px;
  .title {
    padding: 12px;
    font-size: 14px;
    margin-top: 12px;
    color: #666;
  }
}
</style>
