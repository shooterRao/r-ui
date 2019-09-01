<template>
  <i>
    <svg
      :style="svgColor"
      fill="currentColor"
      :class="svgClass"
      aria-hidden="true"
    >
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
    }
  },
  computed: {
    iconName() {
      return `#ricon-${this.name}`
    },
    svgClass() {
      if (this.className) {
        return `r-icon ${this.className}`
      }
      return 'r-icon'
    },
    svgColor() {
      if (this.color) {
        return {
          color: this.color
        }
      }
      return ''
    }
  }
}
</script>
