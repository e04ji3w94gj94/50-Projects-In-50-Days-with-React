import React, { useState, useEffect, useRef } from 'react';
import './App.css';


const App = () => {

	const [cups] = useState(8)
	const [liters, setLiters] = useState(2)
	const [fullCups, setFullCups] = useState([])
	const percentageRef = useRef(null)
	const remainedeRef = useRef(null)


	useEffect(() => {

		if (fullCups.length === 0) {
			percentageRef.current.style.visibility = 'hidden';
			percentageRef.current.style.height = 0;
		} else {
			percentageRef.current.style.visibility = 'visible';
			percentageRef.current.style.height = `${fullCups.length / cups * 330}px`;
			percentageRef.current.innerText = `${fullCups.length / cups * 100}%`
		}

		if (fullCups.length === cups) {
			remainedeRef.current.style.visibility = 'hidden';
			remainedeRef.current.style.height = 0;
		} else {
			remainedeRef.current.style.visibility = 'visible';
			setLiters(`${2 - (250 * fullCups.length / 1000)}`)

		}

	}, [fullCups, cups, liters])

	const clickHandler = (idx) => {

		if (fullCups[idx]) {
			setFullCups((fullCups) => [...fullCups.splice(0, idx + 1)])
		}
		else {
			const newArray = [...Array(idx + 1).keys()].map(() => true)
			setFullCups(newArray)

		}
	}

	return (
		<div className="wrap">
			<h1>Drink Water</h1>
			<h3>Goal: 2 Liters</h3>

			<div className="cup">
				<div className="remained" ref={remainedeRef}>
					<span id="liters">{liters}</span>
					<small >Remained</small>
				</div>
				<div className="percentage" ref={percentageRef} ></div>
			</div>

			<p>Select how many glasses of water that you have drank</p>
			<div className="cups">
				{
					[...Array(cups).keys()].map((item, idx) => {
						return <div key={idx} className={`cup cup-small ${fullCups[idx] ? 'full' : ''}`} onClick={() => clickHandler(idx)}>250 ml</div>
					})
				}
			</div>
		</div>
	);
};

export default App;
