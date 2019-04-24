import React from 'react';
import {
  Container,
  Content
} from 'components';
import { loremIpsum } from 'lorem-ipsum';

const AboutPage = () => {
  const text = loremIpsum({
    count: 1,
    units: 'sentences',
    sentenceLowerBound: 2,
    sentenceUpperBound: 4
  });

  return (
    <Container size="small">
      <Content title="About Us" text={text} />
    </Container>
  );
};

export default AboutPage;
