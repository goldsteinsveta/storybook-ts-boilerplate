import React from 'react';
import { ThemeProvider, createMuiTheme, CssBaseline, ThemeOptions } from '@material-ui/core';

const substrateTheme: ThemeOptions = {
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
  palette: {
    primary: {
			main: '#00FFFF',
		},
  }

};

const ThemeToggleProvider = ({storyFn} ) => {
  const appliedTheme = createMuiTheme(substrateTheme);
	return (
		<ThemeProvider theme={appliedTheme}>
      <CssBaseline/>
      <div className='yooo'>
			  {storyFn}
        </div>
		</ThemeProvider>
	);
};
export default ThemeToggleProvider
