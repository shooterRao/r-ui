import Vue from 'vue'
import message from './message'

const MessageCtor = Vue.extend(message)

let instances = []
let ins
let i = 1 // 标识使用了多少次
let zIndex = 2000

const TYPES = ['info', 'success', 'warn', 'error', 'loading']

const Message = function Message(opts = {}) {
  if (typeof opts === 'string') {
    opts = {
      message: opts
    }
  }

  opts.onClose = function() {
    Message.close(id)
  }

  let id = 'r-message-' + i++
  ins = new MessageCtor({
    data: opts
  })
  ins.id = id

  ins.$mount()
  document.body.appendChild(ins.$el)

  let offsetTop = 20
  instances.length > 0 &&
    instances.forEach(_ => {
      offsetTop += _.$el.offsetHeight + 16
    })
  ins.offsetTop = offsetTop

  ins.show = true

  Vue.nextTick(() => {
    ins.$el.style.zIndex = zIndex + i
  })

  instances.push(ins)
  return ins
}

Message.close = function(id) {
  let len = instances.length
  let index = -1
  for (let i = 0; i < len; i++) {
    if (id === instances[i].id) {
      index = i
      // 删除实例
      instances.splice(i, 1)
      break
    }
  }
  // 第一个和最后一个，return
  if (len <= 1 || index === -1 || index > instances.length - 1) return

  // 偏移量实时调整
  const removedHeight = instances[index].$el.offsetHeight
  for (let i = index; i < len - 1; i++) {
    let dom = instances[i].$el
    dom.style['top'] =
      parseInt(dom.style['top'], 10) - removedHeight - 16 + 'px'
  }
}

TYPES.forEach(type => {
  Message[type] = function(opts = {}) {
    if (typeof opts === 'string') {
      opts = {
        message: opts
      }
    }
    opts.type = type
    return Message(opts)
  }
})

export default Message
