// 导入svg图标
import './svg'

import '@/styles/index.scss'

import Button from './button'
import Icon from './icon'
import Message from './message'

export const install = Vue => {
  if (install.installed) return
  install.installed = true
  Vue.component(Button.name, Button)
  Vue.component(Icon.name, Icon)

  Vue.prototype.$message = Message
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const plugin = {
  install
}

export default plugin
