import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withReadme } from 'storybook-readme'

import ButtonReadme from '@/components/button/README.md'
import IconReadme from '@/components/icon/README.md'

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
            <r-button iconName="add">add</r-button>
            <r-button iconName="add"></r-button>

            <r-button>
              add
              <r-icon name="add" />
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
            <r-button iconName="sousuo" type="primary" circle></r-button>
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
  .add('Icon', () => ({
    render(h) {
      return (
        <div>
          <r-icon name="add" style="font-size: 30px" />
          <r-icon name="add" style="font-size: 30px" color="orange" />
          <r-icon style="width: 30px; height: 30px" name="loading" />
          <r-icon
            style="width: 30px; height: 30px"
            name="loading"
            color="green"
          />
        </div>
      )
    }
  }), {
    readme: {
      sidebar: IconReadme
    }
  })
