<template>
  <view class="rsscrollview">
    <mescroll-uni ref="mescrollRef" @init="mescrollInit" @down="downCallback" @up="upCallback" :down="downOption" :up="upOption">
      <view class="title">目前比较完美的解决方案，根据场景不同选择对应的组件mescroll-body或者mescroll-uni。 https://www.mescroll.com/uni.html</view>
      <rs-cell v-for="(item, index) in dataList" :key="index" :title="'数据列表' + index"></rs-cell>
    </mescroll-uni>
  </view>
</template>

<script lang="ts" src="./rsScrollView.ts"></script>

<style scoped lang="scss">
.title {
  padding: 12px;
  font-size: 14px;
  margin-top: 12px;
  color: #666;
}
</style>
