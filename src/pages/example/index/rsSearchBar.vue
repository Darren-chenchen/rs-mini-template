<template>
  <view class="rssearchbar">
    <view class="rs-bg-gap title">搜索框</view>

    <rs-searchbar
      style="margin-top: 12px"
      @clickDone="beginSearch"
      @textChange="textChange"
      placeholderStyle="color: #ccc;font-size:14px;"
      placeText="提示语"
      v-model="keyword"
    ></rs-searchbar>

    <view class="rs-bg-gap title">搜索框:支持disable，用于点击push到新页面场景</view>

    <rs-searchbar
      disable
      style="margin-top: 12px"
      @searchClick="_searchClick"
      placeholderStyle="color: #ccc;font-size:14px;"
      placeText="提示语"
    ></rs-searchbar>
  </view>
</template>

<script lang="ts" src="./rsSearchBar.ts"></script>

<style scoped lang="scss">
.rssearchbar {
  padding: 12px;

  .title {
    padding: 12px;
    font-size: 14px;
    margin-top: 12px;
    color: #666;
  }
}
</style>
