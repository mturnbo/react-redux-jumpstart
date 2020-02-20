import React, { useState } from 'react';
import profiles from '@test/fixtures/profiles.json';
import {
  Button,
  Container,
  Card,
  ProfileCard,
  ProgressBar,
  List,
  Parallax,
  Accordian
} from '@/components';
import { generateItemList } from '../../utils';

const listItems = generateItemList(5);

const ComponentsPage = () => {
  const [progress, setProgress] = useState(10);
  const listTitles = listItems.map(item => item.title);

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
      <Button category="primary" label="More Progress" onClick={() => setProgress(progress + 5)} />
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
          <List items={listTitles} />
        </div>
        <div>
          <List items={listTitles} modifier="bullet" />
        </div>
        <div>
          <List items={listTitles} modifier="divider" />
        </div>
        <div>
          <List items={listTitles} modifier="striped" />
        </div>
      </div>
      <hr />
      <h2>Accordian</h2>
      <Accordian items={listItems} />
    </Container>
  );
};

export default ComponentsPage;
