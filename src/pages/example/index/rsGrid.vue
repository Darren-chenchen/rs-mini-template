<template>
  <view class="rsgrid">
    <view class="rs-bg-gap title">九宫格：支持列数自定义，支持占位图</view>
    <rs-grid :pictures="dataArr" :column="4" errorImg="/static/example/ic_template.png"></rs-grid>
  </view>
</template>

<script lang="ts" src="./rsGrid.ts"></script>

<style scoped lang="scss">
.rsgrid {
  padding: 12px;
  .title {
    padding: 12px;
    font-size: 14px;
    margin-top: 12px;
    color: #666;
  }
}
</style>
