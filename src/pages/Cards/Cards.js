import React from 'react';
import Card from 'components/Card';
import profiles from 'data/profiles.json';
import './Cards.scss';

const CardsPage = () => (
	<div>
		<h2>Cards</h2>
		<p>
			T-bone andouille cow beef ribs boudin, ball tip ribeye tail turkey shank pig picanha. Prosciutto capicola beef
			brisket tail sirloin meatloaf frankfurter. Rump spare ribs turducken kielbasa tenderloin flank, jowl drumstick
			tail jerky corned beef ham. Chuck rump pork andouille, meatball buffalo tongue venison. Pork belly tail salami
			turducken short ribs swine landjaeger beef turkey buffalo drumstick shank meatball jerky.
		</p>
		<div className="card-container">
			{profiles.map(profile => <Card {...profile} />)}
		</div>
	</div>
);

export default CardsPage;
