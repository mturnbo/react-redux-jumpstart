import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from '@/components/Card';

storiesOf('Card', module)
  .add('renders', () => (
    <Card
      size="small"
      title="Card"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      footer="MORE"
    />
  ));
