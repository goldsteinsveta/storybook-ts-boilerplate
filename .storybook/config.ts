import { configure } from '@storybook/react';
import { addDecorator, addParameters } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { withThemePlayground } from 'storybook-addon-theme-playground';
import { polkadot, substrate } from '../src/globalStyle';

const req = require.context('../stories', true, /.stories.tsx$/);
function loadStories () {
  req.keys().forEach(req);
}
configure(loadStories, module);

// const options = {
//   theme: [
//     { name: 'Polkadot', theme: polkadot },
//     { name: 'Substrate', theme: substrate }
//   ],
//   provider: ThemeProvider,
//   overrides: {},
//   config: {
//     labelFormat: 'path',
//     showCode: true,
//     debounce: true,
//     debounceRate: 500,
//   }
// };
// addDecorator(withThemePlayground(options));

