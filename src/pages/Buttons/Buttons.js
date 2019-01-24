import React from 'react';
import Button from 'components/Button';

const ButtonsPage = () => (
	<div>
		<h2>Buttons</h2>
		<p>
			T-bone andouille cow beef ribs boudin, ball tip ribeye tail turkey shank pig picanha. Prosciutto capicola beef
			brisket tail sirloin meatloaf frankfurter. Rump spare ribs turducken kielbasa tenderloin flank, jowl drumstick
			tail jerky corned beef ham. Chuck rump pork andouille, meatball buffalo tongue venison. Pork belly tail salami
			turducken short ribs swine landjaeger beef turkey buffalo drumstick shank meatball jerky.
		</p>
		<Button label="Default" />
		<Button type="success" label="Success" />
		<Button type="error" label="Error" />
		<Button type="warning" label="Warning" />
	</div>
);

export default ButtonsPage;
