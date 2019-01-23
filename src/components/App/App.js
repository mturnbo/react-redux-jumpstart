import React from 'react';
import './App.css';
import Button from 'components/Button';

const App = () => (
	<div className="app">
		<h1>React Redux Jumpstart</h1>
		<Button label="Default" />
		<Button type="success" label="Success" />
		<Button type="error" label="Error" />
		<Button type="warning" label="Warning" />
	</div>
);

export default App;
