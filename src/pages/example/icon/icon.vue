<template>
  <view>
    <rs-tabs v-model="active1" activeColor="#32353A" lineColor="linear-gradient(135deg, #3391FF 0%, #1C64FD 100%)">
      <rs-tab title="线性风格">
        <view style="display: flex; flex-wrap: wrap">
          <view
            v-for="(item, index) in dataArr1"
            :key="index"
            style="
              flex-grow: 1;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              box-sizing: border-box;
              background-color: #fff;
              margin-top: 0.8px;
              margin-right: 1px;
            "
          >
            <view style="height: 50px; display: flex; flex-direction: column; justify-content: flex-end">
              <text :class="item" style="font-size: 33px"></text>
            </view>
            <text class="hm-two-clamp" style="width: 32vw; margin-top: 8px; text-align: center; font-size: 12px; color: #808080; height: 36px">
              {{ item }}
            </text>
          </view>
        </view>
      </rs-tab>
      <rs-tab title="实底风格">
        <view style="display: flex; flex-wrap: wrap">
          <view
            v-for="(item, index) in dataArr2"
            :key="index"
            style="
              flex-grow: 1;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              box-sizing: border-box;
              background-color: #fff;
              margin-top: 0.8px;
              margin-right: 1px;
            "
          >
            <view style="height: 50px; display: flex; flex-direction: column; justify-content: flex-end">
              <text :class="item" style="font-size: 33px"></text>
            </view>
            <text class="hm-two-clamp" style="width: 32vw; margin-top: 8px; text-align: center; font-size: 12px; color: #808080; height: 36px">
              {{ item }}
            </text>
          </view>
        </view>
      </rs-tab>
    </rs-tabs>
  </view>
</template>

<script lang="ts" src="./icon.ts"></script>

<style scoped></style>
