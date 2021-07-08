<template>
  <view>
    <view class="rs-item-swiper-wrapper">
      <rs-item-swiper @onDelete="onDelete(index)" v-for="(item, index) in data" :key="item">
        <view class="cell">cell{{ item }}</view>
      </rs-item-swiper>
      <rs-button :customStyle="{ width: '80vw', marginTop: '40px' }" @click="onReset">重置</rs-button>
    </view>
  </view>
</template>

<script lang="ts" src="./rsSwipeDelete.ts"></script>

<style scoped lang="scss">
.rs-item-swiper-wrapper {
  .field {
    width: 100%;
    flex-direction: row;
    display: flex;
    align-items: center;
    height: 40px;
    margin-top: 10px;
    padding: 0 30px;
  }
}
</style>
