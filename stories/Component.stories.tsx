import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Component } from '../src/Component';

storiesOf('Component Group', module)
	.addDecorator(withKnobs)
	.add('Component Instance', () => ( <Component/> ));