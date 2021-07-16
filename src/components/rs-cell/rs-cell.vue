<template>
  <view class="rs-cell-wrapper" @click="clickCell($event)">
    <view class="rs-cell rs-flex-row-between" style="width: 100%;">
      <view class="left-wrapper">
        <text style="font-size: 15px">{{ title }}</text>
        <slot></slot>
      </view>
      <text v-if="showArrow" class="rsIcon-arrow-right arrow" :style="{ color: arrowColor }"></text>
    </view>
    <view v-if="showLine" class="line"></view>
    <view
      v-if="ripple"
      class="rs-wave-ripple"
      :class="[waveActive ? 'rs-wave-active' : '']"
      :style="{
        top: rippleTop + 'px',
        left: rippleLeft + 'px',
        width: fields.targetWidth + 'px',
        height: fields.targetWidth + 'px',
        'background-color': 'rgba(0, 0, 0, 0.15)'
      }"
    ></view>
  </view>
</template>

<script>
export default {
  name: 'rs-cell',
  props: {
    title: {
      type: String,
      default: ''
    },
    showArrow: {
      type: Boolean,
      default: true
    },
    showLine: {
      type: Boolean,
      default: true
    },
    // 是否开启水波纹效果
    ripple: {
      type: Boolean,
      default: true
    },
    arrowColor: {
      type: String,
      default: ''
    }
  },
  computed: {},
  data() {
    return {
      rippleTop: 0, // 水波纹的起点Y坐标到按钮上边界的距离
      rippleLeft: 0, // 水波纹起点X坐标到按钮左边界的距离
      fields: {}, // 波纹按钮节点信息
      waveActive: false // 激活水波纹
    }
  },
  methods: {
    clickCell(e) {
      // 是否开启水波纹效果
      if (this.ripple) {
        // 每次点击时，移除上一次的类，再次添加，才能触发动画效果
        this.waveActive = false
        this.$nextTick(function() {
          this.getWaveQuery(e)
        })
      }
      this.$emit('cellClick', e)
    },
    // 查询按钮的节点信息
    getWaveQuery(e) {
      this.getElQuery().then(res => {
        // 查询返回的是一个数组节点
        let data = res[0]
        // 查询不到节点信息，不操作
        if (!data.width || !data.width) return
        // 水波纹的最终形态是一个正方形(通过border-radius让其变为一个圆形)，这里要保证正方形的边长等于按钮的最长边
        // 最终的方形（变换后的圆形）才能覆盖整个按钮
        data.targetWidth = data.height > data.width ? data.height : data.width
        if (!data.targetWidth) return
        this.fields = data
        let touchesX = ''
        let touchesY = ''
        // #ifdef MP-BAIDU
        touchesX = e.changedTouches[0].clientX
        touchesY = e.changedTouches[0].clientY
        // #endif
        // #ifdef MP-ALIPAY
        touchesX = e.detail.clientX
        touchesY = e.detail.clientY
        // #endif
        // #ifndef MP-BAIDU || MP-ALIPAY
        touchesX = e.touches[0].clientX
        touchesY = e.touches[0].clientY
        // #endif
        // 获取触摸点相对于按钮上边和左边的x和y坐标，原理是通过屏幕的触摸点（touchesY），减去按钮的上边界data.top
        // 但是由于`transform-origin`默认是center，所以这里再减去半径才是水波纹view应该的位置
        // 总的来说，就是把水波纹的矩形（变换后的圆形）的中心点，移动到我们的触摸点位置
        this.rippleTop = touchesY - data.top - data.targetWidth / 2
        this.rippleLeft = touchesX - data.left - data.targetWidth / 2
        this.$nextTick(() => {
          this.waveActive = true
        })
      })
    },
    // 获取节点信息
    getElQuery() {
      return new Promise(resolve => {
        let queryInfo = ''
        queryInfo = uni.createSelectorQuery().in(this)
        queryInfo.select('.rs-cell-wrapper').boundingClientRect()
        queryInfo.exec(data => {
          resolve(data)
        })
      })
    }
  }
}
</script>

<style scoped lang="scss">
.rs-cell-wrapper {
  position: relative;
  overflow: hidden;

  .rs-cell-btn {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  .rs-cell {
    padding: 12px 5px 12px 8px;
    box-sizing: border-box;
    .left-wrapper {
      flex-grow: 1;
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
    .arrow {
      flex-shrink: 0;
    }
  }
}
.line {
  height: 1px;
  width: 100%;
  transform: scaleY(0.5);
  background-color: #ddd;
}

.rs-wave-ripple {
  z-index: 0;
  position: absolute;
  border-radius: 100%;
  background-clip: padding-box;
  pointer-events: none;
  user-select: none;
  transform: scale(0);
  opacity: 1;
  transform-origin: center;
}

.rs-wave-ripple.rs-wave-active {
  opacity: 0;
  transform: scale(2);
  transition: opacity 0.5s linear, transform 0.4s linear;
}
</style>
