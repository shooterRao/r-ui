# Button

## 参数

| 参数      | 说明                            | 类型    | 可选值                                             | 默认值  |
| --------- | ------------------------------- | ------- | -------------------------------------------------- | ------- |
| size      | 按钮大小                        | String  | large、small                                       | -       |
| iconName  | icon 名                         | String  | 参考 icon 组件页面                                 | -       |
| type      | 按钮类型                        | String  | default、primary、success、warn、error、dark、text | default |
| loading   | 是否 loading                    | Boolean | -                                                  | false   |
| hollow    | 是否镂空                        | Boolean | -                                                  | false   |
| circle    | 是否圆形                        | Boolean | -                                                  | false   |
| custom    | 是否用自定义颜色                | Boolean | -                                                  | false   |
| fontColor | 字体颜色，custom 为 true 时生效 | String  | -                                                  | -       |
| bgColor   | 背景颜色，custom 为 true 时生效 | String  | -                                                  | -       |

## 事件

| 事件  | 说明     | 返回值 |
| ----- | -------- | ------ |
| click | 点击事件 | Event  |
