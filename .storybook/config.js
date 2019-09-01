import { configure, addDecorator, addParameters } from '@storybook/vue';

import { addReadme } from 'storybook-readme/vue';

import { themes, create } from '@storybook/theming';

// automatically import all files ending in *.stories.js
// const req = require.context('../stories', true, /\.stories\.js$/);
// function loadStories() {
//   req.keys().forEach(filename => req(filename));
// }

const basicTheme = create({
  base: 'light',
  brandTitle: 'r-ui',
  brandUrl: 'https://github.com/shooterRao/r-ui',
  brandImage: null,
});

addParameters({
  options: {
    showPanel: true,
    panelPosition: 'right',
    theme: basicTheme,
    // theme: themes.dark,
  },
  readme: {
    // You can set the global code theme here.
    codeTheme: 'github',
  },
});

addDecorator(addReadme);

function loadStories() {
  // req.keys().forEach(filename => req(filename));
  // 介绍
  require('../stories/index.js');
  // 基础
  require('../stories/base.stories.js');
}

configure(loadStories, module);
