<template>
  <view class="rs-number-stepper" @click.stop>
    <view @click.stop="_calcValue('minus')" class="rs-numbox__minus">
      <text class="rs-numbox--text rsIcon-minus" :class="{ 'rs-numbox--disabled': inputValue <= minVal || disabled }"></text>
    </view>
    <input :disabled="disabled" @blur="_onBlur" @focus="_onFocus" class="rs-numbox__value" type="number" v-model="inputValue" />
    <view @click.stop="_calcValue('plus')" class="rs-numbox__plus">
      <text class="rs-numbox--text rsIcon-add" :class="{ 'rs-numbox--disabled': inputValue >= maxVal || disabled }"></text>
    </view>
  </view>
</template>
<script lang="ts">
import Vue from 'vue'
import { Component, Prop, Watch } from 'vue-property-decorator'

@Component({
  name: 'rs-number-stepper',
  components: {}
})
export default class Index extends Vue {
  @Prop({
    type: Number,
    default: 1
  })
  value!: number
  @Prop({
    type: Number,
    default: 1
  })
  min!: number
  @Prop({
    type: Number,
    default: 999999
  })
  max!: number
  @Prop({
    type: Number,
    default: 1
  })
  step!: number
  @Prop({
    type: Boolean,
    default: false
  })
  disabled!: boolean

  inputValue = '1'
  focus = false
  needEmit = false
  minVal = 1
  maxVal = 100
  stepVal = 1

  @Watch('value')
  valueChanged(val: string, oldVal: string) {
    this.inputValue = val.toString()
    this.needEmit = false
  }
  @Watch('min')
  minValChange(val: number, oldVal: number) {
    this.minVal = val
  }
  @Watch('max')
  maxValChange(val: number, oldVal: number) {
    this.maxVal = val
  }
  @Watch('step')
  stepValChange(val: number, oldVal: number) {
    this.stepVal = val
  }

  @Watch('inputValue')
  inputValueChanged(newVal: string, oldVal: string) {
    // 输入期间 不更新
    // 初始化加载不更新
    if (this.needEmit) {
      if (+newVal !== +oldVal && !this.focus) {
        this.$emit('change', newVal)
      }
    } else {
      this.needEmit = true
    }
  }

  created() {
    this.inputValue = this.value.toString()
    this.minVal = this.min
    this.maxVal = this.max
    this.stepVal = this.step
  }

  _calcValue(type: any) {
    if (this.disabled) {
      return
    }
    const scale = this._getDecimalScale()
    let value = Number(this.inputValue) * scale
    let step = this.stepVal * scale
    if (type === 'minus') {
      value -= step
      if (value < this.minVal) {
        return
      }
      if (value > this.maxVal) {
        value = this.maxVal
      }
    } else if (type === 'plus') {
      value += step
      if (value > this.maxVal) {
        return
      }
      if (value < this.minVal) {
        value = this.minVal
      }
    }
    this.inputValue = (value / scale).toString()
  }
  _getDecimalScale() {
    let scale = 1
    // 浮点型
    if (~~this.stepVal !== this.stepVal) {
      scale = Math.pow(10, (this.stepVal + '').split('.')[1].length)
    }
    return scale
  }
  _onBlur(event: any) {
    this.focus = false
    let value = event.detail.value
    value = Number(value)
    // 不是数字
    if (!value) {
      this.inputValue = this.minVal.toString()
      this.$emit('change', this.minVal)
      return
    }
    // 不是整数倍
    if (value % this.stepVal !== 0) {
      value = value - (value % this.stepVal)
      this.inputValue = value
      this.$emit('change', value)
      return
    }
    value = +value
    if (value > this.maxVal) {
      value = this.maxVal
    } else if (value < this.minVal) {
      value = this.minVal
    }
    // this.inputValue = value;
    if (value !== this.inputValue) {
      this.$emit('change', value)
    }
  }
  _onFocus() {
    this.focus = true
  }
}
</script>
<style lang="scss" scoped>
// 扩大热区
$box-height: 30px;
$box-width: 30px;

.rs-number-stepper {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 72px;
  height: 22px;
  background-color: #fff;
}

.rs-numbox__value {
  width: 36px;
  height: 18px;
  font-size: 12px;
  text-align: center;
  background-color: #f7f8fa;
}

.rs-numbox__minus {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: $box-width;
  height: $box-height;
  color: $uni-text-color;
  font-size: 12px;
  text-align: center;
}

.rs-numbox__plus {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: $box-width;
  height: $box-height;
}

.rs-numbox--text {
  color: $uni-text-color;
  font-size: 16px;
  font-weight: 500;
}

.rs-numbox--disabled {
  color: $uni-text-color-disable;
}
</style>
