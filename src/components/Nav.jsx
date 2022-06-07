import React from 'react';

import '../css/Nav.css';

import earth from '../images/earth.png';

export default function Nav() {
	return (
		<nav>
			<img
				src={earth}
				alt='minimalistic earth'
				className='nav--earth'
			/>
			<p className='nav--text'>my travel journal.</p>
		</nav>
	);
}
