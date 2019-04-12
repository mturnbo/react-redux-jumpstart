import React from 'react';
import {
  Container,
  Card,
  ProfileCard
} from 'components';
import profiles from 'test/fixtures/profiles.json';

const CardsPage = () => (
  <Container size="small">
    <Card
      size="small"
      title="Card 1"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    />
    <ProfileCard {...profiles[0]} />
  </Container>
);

export default CardsPage;
