<template>
  <view class="rsbutton">
    <view class="rs-bg-gap title">type: primary、error、warning、success</view>
    <rs-button>默认按钮</rs-button>
    <rs-button type="primary">主要按钮</rs-button>
    <rs-button type="error">错误按钮</rs-button>
    <rs-button type="warning">警告按钮</rs-button>
    <rs-button type="success">成功按钮</rs-button>

    <view class="rs-bg-gap title">plain</view>
    <rs-button plain>默认按钮</rs-button>
    <rs-button type="primary" plain>主要按钮</rs-button>
    <rs-button type="error" plain>错误按钮</rs-button>
    <rs-button type="warning" plain>警告按钮</rs-button>
    <rs-button type="success" plain>成功按钮</rs-button>

    <view class="rs-bg-gap title">shape: circle（两边为半圆），square（带圆角）</view>
    <rs-button shape="circle">圆角按钮</rs-button>
    <rs-button type="primary" shape="circle">主要按钮</rs-button>
    <rs-button type="error" shape="circle">错误按钮</rs-button>
    <rs-button type="warning" shape="square">警告按钮</rs-button>
    <rs-button type="success" shape="square">成功按钮</rs-button>

    <view class="rs-bg-gap title">disabled</view>
    <rs-button disabled>默认按钮</rs-button>
    <rs-button type="primary" disabled>主要按钮</rs-button>
    <rs-button type="error" disabled>错误按钮</rs-button>
    <rs-button type="warning" disabled>警告按钮</rs-button>
    <rs-button type="success" disabled>成功按钮</rs-button>

    <view class="rs-bg-gap title">type: text</view>
    <rs-button type="text">文本按钮</rs-button>

    <view class="rs-bg-gap title">支持slot</view>
    <rs-button>
      支持slot
      <text class="rsIcon-add"></text>
    </rs-button>
    <rs-button>
      <text class="rsIcon-add"></text>
      支持slot
    </rs-button>

    <view class="rs-bg-gap title">加载中</view>
    <rs-button loading>loading</rs-button>

    <view class="rs-bg-gap title">尺寸size：default、medium、mini</view>
    <rs-button size="default">default</rs-button>
    <rs-button size="medium">medium</rs-button>
    <rs-button size="mini">mini</rs-button>

    <view class="rs-bg-gap title">是否开启水波纹效果ripple, 默认开启，关闭后展示默认的点击效果</view>
    <rs-button ripple>水波纹效果开启</rs-button>
    <rs-button :ripple="false">水波纹效果关闭</rs-button>
  </view>
</template>

<script lang="ts" src="./rsButton.ts"></script>

<style scoped lang="scss">
.rsbutton {
  padding: 12px;
  /deep/.rs-btn {
    margin-top: 12px;
  }
  .title {
    padding: 12px;
    font-size: 14px;
    margin-top: 12px;
    color: #666;
  }
}
</style>
