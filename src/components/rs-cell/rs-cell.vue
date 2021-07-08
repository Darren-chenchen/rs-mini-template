<template>
  <view>
    <rs-button :ripple="ripple" class="rs-cell-wrapper rs-flex-column" @click="clickCell($event)">
      <view class="rs-cell rs-flex-row-between" style="width: 100%">
        <view class="left-wrapper">
          <text style="font-size: 15px">{{ title }}</text>
          <slot></slot>
        </view>
        <text v-if="showArrow" class="rsIcon-arrow-right arrow"></text>
      </view>
    </rs-button>
    <view v-if="showLine" @click.stop="clickCell($event)" class="line"></view>
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
    }
  },
  computed: {},
  data() {
    return {}
  },
  methods: {
    clickCell(e) {
      this.$emit('cellClick', e)
    }
  }
}
</script>

<style scoped lang="scss">
/deep/.rs-btn {
  border: none;
  border-width: 0px;
  border-color: transparent;
  border-radius: 0px;
}
/deep/.rs-btn::after {
  border-radius: 0px;
}
.rs-bold-border {
  border: solid 0px #000;
}
.uni-button:after {
  border-radius: 0px;
}
.rs-cell-wrapper {
  padding: 12px 5px 12px 12px;
  .rs-cell {
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
</style>
