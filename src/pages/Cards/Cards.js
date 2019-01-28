import React from 'react';
import Card from 'components/Card';
import profiles from 'data/profiles.json';
import './Cards.scss';
import {getRandomSample} from "../../utils";
import content from "../../data/content";

const CardsPage = () => (
	<div>
		<h2>Cards</h2>
		<p>{getRandomSample(content.text, 5).join(' ')}</p>
		<div className="card-container">
			{profiles.map(profile => <Card {...profile} />)}
		</div>
	</div>
);

export default CardsPage;
