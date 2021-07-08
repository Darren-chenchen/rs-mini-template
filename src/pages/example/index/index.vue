<template>
  <view class="index">
    <!-- 基础组件 -->
    <view class="rs-bg-gap title">基础组件</view>
    <rs-cell @cellClick="doBtn" title="按钮"></rs-cell>
    <rs-cell @cellClick="doCell" title="Cell单元格"></rs-cell>
    <rs-cell @cellClick="doSearchBar" title="搜索框"></rs-cell>
    <rs-cell @cellClick="doNumberStep" title="计数器"></rs-cell>
    <rs-cell @cellClick="doBanner" title="轮播图"></rs-cell>
    <rs-cell @cellClick="doGrid" title="九宫格"></rs-cell>
    <rs-cell @cellClick="doBadge" title="角标"></rs-cell>
    <rs-cell @cellClick="doCountDown" title="倒计时"></rs-cell>
    <rs-cell @cellClick="doNotic" title="公告"></rs-cell>
    <rs-cell @cellClick="doSectionSelect" title="分段选择器"></rs-cell>
    <rs-cell @cellClick="doCustomNav" title="自定义导航栏"></rs-cell>
    <rs-cell @cellClick="doCodebtn" title="验证码" :showArrow="false" :ripple="false">
      <view class="rs-flex-row" style="width: calc(100vw - 90px);justify-content: flex-end">
        <rs-code-btn :autoCountDown="true" :second="second" @onClick="onClick"></rs-code-btn>
      </view>
    </rs-cell>
    <!-- 反馈组件 -->
    <view class="rs-bg-gap title">反馈组件</view>
    <rs-cell @cellClick="doToast" title="Toast"></rs-cell>
    <rs-cell @cellClick="doModal" title="Modal弹框"></rs-cell>
    <rs-cell @cellClick="doLoading" title="Loading"></rs-cell>
    <rs-cell @cellClick="doSwipeDelete" title="侧滑删除"></rs-cell>
    <!-- 公共页面 -->
    <view class="rs-bg-gap title">公共页面</view>
    <rs-cell @cellClick="doEmpty" title="空页面"></rs-cell>
    <rs-cell @cellClick="doFooter" title="上拉加载效果footer"></rs-cell>
  </view>
</template>

<script lang="ts" src="./index.ts"></script>

<style scoped lang="scss">
.index {
  padding: 12px;
  .title {
    padding: 12px;
    font-size: 15px;
    margin-top: 12px;
    color: #666;
  }
}
</style>
