import React, { useRef } from 'react';
import './App.css';
import applause from './sounds/applause.mp3';
import boo from './sounds/boo.mp3';
import gasp from './sounds/gasp.mp3';
import tada from './sounds/tada.mp3';
import victory from './sounds/victory.mp3';
import wrong from './sounds/wrong.mp3';

const App = () => {
	const sounds = { applause, boo, gasp, tada, victory, wrong };

	const audioRef = useRef([]);

	const playHandler = (e) => {
		[...audioRef.current].forEach((audio) => {
			const stopSongs = () => {
				audio.pause();
				audio.currentTime = 0;
			};

			if (audio.src.includes(e.target.innerText)) {
				stopSongs();
				audio.play();
			} else {
				stopSongs();
			}
		});
	};

	return (
		<>
			{Object.keys(sounds).map((sound, idx) => {
				return (
					<audio
						key={idx}
						src={sounds[sound]}
						ref={(el) => (audioRef.current[idx] = el)}
					></audio>
				);
			})}
			<div id='buttons'>
				{Object.keys(sounds).map((sound, idx) => {
					return (
						<button key={idx} className='btn' onClick={playHandler}>
							{sound}
						</button>
					);
				})}
			</div>
		</>
	);
};

export default App;
