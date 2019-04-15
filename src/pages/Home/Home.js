import React from 'react';
import Container from 'components/Container';
import Content from 'components/Content';
import { getContent } from '../../utils';

const HomePage = () => (
  <Container size="small">
    <Content title="Home" text={getContent(2)} />
  </Container>
);

export default HomePage;
