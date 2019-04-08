import React from 'react';
import {
  Container,
  Card
} from 'components';

const CardsPage = () => (
  <Container size="small">
    <Card
      size="small"
      title="Card 1"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    />
    <Card
      size="small"
      title="Card 2"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      footer="MORE"
    />
  </Container>
);

export default CardsPage;
