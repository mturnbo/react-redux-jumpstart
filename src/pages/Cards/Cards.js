import React from 'react';
import Card from 'components/Card';
import profiles from 'data/profiles.json';
import './Cards.scss';
import SampleContent from 'components/SampleContent';

const CardsPage = () => (
	<div>
		<h2>Cards</h2>
		<SampleContent paragraphLength={5} />
		<div className="card-container">
			{profiles.map(profile => <Card {...profile} />)}
		</div>
	</div>
);

export default CardsPage;
