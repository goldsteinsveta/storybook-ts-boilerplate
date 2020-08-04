import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import NodeSelector from '../src/NodeSelector';

storiesOf('MUI Playground', module)
	.addDecorator(withKnobs)
	.add('NodeSelector', () => ( <NodeSelector /> ));