import React from 'react';
import SampleContent from 'components/SampleContent';

const HomePage = () => (
  <div>
    <h2>Home</h2>
		<SampleContent numParagraphs={3} paragraphLength={5} />
  </div>
);

export default HomePage;
