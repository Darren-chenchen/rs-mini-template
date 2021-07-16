<template>
  <view class="rsinput">
    <view class="rs-bg-gap title">基本使用</view>
    <rs-input v-model="inputValue" placeholder="请输入内容"></rs-input>

    <view class="rs-bg-gap title">prefixIcon</view>
    <rs-input prefixIcon="rsIcon-search" v-model="inputValue" placeholder="请输入内容" @iconClick="prefixIconClick"></rs-input>

    <view class="rs-bg-gap title">suffixIcon</view>
    <rs-input suffixIcon="rsIcon-search" v-model="inputValue" placeholder="请输入内容" @iconClick="suffixIconClick"></rs-input>

    <view class="rs-bg-gap title">disabled</view>
    <rs-input disabled v-model="inputValue" placeholder="请输入内容"></rs-input>

    <view class="rs-bg-gap title">密码框</view>
    <rs-input type="password" v-model="inputValue" placeholder="请输入密码"></rs-input>

    <view class="rs-bg-gap title">maxlength</view>
    <rs-input :maxlength="5" v-model="inputValue" placeholder="请输入内容"></rs-input>

    <view class="rs-bg-gap title">type="number"</view>
    <rs-input type="number" v-model="inputValue" placeholder="请输入内容"></rs-input>

    <view class="rs-bg-gap title">type="digit"</view>
    <rs-input type="digit" v-model="inputValue" placeholder="请输入内容"></rs-input>

    <view class="rs-bg-gap title">多行文本</view>
    <rs-input type="textarea" v-model="inputValue" placeholder="请输入内容"></rs-input>

    <view class="rs-bg-gap title">多行文本自动高度</view>
    <rs-input autoHeight type="textarea" v-model="inputValue" placeholder="请输入内容"></rs-input>
  </view>
</template>

<script lang="ts" src="./rsInput.ts"></script>

<style scoped lang="scss">
.rsinput {
  padding: 12px;
  .title {
    padding: 12px;
    font-size: 14px;
    margin-top: 12px;
    color: #666;
    margin-bottom: 12px;
  }
}
</style>
