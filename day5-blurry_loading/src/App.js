import React, { useState, useRef, useEffect } from 'react';
import './App.css';

const App = () => {
	const [load, setLoad] = useState(0);
	const bgRef = useRef(null);
	const loadTextRef = useRef(null);

	const scale = (num, in_min, in_max, out_min, out_max) => {
		return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
	};

	useEffect(() => {
		let id = setInterval(() => {
			setLoad((load) => load + 1);
			loadTextRef.current.style.opacity = scale(load, 0, 100, 1, 0);
			bgRef.current.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
		}, 30);

		if (load > 99) {
			clearInterval(id);
		}

		return () => clearInterval(id);
	}, [load]);

	return (
		<>
			<section className='bg' ref={bgRef}></section>
			<div className='loading-text' ref={loadTextRef}>
				{load}%
			</div>
		</>
	);
};

export default App;
