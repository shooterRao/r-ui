import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withReadme } from 'storybook-readme'

import ButtonReadme from '@/components/button/README.md'
import IconReadme from '@/components/icon/README.md'

// get all iconName
const icons = require
  .context('../src/assets/svg', false, /\.svg$/)
  .keys()
  .map(name => name.replace(/^\.\/([\w-]+)\.svg/, '$1'))

storiesOf('基础', module)
  .add(
    'Button',
    () => ({
      methods: { action: action('clicked') },
      render(h) {
        return (
          <section id="button-demo">
            <h2>size</h2>
            <r-button onclick={this.action}>默认按钮</r-button>
            <r-button size="small">小按钮</r-button>
            <r-button size="large">大按钮</r-button>

            <h2>带icon</h2>
            <r-button iconName="add-circle-outline">add</r-button>
            <r-button iconName="add-circle-outline"></r-button>

            <r-button>
              add
              <r-icon name="add-circle-outline" />
            </r-button>

            <h2>类型</h2>
            <r-button>default</r-button>
            <r-button type="primary">primary</r-button>
            <r-button type="success">success</r-button>
            <r-button type="warn">warn</r-button>
            <r-button type="error">error</r-button>
            <r-button type="dark">dark</r-button>
            <r-button type="text">text</r-button>

            <h2>loading</h2>
            <r-button loading>loading</r-button>
            <r-button type="primary" loading>
              loading
            </r-button>

            <h2>镂空效果</h2>
            <r-button hollow>default</r-button>
            <r-button type="primary" hollow>
              primary
            </r-button>
            <r-button type="success" hollow>
              success
            </r-button>
            <r-button type="warn" hollow>
              warn
            </r-button>
            <r-button type="error" hollow>
              error
            </r-button>
            <r-button type="dark" hollow>
              dark
            </r-button>

            <h2>圆形icon</h2>
            <r-button iconName="link" circle></r-button>
            <r-button iconName="sync" type="primary" circle></r-button>
            <r-button iconName="refresh" type="success" circle></r-button>
            <r-button iconName="refresh" type="warn" circle></r-button>
            <r-button iconName="refresh" type="error" circle></r-button>
            <r-button iconName="refresh" type="dark" circle></r-button>

            <h2>状态</h2>
            <r-button loading>loading</r-button>
            <r-button type="primary" loading>
              loading
            </r-button>
            <r-button disabled>disabled</r-button>
            <r-button disabled type="text">
              text-disabled
            </r-button>

            <h2>自定义颜色</h2>
            <r-button custom fontColor="white" bgColor="orange">
              custom
            </r-button>
          </section>
        )
      }
    }),
    {
      readme: {
        // content: ButtonReadme,
        sidebar: ButtonReadme
      }
    }
  )
  .add(
    'Icon',
    () => ({
      methods: {
        async handleIconClick(iconName) {
          await navigator.clipboard.writeText(`<r-icon name='${iconName}' />`)
          this.$message.success('图标已复制 🎉')
        }
      },
      render(h) {
        return (
          <section class="icon-view">
            <h2>自定义颜色</h2>
            <r-icon size={30} color="orange" name="happy" />
            <r-icon size={30} color="green" name="battery-charging" />
            <r-icon size={30} color="red" name="flame" />
            <h2>特殊类型icon</h2>
            <r-icon size={30} name="checkmark-circle" className="success" />
            <r-icon size={30} name="information-circle" className="warn" />
            <r-icon size={30} name="close-circle" className="error" />
            <h2>自定义大小</h2>
            <r-icon color="orange" size={10} name="star" />
            <r-icon color="orange" size={20} name="star" />
            <r-icon color="orange" size={30} name="star" />
            <r-icon color="orange" size={40} name="star" />
            <r-icon color="orange" size={50} name="star" />
            <h2 style="textAlign: center">所有图标</h2>
            {icons.map(iconName => (
              <div class="icon" on-click={() => this.handleIconClick(iconName)}>
                <r-icon name={iconName} />
                <span class="icon-name">{iconName}</span>
              </div>
            ))}
          </section>
        )
      }
    }),
    {
      readme: {
        sidebar: IconReadme
      }
    }
  )

  .add('Message', () => ({
    methods: {
      info() {
        this.$message('今晚吃鸡吗？')
      },
      success() {
        this.$message({
          message: '大吉大利，今晚吃鸡',
          type: 'success'
        })
      },
      warn() {
        this.$message({
          message: '前方有敌人！',
          type: 'warn'
        })
      },
      error() {
        this.$message.error('落地成盒！')
      },
      closeabled() {
        this.$message({
          message: '手动关闭',
          closeabled: true,
          duration: 0
        })
      },
      time() {
        this.$message({
          message: '5s后关闭',
          duration: 5000
        })
      }
    },
    render(h) {
      return (
        <section>
          <h2>Message消息通知</h2>
          <r-button type="primary" onclick={this.info}>
            通用显示
          </r-button>
          <r-button type="success" onclick={this.success}>
            成功通知
          </r-button>
          <r-button type="warn" onclick={this.warn}>
            警告通知
          </r-button>
          <r-button type="error" onclick={this.error}>
            错误通知
          </r-button>
          <h2>手动关闭</h2>
          <r-button onclick={this.closeabled}>
            手动关闭
          </r-button>
          <h2>自定义时间关闭</h2>
          <r-button onclick={this.time}>
            5秒后关闭
          </r-button>
        </section>
      )
    }
  }))
