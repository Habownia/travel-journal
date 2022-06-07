import React from 'react';

import '../css/Card.css';

import pin from '../images/pin.png';

export default function Card(props) {
	console.log(props.img);
	return (
		<section>
			<img src={props.image} alt={props.alt} className='card--img' />
			<div className='card--info'>
				<div className='card--location'>
					<img src={pin} alt='pinpoint' className='pin' />
					<p>{props.location}</p>
					<a href={props.linkGoogleMaps} target='_blank'>
						View on Google Maps
					</a>
				</div>
				<p className='card--name bold'>{props.name}</p>
				<p className='card--date bold'>{props.date}</p>
				<p>{props.description}</p>
			</div>
		</section>
	);
}
