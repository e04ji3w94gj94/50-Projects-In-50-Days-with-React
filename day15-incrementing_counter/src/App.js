import React, { useState, useEffect } from 'react';
import './App.css';

const socialList = [
	{ "title": "Twitter Followers", "icon": "fab fa-twitter" },
	{ "title": "YouTube Subscribers", "icon": "fab fa-youtube" },
	{ "title": "Facebook Fans", "icon": "fab fa-facebook" }
]

const App = () => {
	const [twitter, setTwitter] = useState(0)
	const [youTube, setYouTube] = useState(0)
	const [facebook, setFacebook] = useState(0)

	const socialData = {
		"Twitter Followers": twitter,
		"YouTube Subscribers": youTube,
		"Facebook Fans": facebook
	}

	useEffect(() => {
		const updateCounter = () => {
			const target = 12000
			const increment = target / 200;
			if (twitter < target) {
				setTimeout(() => setTwitter((twitter) => Math.ceil(twitter + increment)), 10)
			}
		}
		updateCounter()

	}, [twitter])

	useEffect(() => {
		const updateCounter = () => {
			const target = 5000
			const increment = target / 200;
			if (youTube < target) {
				setTimeout(() => setYouTube((youTube) => Math.ceil(youTube + increment)), 10)
			}
		}
		updateCounter()

	}, [youTube])

	useEffect(() => {
		const updateCounter = () => {
			const target = 8000
			const increment = target / 200;
			if (facebook < target) {
				setTimeout(() => setFacebook((facebook) => Math.ceil(facebook + increment)), 10)
			}
		}
		updateCounter()

	}, [facebook])



	return (
		<div className="wrap">
			{
				socialList.map((social, idx) => {
					return (
						<div key={idx} className="counter-container">
							<i className={`${social.icon} fa-3x`}></i>
							<div className="counter">{socialData[social.title]}</div>
							<span>{social.title}</span>
						</div>
					)
				})
			}
		</div>
	);
};

export default App;
