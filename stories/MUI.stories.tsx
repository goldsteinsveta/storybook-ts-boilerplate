import { createMuiTheme,ThemeOptions, ThemeProvider } from '@material-ui/core';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import NodeSelector from '../src/NodeSelector';
import StickyHeadTable from '../src/StickyHeadTable';

const newTheme: ThemeOptions = {
	palette: {
		primary: {
			main: '#FF0000',
		},
	},
	typography: {
		fontFamily: '\Inter\, \Helvetica\, \Roboto\, \Arial\, sans-serif',
		h1: {
			fontWeight: 500,
			fontSize: 30,
			lineHeight: '120%',
		},
		h2: {
			fontWeight: 400,
			fontSize: 22,
			lineHeight: '120%',
			letterSpacing: 0.25,
		},
		h3: {
			fontWeight: 600,
			fontSize: 20,
			lineHeight: '120%',
		},
		h4: {
			fontWeight: 500,
			fontSize: 16,
			lineHeight: '120%',
		},
		body1: {
			fontWeight: 400,
			fontSize: 14,
			lineHeight: '120%',
			letterSpacing: 0.15,
		},
		body2: {
			fontWeight: 400,
			fontSize: 12,
			lineHeight: '120%',
			letterSpacing: 0.25,
		},
		button: {
			fontWeight: 500,
			fontSize: 14,
			lineHeight: '140%',
			letterSpacing: 0.2,
			textTransform: 'none',
		},
		subtitle1: {
			fontFamily: '\Cousine\, monospace',
			fontWeight: 400,
			fontSize: 20,
			lineHeight: '135%',
		},
		subtitle2: {
			fontFamily: '\Cousine\, monospace',
			fontWeight: 400,
			fontSize: 13,
			lineHeight: '135%',
			letterSpacing: 0.1,
		},
	},
};

const appliedTheme = createMuiTheme(newTheme);

storiesOf('MUI Playground', module)
	.addDecorator(withKnobs)
	.add('StickyHeadTable', () => {
		return <StickyHeadTable />;
	})
	.add('NodeSelector', () => (
		<ThemeProvider theme={appliedTheme}>
			<NodeSelector />
		</ThemeProvider>
	));