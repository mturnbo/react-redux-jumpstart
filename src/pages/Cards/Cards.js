import React from 'react';
import Card from 'components/Card';
import Content from 'components/Content';
import profiles from 'data/profiles.json';
import './Cards.scss';

const CardsPage = () => (
	<div>
		<Content title="Cards" sampleLength="3" />
		<div className="card-container">
			{profiles.map((profile, index) => <Card key={index} {...profile} />)}
		</div>
	</div>
);

export default CardsPage;
