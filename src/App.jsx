import React from 'react';

import './css/App.css';

import Nav from './components/Nav';
import Card from './components/Card';

import data from './components/data';

function App() {
	const cards = data.map((item) => {
		console.log(item);
		return (
			<div>
				<Card key={item.id} {...item} />
				<hr />
			</div>
		);
	});

	return (
		<div>
			<Nav />
			<div>{cards}</div>
		</div>
	);
}

export default App;
