<template>
  <view>
    <view class="rs-footer-wrapper" v-if="loadingType == 'loading'">
      <view class="icon-rotate" :style="{ 'border-color': borderColor }"></view>
      <view class="footer-tip">加载中...</view>
    </view>

    <view class="spinner-box" v-if="loadingType == 'spinner'">
      <view class="pulse-container">
        <view class="pulse-bubble pulse-bubble-1" :style="{ 'background-color': borderColor }"></view>
        <view class="pulse-bubble pulse-bubble-2" :style="{ 'background-color': borderColor }"></view>
        <view class="pulse-bubble pulse-bubble-3" :style="{ 'background-color': borderColor }"></view>
      </view>
    </view>
  </view>
</template>

<script>
import themeStyle from '@/components/rscss/colors.scss'

export default {
  name: 'rs-footer',
  props: {
    borderColor: {
      type: String,
      default: themeStyle.primary
    },
    loadingStyle: {
      type: String,
      default: 'loading' /// loading, spinner
    }
  },
  computed: {
    loadingType() {
      return this.loadingStyle
    }
  }
}
</script>

<style scoped lang="scss">
@import 'components/rscss/colors.scss';
.rs-footer-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
}
.rs-footer-wrapper .footer-tip {
  font-size: 14px;
  margin-left: 8px;
  color: gray;
}
/* 旋转动画 */
.rs-footer-wrapper .icon-rotate {
  width: 32rpx;
  height: 32rpx;
  border-radius: 50%;
  border: 2rpx solid gray;
  border-bottom-color: transparent !important; /*已在style设置border-color,此处需加 !important*/
  animation: iconRotate 0.6s linear infinite;
}

@keyframes iconRotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes pulse {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0.25;
    transform: scale(0.75);
  }
}

.spinner-box {
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
}

/* PULSE BUBBLES */

.pulse-container {
  width: 120upx;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.pulse-bubble {
  width: 20upx;
  height: 20upx;
  border-radius: 50%;
  background-color: $primary;
}

.pulse-bubble-1 {
  animation: pulse 0.4s ease 0s infinite alternate;
}
.pulse-bubble-2 {
  animation: pulse 0.4s ease 0.2s infinite alternate;
}
.pulse-bubble-3 {
  animation: pulse 0.4s ease 0.4s infinite alternate;
}
</style>
