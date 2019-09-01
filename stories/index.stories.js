/* eslint-disable react/react-in-jsx-scope */

import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import Vue from 'vue'

import Introduce from './introduce'

storiesOf('综述', module).add('介绍', () => ({
  components: { Introduce },
  render(h) {
    return <Introduce />
  },
  methods: { action: linkTo('基础') }
}))


// import MyButton from './MyButton';
// import Welcome from './Welcome';

// storiesOf('Welcome', module).add('to Storybook', () => ({
//   components: { Welcome },
//   template: '<welcome :showApp="action" />',
//   methods: { action: linkTo('Button') },
// }));

// storiesOf('Button', module)
//   .add('with text', () => ({
//     components: { MyButton },
//     template: '<my-button @click="action">Hello Button</my-button>',
//     methods: { action: action('clicked') },
//   }))
//   .add('with JSX', () => ({
//     components: { MyButton },
//     render(h) {
//       return <my-button onClick={this.action}>With JSX</my-button>;
//     },
//     methods: { action: linkTo('clicked') },
//   }))
//   .add('with some emoji', () => ({
//     components: { MyButton },
//     template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
//     methods: { action: action('clicked') },
//   }));
