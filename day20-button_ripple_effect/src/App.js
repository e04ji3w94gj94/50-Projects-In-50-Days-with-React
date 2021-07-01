import React, { useState, useEffect, useRef } from 'react';
import './App.css';


const App = () => {

	const [circle, setCircle] = useState(false)
	const [xInside, setXInside] = useState('')
	const [yInside, setYInside] = useState('')
	const circleRef = useRef(null)

	useEffect(() => {
		if (circle) {
			circleRef.current.style.left = xInside + 'px';
			circleRef.current.style.top = yInside + 'px';

			const id = setTimeout(() => setCircle(false), 500)

			return () => clearTimeout(id)
		}

	}, [circle, xInside, yInside])


	const onClickHandler = (e) => {
		const x = e.clientX;
		const y = e.clientY;


		const buttonTop = e.target.offsetTop;
		const buttonLeft = e.target.offsetLeft;
		setXInside(x - buttonLeft);
		setYInside(y - buttonTop);

		setCircle(true)
	}

	return (
		<>
			<button className="ripple" onClick={onClickHandler}>
				Click Me
				{circle && <span className='circle' ref={circleRef}></span>}
			</button>
		</>
	);
};

export default App;
