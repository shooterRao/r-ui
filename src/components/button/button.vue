<template>
  <button
    type="button"
    :disabled="disabled"
    :class="buttonClass"
    :style="buttonStyle"
    @click="handleClick"
  >
    <r-icon v-if="iconName" :name="iconName" />
    <r-icon name="loading" v-if="loading" />
    <span v-if="showText">
      <slot></slot>
    </span>
  </button>
</template>

<script>
import Icon from '../icon'

const prefixCls = 'r-button'

export default {
  name: 'r-button',
  components: {
    'r-icon': Icon
  },
  props: {
    // 大小
    // large、small
    size: {
      type: String,
      default: ''
    },
    // 类型
    // default, primary, success, warn, error, dark, text
    type: {
      type: String,
      default: 'default'
    },
    // 是否为镂空按钮
    hollow: {
      type: Boolean,
      default: false
    },
    // 是否为圆形按钮
    circle: {
      type: Boolean,
      default: false
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // loading
    loading: {
      type: Boolean,
      default: false
    },
    // 是否采用自定义颜色
    custom: {
      type: Boolean,
      default: false
    },
    // 背景色
    bgColor: {
      type: String
    },
    // 字体颜色
    fontColor: {
      type: String
    },
    // 图标名
    iconName: {
      type: String
    }
  },
  computed: {
    buttonClass() {
      const { size, type, loading, hollow, circle, custom } = this
      return [
        `${prefixCls}`,
        size && `${prefixCls}-${size}`,
        hollow ? `${prefixCls}-hollow-${type}` : `${prefixCls}-${type}`,
        circle && 'circle',
        loading && 'loading',
        custom && 'custom'
      ]
    },
    buttonStyle() {
      const { custom, bgColor, fontColor } = this
      const style = {}
      if (bgColor) {
        style.backgroundColor = bgColor
        style.borderColor = bgColor
      }
      if (fontColor) {
        style.color = fontColor
      }
      return custom ? style : ''
    },
    showText() {
      return this.$slots.default && this.$slots.default.length > 0
    }
  },
  methods: {
    handleClick(event) {
      if (this.disabled || this.loading) {
        return
      }
      this.$emit('click', event)
    }
  }
}
</script>
