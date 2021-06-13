import React, { useState, useRef, useEffect } from 'react';
import './App.css';

const App = () => {
	const [currentActive, setCurrentActive] = useState(1);
	const [prevButton, setPrevButton] = useState(true);
	const [nextButton, setNextButton] = useState(false);
	const [stepCount] = useState(4);
	const progressRef = useRef(null);

	useEffect(() => {
		progressRef.current.style.width = `${
			((currentActive - 1) / (stepCount - 1)) * 100
		}%`;

		if (currentActive === 1) {
			setPrevButton(true);
		} else if (currentActive === stepCount) {
			setNextButton(true);
		} else {
			setPrevButton(false);
			setNextButton(false);
		}
	}, [currentActive, stepCount]);

	const prevHandler = () => {
		setCurrentActive((currentActive) => currentActive - 1);

		if (currentActive < 1) {
			setCurrentActive(1);
		}
	};

	const nextHandler = () => {
		setCurrentActive((currentActive) => currentActive + 1);

		if (currentActive > stepCount) {
			setCurrentActive(stepCount);
		}
	};

	return (
		<div className='container'>
			<div className='progress-container'>
				<div className='progress' id='progress' ref={progressRef}></div>
				{[...Array(stepCount + 1).keys()].slice(1).map((step) => {
					return (
						<div
							key={step}
							className={`circle ${step <= currentActive ? 'active' : ''}`}
						>
							{step}
						</div>
					);
				})}
			</div>

			<button
				className='btn'
				id='prev'
				onClick={prevHandler}
				disabled={prevButton}
			>
				Prev
			</button>
			<button
				className='btn'
				id='next'
				onClick={nextHandler}
				disabled={nextButton}
			>
				Next
			</button>
		</div>
	);
};

export default App;
