<template>
  <view class="rspwd">
    <button @click="clickBtn">弹出支付密码界面</button>

    <rs-password-alert :show="showPwd" @close="closePwd" @inputComplete="inputComplete" @gotoChangePwd="gotoResetPwd"></rs-password-alert>
  </view>
</template>

<script lang="ts" src="./rsPwd.ts"></script>

<style scoped lang="scss"></style>
