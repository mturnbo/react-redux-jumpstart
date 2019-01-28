import React from 'react';
import content from '../../data/content.json';
import { getRandomSample } from '../../utils';

const HomePage = () => (
  <div>
    <h2>Home</h2>
		<p>{getRandomSample(content.text, 5).join(' ')}</p>
		<p>{getRandomSample(content.text, 5).join(' ')}</p>
		<p>{getRandomSample(content.text, 5).join(' ')}</p>
  </div>
);

export default HomePage;
