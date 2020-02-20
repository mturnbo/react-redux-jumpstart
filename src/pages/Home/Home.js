import React from 'react';
import { loremIpsum } from 'lorem-ipsum';
import Container from '@/components/Container';
import Content from '@/components/Content';

const HomePage = () => {
  const text = loremIpsum({
    count: 1,
    units: 'sentences',
    sentenceLowerBound: 2,
    sentenceUpperBound: 4
  });

  return (
    <Container size="large">
      <Content title="Home" text={text} />
    </Container>
  );
};

export default HomePage;
