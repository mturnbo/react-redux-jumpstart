import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from 'components/Button';

const labels = {
	default: 'Hello',
	success: 'Succes',
	error: 'Error',
	warning: 'Warning',
	click: 'Click Me'
};

storiesOf('Button', module)
	.add('default', () => (
		<Button label={labels.default} />
	))
	.add('error', () => (
		<Button type="error" label={labels.error} />
	))
	.add('with click action', () => (
		<Button onClick={action('clicked')} label={labels.click} />
	));
