import React, { useState } from 'react';
import './App.css';

const App = () => {
	const [leftHover, setLeftHover] = useState(false);
	const [rightHover, setRightHover] = useState(false);

	const leftMouseEnterHandler = () => {
		setLeftHover(true);
	};

	const rightMouseEnterHandler = () => {
		setRightHover(true);
	};

	const leftMouseLeaveHandler = () => {
		setLeftHover(false);
	};

	const rightMouseLeaveHandler = () => {
		setRightHover(false);
	};

	return (
		<div
			className={`container ${leftHover ? 'hover-left' : ''} ${
				rightHover ? 'hover-right' : ''
			}`}
		>
			<div
				className='split left'
				onMouseEnter={leftMouseEnterHandler}
				onMouseLeave={leftMouseLeaveHandler}
			>
				<h1>Playstation 5</h1>
				<a href='#' className='btn'>
					Buy Now
				</a>
			</div>
			<div
				className='split right'
				onMouseEnter={rightMouseEnterHandler}
				onMouseLeave={rightMouseLeaveHandler}
			>
				<h1>XBox Series X</h1>
				<a href='#' className='btn'>
					Buy Now
				</a>
			</div>
		</div>
	);
};

export default App;
