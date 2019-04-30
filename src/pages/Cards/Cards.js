import React from 'react';
import {
  Container,
  Card,
  ProfileCard
} from 'components';
import profiles from 'test/fixtures/profiles.json';

const CardsPage = () => (
  <Container size="large">
    <div className="uk-child-width-1-2@s uk-grid" data-uk-grid>
      <div className="uk-first-column">
        <Card
          size="small"
          title="Card 1"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
      <div>
        <ProfileCard {...profiles[0]} />
      </div>
    </div>
  </Container>
);

export default CardsPage;
