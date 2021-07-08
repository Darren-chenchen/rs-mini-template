<template>
  <view>
    <view class="rs-notice-wrapper">
      <view class="field">
        <rs-notice text="有新的消息点击查看" :scrollable="true" :showLeftIcon="true" :showRightIcon="true" :showCount="true" :count="10"></rs-notice>
      </view>

      <view class="field">
        <rs-notice
          text="有新的消息点击查看"
          :scrollable="true"
          color="#FFA900"
          backgroundColor="#FEF4E5"
          :showRightIcon="true"
          :count="100"
        ></rs-notice>
      </view>

      <view class="field">
        <rs-notice text="800-820-8820" :showLeftIcon="true" leftIconType="rsIcon-search" :showRightIcon="true"></rs-notice>
      </view>

      <view class="field">
        <rs-notice ref="notice" text="800-820-8820" :showRightIcon="true" rightIconType="rsIcon-close" @right="doClose"></rs-notice>
      </view>

      <view class="field">
        <rs-notice text="右侧无icon效果" color="#FC2C4A" backgroundColor="#FFE9ED" :showLeftIcon="true" leftIconType="rsIcon-search"></rs-notice>
      </view>
    </view>
  </view>
</template>

<script lang="ts" src="./rsNotic.ts"></script>

<style scoped lang="scss">
.rs-notice-wrapper {
  background: #ffffff;
  padding: 24rpx 0;
  .field {
    margin-bottom: 30rpx;
  }
}
</style>
