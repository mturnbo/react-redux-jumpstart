import React, { useState } from 'react';
import {
  Button,
  Container,
  Card,
  ProfileCard,
  ProgressBar,
  List,
  Parallax,
  Carousel
} from 'components';
import profiles from 'test/fixtures/profiles.json';
import { arrayFill } from '../../utils';

const listItems = arrayFill(5, i => `List Item ${i + 1}`);
const listImages = arrayFill(10, i => `https://picsum.photos/id/1${i}/200/300/`);

const ComponentsPage = () => {
  const [progress, setProgress] = useState(10);
  return (
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
      <ProgressBar value={progress} max={100} />
      <Button category="primary" colors={{ background: '#006600', text: '#FFFFFF' }} label="More Progress" onClick={() => setProgress(progress + 5)} />
      <Button category="primary" label="Less Progress" onClick={() => setProgress(progress - 5)} />
      <Button category="danger" label="Zero Progress" onClick={() => setProgress(0)} />
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
      <hr />
      <h2>Carousel</h2>
      <Carousel images={listImages} />
    </Container>
  );
};

export default ComponentsPage;
