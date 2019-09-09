<template>
  <i :class="['r-icon', `r-icon-${name}`, className]" :style="svgStyle">
    <svg fill="currentColor" aria-hidden="true" width="1em" height="1em">
      <!-- prettier-ignore -->
      <use :xlink:href="iconName" />
    </svg>
  </i>
</template>

<script>
export default {
  name: 'r-icon',
  props: {
    // icon名字
    name: {
      type: String,
      required: true
    },
    // className
    className: {
      type: String
    },
    // 颜色
    color: {
      type: String
    },
    size: {
      type: Number
    }
  },
  computed: {
    iconName() {
      return `#ricon-${this.name}`
    },
    svgClass() {
      if (this.className) {
        return `${this.className}`
      }
      return ''
    },
    svgStyle() {
      const { color, size } = this
      const style = {}
      color && (style.color = color)
      size && (style.fontSize = `${size}px`)
      return style
    }
  }
}
</script>
