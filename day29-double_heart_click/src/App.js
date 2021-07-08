import React, { useState, useEffect } from 'react';
import './App.css';



const App = () => {
	const [times, setTimes] = useState(0)
	const [loves, setLoves] = useState([])
	const [show, setShow] = useState(false)
	const [xInside, setXInside] = useState(false)
	const [yInside, setYInside] = useState(false)

	useEffect(() => {
		if (show) {
			setTimeout(() => {
				setShow(false)
				setLoves((loves) => [...loves].slice(1))
			}, 3000);
		}
	}, [show, times])


	const createHeart = (e) => {
		const x = e.clientX;
		const y = e.clientY;

		const leftOffset = e.target.offsetLeft;
		const topOffset = e.target.offsetTop;

		setXInside(x - leftOffset);
		setYInside(y - topOffset);
		setTimes(times + 1)
		setShow(true)
		setLoves((loves) => [...loves, loves.length])

	}

	return (
		<>
			<h3>Double click on the image to <i className="fas fa-heart"></i> it</h3>
			<small>You liked it <span>{times}</span> times</small>
			<div className="loveMe" onDoubleClick={createHeart}>
				{show && loves.map((_, idx) => {
					return (<i key={idx} className="fas fa-heart" style={{ "left": `${xInside}px`, "top": `${yInside}px` }}></i>)
				})
				}
			</div>

		</>

	)
};

export default App;
