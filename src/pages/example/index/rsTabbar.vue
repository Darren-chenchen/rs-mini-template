<template>
  <view class="rstabbar">
    <view style="background:#fff">
      <view>
        <rs-tabs v-model="active2">
          <rs-tab title="标签1">
            <text>1111</text>
          </rs-tab>
          <rs-tab title="标签2">
            <view class="view-general">
              <image style="width:200rpx;height:137.5rpx" src="https://img.yzcdn.cn/vant/cat.jpeg" />
              <view>猫不易</view>
            </view>
          </rs-tab>
          <rs-tab title="标签3">
            <view class="view-general">
              <image style="width:200rpx;height:200rpx" src="https://img.yzcdn.cn/vant/ipad.jpeg" />
              <view>狗不易</view>
            </view>
          </rs-tab>
          <rs-tab title="我这个标签就很特别的">
            <text>2222</text>
          </rs-tab>
          <rs-tab title="标签5">
            <view class="view-general">
              <image style="width:200rpx;height:137.5rpx" src="https://img.yzcdn.cn/vant/cat.jpeg" />
              <view>猫不易</view>
            </view>
          </rs-tab>
          <rs-tab title="看看">
            <view class="view-general">
              <image style="width:200rpx;height:200rpx" src="https://img.yzcdn.cn/vant/ipad.jpeg" />
              <view>狗不易</view>
            </view>
          </rs-tab>
        </rs-tabs>
      </view>
    </view>
  </view>
</template>

<script lang="ts" src="./rsTabbar.ts"></script>

<style scoped lang="scss">
.rstabbar {
  .view-general {
    width: 750rpx;
    height: 400rpx;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .title {
    height: 44rpx;
    font-size: 34rpx;
    font-weight: bold;
    line-height: 44rpx;
    width: 750rpx;
    box-sizing: border-box;
    padding: 0 16rpx;
  }
}
</style>
