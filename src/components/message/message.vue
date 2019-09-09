<template>
  <transition name="r-message-transform">
    <div
      :class="['r-message', `r-message-${type}`, closeabled && 'closeabled']"
      v-if="show"
      :style="positionStyle"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
    >
      <r-icon v-if="iconName" name="iconName" />
      <r-icon v-else :name="typeIconName" :class="type" />
      <slot>
        <p class="r-message-content">{{ message }}</p>
      </slot>
      <r-icon
        v-if="closeabled"
        name="close"
        class="r-message-close"
        @click.native="close"
      />
    </div>
  </transition>
</template>

<script>
import RIcon from '../icon'

const typeIconMap = {
  info: 'information-circle',
  success: 'checkmark-circle',
  warn: 'warning',
  error: 'close-circle',
  loading: 'loading'
}

export default {
  name: 'r-message',
  components: {
    'r-icon': RIcon
  },
  data() {
    return {
      message: '',
      duration: 3000,
      show: false,
      closed: false,
      iconName: '',
      type: 'info',
      onClose: null,
      closeabled: false,
      timer: null,
      offsetTop: 20
    }
  },
  mounted() {
    this.startTimer()
  },

  computed: {
    typeIconName() {
      return this.type && !this.iconName ? typeIconMap[this.type] : ''
    },

    positionStyle() {
      return {
        top: `${this.offsetTop}px`
      }
    }
  },

  methods: {
    // handleAfterLeave() {
    //   this.$destroy()
    //   this.$el.parentNode.removeChild(this.$el)
    // },

    close() {
      this.show = false
      // this.$message 创建的，onClose 默认为 function
      if (typeof this.onClose === 'function') {
        this.onClose(this)
      }
    },

    startTimer() {
      // duration 为0不会自动关闭
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.close()
          }
        }, this.duration)
      }
    },

    clearTimer() {
      clearTimeout(this.timer)
    }
  }
}
</script>
