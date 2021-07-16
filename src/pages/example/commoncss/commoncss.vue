<template>
  <view class="rs-flex-column">
    <view class="rs-flex-column box" v-for="(item, index) in dataCssArr" :key="index">
      <view class="card">
        <view class="header">{{ item.title }}</view>
        <view class="cell" v-for="(em, i) in item.value" :key="i">{{ em.detail }}</view>
      </view>
    </view>
    <view class="box">
      <view class="card">
        <view class="header">文本（最大支持10行）</view>
        <view class="cell rs-flex-column" style="font-size: 14px;">
          <text style="line-height: 30px;">
            <text>rs-clamp-1:</text>
            <text class="rs-clamp-1">
              一行展示一行展示一行展示一行展示一行展示一行展示一行展示一行展示一行展示一行展示
            </text>
          </text>
        </view>
        <view class="cell rs-flex-column" style="font-size: 14px;">
          <text style="line-height: 30px;">
            <text>rs-clamp-2:</text>
            <text class="rs-clamp-2">
              2行展示,支持rs-clamp-1到rs-clamp-10，支持rs-clamp-1到rs-clamp-10，支持rs-clamp-1到rs-clamp-10，支持rs-clamp-1到rs-clamp-10，支持rs-clamp-1到rs-clamp-10
            </text>
          </text>
        </view>
      </view>
    </view>

    <view class="box">
      <view class="card">
        <view class="header">日期工具：DateUtil</view>
        <view class="cell">DateUtil.format(new Date()) => {{ DateUtil.format(new Date()) }}</view>
        <view class="cell">DateUtil.format(new Date(), 'yyyy-MM-dd') => {{ DateUtil.format(new Date(), 'yyyy-MM-dd') }}</view>
        <view class="cell">DateUtil.parseDate('2021-07-03') => {{ DateUtil.parseDate('2021-07-03') }} // 时间戳</view>
        <view class="cell">DateUtil.isDateObject(new Date()) => {{ DateUtil.isDateObject(new Date()) }}</view>
        <view class="cell">DateUtil.isDateObject('') => {{ DateUtil.isDateObject('') }}</view>
        <view class="cell">DateUtil.getDayCountOfMonth(2021, 7) => {{ DateUtil.getDayCountOfMonth(2021, 7) }}</view>
        <view class="cell">DateUtil.prevDate(new Date(), 1) => {{ DateUtil.prevDate(new Date(), 1) }} // 前n天的日期</view>
        <view class="cell">DateUtil.addHour(new Date(), 1) => {{ DateUtil.addHour(new Date(), 1) }}</view>
        <view class="cell">DateUtil.getWeekDayByDate(new Date()) => {{ DateUtil.getWeekDayByDate(new Date()) }}</view>

        <view class="header" style="margin-top: 12px">公共Utils</view>
        <view class="cell">Utils.deepClone(xxxx) // 深拷贝</view>
        <view class="cell">Utils.toThousandFilter(1200) => {{ Utils.toThousandFilter(1200) }}</view>
        <view class="cell">Utils.isEmpty(0) => {{ Utils.isEmpty(0) }}</view>
        <view class="cell">Utils.isEmpty({}) => {{ Utils.isEmpty({}) }}</view>
        <view class="cell">Utils.isEmpty([]) => {{ Utils.isEmpty([]) }}</view>
        <view class="cell">Utils.isEmpty(null) => {{ Utils.isEmpty(null) }}</view>
        <view class="cell">Utils.isEmpty('') => {{ Utils.isEmpty('') }}</view>

        <view class="header" style="margin-top: 12px">过滤器</view>
        <view class="cell">testObj.test | empty => {{ testObj.test | empty }}</view>
        <view class="cell">testObj.date | fmt => {{ testObj.date | fmt }}</view>
        <view class="cell">testObj.date | fmt('yyyy-MM-dd') => {{ testObj.date | fmt('yyyy-MM-dd') }}</view>
        <view class="cell">testObj.price | amt => {{ testObj.price | amt }}</view>
        <view class="cell">testObj.price | amt(1) => {{ testObj.price | amt(1) }}</view>
        <view class="cell">testObj.price | amt(4) => {{ testObj.price | amt(4) }}</view>
      </view>
    </view>
    <view class="box">
      <view class="card">
        <view class="header">
          项目主题颜色的使用
          <view class="rs-color-primary">rs-color-primary</view>
          <view class="rs-color-black">rs-color-black</view>
          <view class="rs-color-error">rs-color-error</view>
          <view class="rs-color-warning">rs-color-warning</view>
          <view class="rs-color-success">rs-color-success</view>
          <view class="rs-bg-primary">rs-bg-primary</view>
          <view class="rs-bg-black">rs-bg-black</view>
          <view class="rs-bg-error">rs-bg-error</view>
          <view class="rs-bg-warning">rs-bg-warning</view>
          <view class="rs-bg-success">rs-bg-success</view>
          <view class="rs-bg-gd-primary">rs-bg-gd-primary</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" src="./commoncss.ts"></script>
<style scoped>
.box {
  width: 100vw;
  background-color: #f3f5f9;
  padding: 0 24rpx 16rpx 24rpx;
  box-sizing: border-box;
}
.card {
  background-color: #ffffff;
  padding: 12px;
  box-shadow: 0px 4px 12px 0px rgba(196, 209, 236, 0.2);
  border-radius: 8px;
  margin-top: 12px;
}
.header {
  padding-bottom: 2px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
  font-weight: 500;
}
.cell {
  padding-top: 10px;
  font-size: 14px;
  line-height: 20px;
  color: #202124;
  user-select: all;
}
</style>
