import React from 'react';
import './App.css';
import Button from 'components/Button';
import Card from 'components/Card';

const App = () => (
	<div className="app">
		<h1>React Redux Jumpstart</h1>
		<Button label="Default" />
		<Button type="success" label="Success" />
		<Button type="error" label="Error" />
		<Button type="warning" label="Warning" />
		<Card fullname="Grace Kelly" title="Actress" />
	</div>
);

export default App;
