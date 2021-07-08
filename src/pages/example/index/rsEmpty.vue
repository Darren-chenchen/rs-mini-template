<template>
  <view class="rsempty">
    <view style="margin: 12px">演示效果</view>
    <rs-empty :img="emptyImg" :title="title" :subtitle="subtitle" @titleClick="titleClick" marginTop="0px">
      <block slot="action">
        <rs-button type="primary" style="margin-top: 8px" v-if="showSlot" size="medium">操作按钮</rs-button>
      </block>
    </rs-empty>

    <view style="margin-top: 20px; padding: 12px">
      <view style="margin: 12px 0">
        <view class="rs-font-14 rs-color-grey rs-mb-10">自定义标题</view>
        <rs-section-selector vibrateShort :list="['默认', 'title', 'subtitle']" @change="change1"></rs-section-selector>
      </view>

      <view style="margin: 12px 0">
        <view class="rs-font-14 rs-color-grey rs-mb-10">传入slot</view>
        <rs-section-selector vibrateShort :list="['无配置', '配置slot']" @change="change3"></rs-section-selector>
      </view>
    </view>
  </view>
</template>

<script lang="ts" src="./rsEmpty.ts"></script>

<style scoped lang="scss">
.rsempty {
  box-sizing: border-box;
}
</style>
