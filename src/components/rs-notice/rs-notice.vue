<template>
  <view v-if="show" class="rs-notice" :style="{ backgroundColor: backgroundColor }" @click="onClick">
    <text v-if="showLeftIcon" class="rs-notice-icon" :class="leftIconType" :style="{ color: color }" @click="leftClick"></text>
    <view
      ref="textBox"
      class="rs-notice__content-wrapper"
      :class="{
        'rs-notice__content-wrapper--scrollable': scrollable,
        'rs-notice__content-wrapper--single': !scrollable && single
      }"
    >
      <view
        :id="elIdBox"
        class="rs-notice__content"
        :class="{
          'rs-notice__content--scrollable': scrollable,
          'rs-notice__content--single': !scrollable && single
        }"
      >
        <text
          :id="elId"
          ref="animationEle"
          class="rs-notice__content-text"
          :class="{
            'rs-notice__content-text--scrollable': scrollable,
            'rs-notice__content-text--single': !scrollable && single
          }"
          :style="{
            color: color,
            width: wrapWidth + 'px',
            animationDuration: animationDuration,
            '-webkit-animationDuration': animationDuration,
            animationPlayState: webviewHide ? 'paused' : animationPlayState,
            '-webkit-animationPlayState': webviewHide ? 'paused' : animationPlayState,
            animationDelay: animationDelay,
            '-webkit-animationDelay': animationDelay
          }"
        >
          {{ text }}
        </text>
      </view>
    </view>
    <view v-if="showRightIcon || showCount" class="rs-notice__more" @click="rightClick">
      <text v-if="showCount" class="rs-notice__count">{{ getCount }}</text>
      <text v-if="showRightIcon" class="rs-notice-icon" :class="rightIconType" :style="{ color: color }"></text>
    </view>
  </view>
</template>

<script>
// #ifdef APP-NVUE
const dom = weex.requireModule('dom')
const animation = weex.requireModule('animation')
// #endif

export default {
  name: 'rs-notice',
  components: {},
  props: {
    text: {
      // 显示文字
      type: String,
      default: ''
    },
    backgroundColor: {
      type: String,
      default: '#E9F0FF'
    },
    speed: {
      // 文字滚动的速度 默认1s滚动100px
      type: Number,
      default: 100
    },
    color: {
      type: String,
      default: '#1C64FD'
    },
    leftIconType: {
      // 左侧icon
      type: String,
      default: 'hdIcon-warn-circle'
    },
    showLeftIcon: {
      // 是否显示左侧icon
      type: Boolean,
      default: false
    },
    single: {
      // 是否单行
      type: Boolean,
      default: false
    },
    scrollable: {
      // 是否滚动，添加后控制单行效果取消
      type: Boolean,
      default: false
    },
    count: {
      // 消息数量
      type: Number,
      default: 0
    },
    showCount: {
      // 是否显示消息数量
      type: Boolean,
      default: false
    },
    rightIconType: {
      // 右侧icon
      type: String,
      default: 'hdIcon-arrow-right'
    },
    showRightIcon: {
      // 是否显示右侧icon
      type: Boolean,
      default: false
    }
  },
  data() {
    const elId = `Hd_${Math.ceil(Math.random() * 10e5).toString(36)}`
    const elIdBox = `Hd_${Math.ceil(Math.random() * 10e5).toString(36)}`
    return {
      textWidth: 0,
      boxWidth: 0,
      wrapWidth: '',
      webviewHide: false,
      // #ifdef APP-NVUE
      stopAnimation: false,
      // #endif
      elId: elId,
      elIdBox: elIdBox,
      show: true,
      animationDuration: 'none',
      animationPlayState: 'paused',
      animationDelay: '0s'
    }
  },
  mounted() {
    // #ifdef APP-PLUS
    var pages = getCurrentPages()
    var page = pages[pages.length - 1]
    var currentWebview = page.$getAppWebview()
    currentWebview.addEventListener('hide', () => {
      this.webviewHide = true
    })
    currentWebview.addEventListener('show', () => {
      this.webviewHide = false
    })
    // #endif
    this.$nextTick(() => {
      this.initSize()
    })
  },
  computed: {
    getCount() {
      return this.count > 99 ? '99+' : this.count
    }
  },
  // #ifdef APP-NVUE
  beforeDestroy() {
    this.stopAnimation = true
  },
  // #endif
  methods: {
    initSize() {
      if (this.scrollable) {
        // #ifndef APP-NVUE
        let query = []
        let textQuery = new Promise((resolve, reject) => {
          uni
            .createSelectorQuery()
            // #ifndef MP-ALIPAY
            .in(this)
            // #endif
            .select(`#${this.elId}`)
            .boundingClientRect()
            .exec(ret => {
              this.textWidth = ret[0].width
              resolve()
            })
        })
        let boxQuery = new Promise((resolve, reject) => {
          uni
            .createSelectorQuery()
            // #ifndef MP-ALIPAY
            .in(this)
            // #endif
            .select(`#${this.elIdBox}`)
            .boundingClientRect()
            .exec(ret => {
              this.boxWidth = ret[0].width
              resolve()
            })
        })
        query.push(textQuery)
        query.push(boxQuery)
        Promise.all(query).then(() => {
          this.animationDuration = `${this.textWidth / this.speed}s`
          this.animationDelay = `-${this.boxWidth / this.speed}s`
          setTimeout(() => {
            this.animationPlayState = 'running'
          }, 1000)
        })
        // #endif
        // #ifdef APP-NVUE
        dom.getComponentRect(this.$refs['animationEle'], res => {
          let winWidth = uni.getSystemInfoSync().windowWidth
          this.textWidth = res.size.width
          animation.transition(
            this.$refs['animationEle'],
            {
              styles: {
                transform: `translateX(-${winWidth}px)`
              },
              duration: 0,
              timingFunction: 'linear',
              delay: 0
            },
            () => {
              if (!this.stopAnimation) {
                animation.transition(
                  this.$refs['animationEle'],
                  {
                    styles: {
                      transform: `translateX(-${this.textWidth}px)`
                    },
                    timingFunction: 'linear',
                    duration: ((this.textWidth - winWidth) / this.speed) * 1000,
                    delay: 1000
                  },
                  () => {
                    if (!this.stopAnimation) {
                      this.loopAnimation()
                    }
                  }
                )
              }
            }
          )
        })
        // #endif
      }
      // #ifdef APP-NVUE
      if (!this.scrollable && this.single) {
        dom.getComponentRect(this.$refs['textBox'], res => {
          this.wrapWidth = res.size.width
        })
      }
      // #endif
    },
    loopAnimation() {
      // #ifdef APP-NVUE
      animation.transition(
        this.$refs['animationEle'],
        {
          styles: {
            transform: `translateX(0px)`
          },
          duration: 0
        },
        () => {
          if (!this.stopAnimation) {
            animation.transition(
              this.$refs['animationEle'],
              {
                styles: {
                  transform: `translateX(-${this.textWidth}px)`
                },
                duration: (this.textWidth / this.speed) * 1000,
                timingFunction: 'linear',
                delay: 0
              },
              () => {
                if (!this.stopAnimation) {
                  this.loopAnimation()
                }
              }
            )
          }
        }
      )
      // #endif
    },
    rightClick() {
      this.$emit('right')
    },
    leftClick() {
      this.$emit('left')
    },
    onClick() {
      this.$emit('click')
    },
    close() {
      this.show = false
    }
  }
}
</script>

<style lang="scss" scoped>
.rs-notice {
  /* #ifndef APP-NVUE */
  display: flex;
  width: 100%;
  box-sizing: border-box;
  /* #endif */
  flex-direction: row;
  align-items: center;
  padding: 8px 12px;
  margin-bottom: 10px;
}

.rs-notice-close {
  margin-right: 5px;
}

.rs-notice-icon {
  margin: 0 5px;
  font-size: 18px;
  font-weight: 500;
}

.rs-notice__content-wrapper {
  flex: 1;
  flex-direction: column;
  overflow: hidden;
}

.rs-notice__content-wrapper--single {
  /* #ifndef APP-NVUE */
  line-height: 18px;
  /* #endif */
}

.rs-notice__content-wrapper--single,
.rs-notice__content-wrapper--scrollable {
  flex-direction: row;
}

/* #ifndef APP-NVUE */
.rs-notice__content-wrapper--scrollable {
  position: relative;
  height: 18px;
}
/* #endif */

.rs-notice__content--scrollable {
  /* #ifdef APP-NVUE */
  flex: 0;
  /* #endif */
  /* #ifndef APP-NVUE */
  flex: 1;
  display: block;
  overflow: hidden;
  /* #endif */
}

.rs-notice__content--single {
  /* #ifndef APP-NVUE */
  display: flex;
  flex: none;
  width: 100%;
  justify-content: center;
  /* #endif */
}

.rs-notice__content-text {
  font-size: 14px;
  line-height: 18px;
  font-weight: 500;
  /* #ifndef APP-NVUE */
  word-break: break-all;
  /* #endif */
}

.rs-notice__content-text--single {
  /* #ifdef APP-NVUE */
  lines: 1;
  /* #endif */
  /* #ifndef APP-NVUE */
  display: block;
  width: 100%;
  white-space: nowrap;
  /* #endif */
  overflow: hidden;
  text-overflow: ellipsis;
}

.rs-notice__content-text--scrollable {
  /* #ifdef APP-NVUE */
  lines: 1;
  padding-left: 750rpx;
  /* #endif */
  /* #ifndef APP-NVUE */
  position: absolute;
  display: block;
  height: 18px;
  line-height: 18px;
  white-space: nowrap;
  padding-left: 100%;
  animation: notice 10s 0s linear infinite both;
  animation-play-state: paused;
  /* #endif */
}

.rs-notice__more {
  /* #ifndef APP-NVUE */
  display: inline-flex;
  /* #endif */
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  padding-left: 5px;
}

.rs-notice__more-text {
  font-size: 14px;
}
.rs-notice__count {
  display: inline-block;
  padding: 0 2rpx;
  min-width: 32rpx;
  height: 32rpx;
  line-height: 32rpx;
  background: linear-gradient(180deg, rgba(255, 121, 121, 1) 0%, rgba(252, 44, 74, 1) 100%);
  border-radius: 16rpx;
  color: #ffffff;
  font-weight: bold;
  text-align: center;
  font-size: 18rpx;
}

@keyframes notice {
  100% {
    transform: translate3d(-100%, 0, 0);
  }
}
</style>
