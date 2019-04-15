import React from 'react';
import {
  Container,
  Content
} from 'components';
import { getContent } from '../../utils';

const AboutPage = () => (
  <Container size="small">
    <Content title="About Us" text={getContent(2)} />
  </Container>
);

export default AboutPage;
