import { storiesOf } from '@storybook/vue'
import { linkTo } from '@storybook/addon-links'

import Vue from 'vue'

import '@/styles/index.scss'
import rui from '@/components'

Vue.use(rui)

import './fix.scss'

import Introduce from './introduce'

storiesOf('综述', module).add('介绍', () => ({
  components: { Introduce },
  render(h) {
    return <Introduce />
  },
  methods: { action: linkTo('基础') }
}))
