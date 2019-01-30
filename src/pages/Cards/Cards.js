import React from 'react';
import Card from 'components/Card';
import SampleContent from 'components/SampleContent';
import profiles from 'data/profiles.json';
import './Cards.scss';

const CardsPage = () => (
	<div>
		<h2>Cards</h2>
		<SampleContent paragraphLength={5} />
		<div className="card-container">
			{profiles.map((profile, index) => <Card key={index} {...profile} />)}
		</div>
	</div>
);

export default CardsPage;
