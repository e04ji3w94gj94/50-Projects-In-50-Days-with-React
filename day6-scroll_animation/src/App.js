import React, { useState, useRef, useEffect } from 'react';
import './App.css';

const App = () => {
	const [contentCount] = useState(13);
	const [showBox, setShowBox] = useState({});
	const boxRef = useRef([]);

	useEffect(() => {
		const showBoxHandler = () => {
			const triggerBottom = (window.innerHeight / 5) * 4;

			[...boxRef.current].forEach((box, id) => {
				const boxTop = box.getBoundingClientRect().top;

				if (boxTop < triggerBottom) {
					setShowBox((showBox) => {
						return { ...showBox, [id]: true };
					});
				} else {
					setShowBox((showBox) => {
						return { ...showBox, [id]: false };
					});
				}
			});
		};

		showBoxHandler();
		window.addEventListener('scroll', showBoxHandler);

		return () => window.removeEventListener('scroll', showBoxHandler);
	}, []);

	return (
		<>
			<h1>Scroll to see the animation</h1>
			{[...Array(contentCount).keys()].map((id) => (
				<div
					key={id}
					className={`box ${showBox[id] ? 'show' : ''}`}
					ref={(el) => (boxRef.current[id] = el)}
				>
					<h2>Content</h2>
				</div>
			))}
		</>
	);
};

export default App;
