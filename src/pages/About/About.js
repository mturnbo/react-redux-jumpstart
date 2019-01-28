import React from 'react';
import content from '../../data/content.json';
import { getRandomSample } from '../../utils';

const AboutPage = () => (
  <div>
    <h2>About Us</h2>
		<p>{getRandomSample(content.text, 5).join(' ')}</p>
		<p>{getRandomSample(content.text, 5).join(' ')}</p>
		<p>{getRandomSample(content.text, 5).join(' ')}</p>
  </div>
);

export default AboutPage;
