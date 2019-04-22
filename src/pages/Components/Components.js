import React from 'react';
import {
  Container,
  Card,
  ProfileCard,
  ProgressBar,
  List,
  Parallax
} from 'components';
import profiles from 'test/fixtures/profiles.json';

const listItems = Array(5).fill().map((val, idx) => `List Item ${idx + 1}`);

const ComponentsPage = () => (
  <Container size="large">
    <h2>Cards</h2>
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
    <hr />
    <h2>Progress Bar</h2>
    <ProgressBar value={25} max={100} />
    <hr />
    <h2>Parallax</h2>
    <Parallax image="https://picsum.photos/960/300/?random">
      <h2>This is a parallax</h2>
    </Parallax>
    <hr />
    <h2>List</h2>
    <div className="uk-child-width-1-4@m uk-grid" data-uk-grid>
      <div className="uk-first-column">
        <List items={listItems} />
      </div>
      <div>
        <List items={listItems} modifier="bullet" />
      </div>
      <div>
        <List items={listItems} modifier="divider" />
      </div>
      <div>
        <List items={listItems} modifier="striped" />
      </div>
    </div>
  </Container>
);

export default ComponentsPage;
