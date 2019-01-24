import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from 'components/Card';

const people = [
	{
		fullname: 'Viola Davis',
		title: 'Chief Architect'
	},
	{
		fullname: 'Yara Shahidi',
		title: 'Software Engineer'
	},
	{
		fullname: 'Uday Chopra',
		title: 'Compliance Officer'
	}
];

storiesOf('Card', module)
	.add('renders', () => (
		<Card fullname={people[0].fullname} title={people[0].title} />
	));
