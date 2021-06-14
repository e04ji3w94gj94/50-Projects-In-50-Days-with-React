import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
	const [joke, setJoke] = useState('');

	const genrrateJoke = useCallback(() => {
		const fetchData = async () => {
			const config = {
				headers: {
					Accept: 'application/json',
				},
			};

			const res = await axios.get('https://icanhazdadjoke.com', config);

			const joke = res.data.joke;

			setJoke(joke);
		};

		fetchData();
	}, []);

	useEffect(() => {
		genrrateJoke();
	}, [genrrateJoke]);

	return (
		<div className='container'>
			<h3>Don't Laugh Challenge</h3>
			<div id='joke' className='joke'>
				{joke}
			</div>
			<button className='btn' onClick={genrrateJoke}>
				Get Another Joke
			</button>
		</div>
	);
};

export default App;
