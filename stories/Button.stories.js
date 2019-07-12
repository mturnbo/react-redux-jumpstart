import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from 'components/Button';
import labels from 'test/fixtures/labels.json';

storiesOf('Button', module)
  .add('Default', () => (
    <Button label={labels.default} />
  ))
  .add('Error', () => (
    <Button category="danger" label={labels.error} />
  ))
  .add('With Click Action', () => (
    <Button category="secondary" onClick={action('clicked')} label={labels.click} />
  ));
