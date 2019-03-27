import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from 'components/Card';

const people = [
  {
    fullname: 'Viola Davis',
    title: 'Chief Architect',
    avatar: 'user-female'
  },
  {
    fullname: 'Yara Shahidi',
    title: 'Software Engineer',
    avatar: 'user-female'
  },
  {
    fullname: 'Uday Chopra',
    title: 'Compliance Officer',
    avatar: 'user-male'
  },
  {
    fullname: 'Miho Hatori',
    title: 'Musician',
    avatar: 'kawaii'
  }
];

storiesOf('Card', module)
  .add('renders', () => (
    <Card fullname={people[0].fullname} title={people[0].title} avatar={people[0].avatar} />
  ));
