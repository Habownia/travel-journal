import fjord from '../images/fjord.jpg';
import fuji from '../images/fuji.jpg';
import sydney from '../images/sydney.jpg';

export default [
	{
		id: 1,
		location: 'Japan',
		linkGoogleMaps:
			'https://www.google.com/maps/place/Fud%C5%BCi,+Kitayama,+Fujinomiya,+Prefektura+Shizuoka+418-0112,+Japonia/data=!4m2!3m1!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!5m1!1e4?sa=X&ved=2ahUKEwjnpcm975v4AhXps4sKHZ13DNQQ8gF6BAhrEAE',
		name: 'Mount Fuji',
		date: '12 Jan, 2021 - 24 Jan, 2021',
		description: `Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.`,
		image: fuji,
		alt: 'Mount Fuji in Japan',
	},
	{
		id: 2,
		location: 'Australia',
		linkGoogleMaps:
			'https://www.google.com/maps/place/Sydney+Opera+House/@-33.8567799,151.213108,17z/data=!3m2!4b1!5s0x6b12ae67d234a27f:0xd6d4e9380ca1e32f!4m5!3m4!1s0x6b12ae665e892fdd:0x3133f8d75a1ac251!8m2!3d-33.8567844!4d151.2152967!5m1!1e4',
		name: 'Sydney Opera House',
		date: '27 May, 2021 - 8 Jun, 2021',
		description: `The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings`,
		image: sydney,
		alt: 'Sydney Opera House',
	},
	{
		id: 3,
		location: 'Norway',
		linkGoogleMaps:
			'https://www.google.com/maps/place/Geirangerfjorden/@62.1049385,6.9351327,11z/data=!3m1!4b1!4m5!3m4!1s0x46169d427b268c51:0xb8c99540dcc397fe!8m2!3d62.101506!4d7.0940817!5m1!1e4',
		name: 'Geirangerfjord',
		date: '01 Oct, 2021 - 18 Nov, 2021',
		description: `The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.`,
		image: fjord,
		alt: 'nice fjord',
	},
];
