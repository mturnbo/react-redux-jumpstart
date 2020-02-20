import React from 'react';
import { loremIpsum } from 'lorem-ipsum';
import {
  Container,
  Content
} from '@/components';

const AboutPage = () => {
  const text = loremIpsum({
    count: 1,
    units: 'sentences',
    sentenceLowerBound: 2,
    sentenceUpperBound: 4
  });

  return (
    <Container size="large">
      <Content title="About Us" text={text} />
    </Container>
  );
};

export default AboutPage;
