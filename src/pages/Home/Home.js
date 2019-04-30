import React from 'react';
import Container from 'components/Container';
import Content from 'components/Content';
import { loremIpsum } from 'lorem-ipsum';

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
