import React, { useState, useEffect } from 'react';
import './App.css';

const showInit = [
	{ "id": 0, "in": true, "out": false },
	{ "id": 1, "in": true, "out": false },
	{ "id": 2, "in": true, "out": false },
	{ "id": 3, "in": true, "out": false }]

const App = () => {

	const [totalNum, setTotalNum] = useState(3)
	const [open, setOpen] = useState(3)
	const [show, setShow] = useState(showInit)
	const [counter, setCounter] = useState(true)
	const [finalMessage, setFinalMessage] = useState(false)

	useEffect(() => {
		resetDOM()
	}, [])

	const resetDOM = () => {
		setCounter(true)
		setFinalMessage(false)
		setOpen(3)
		setShow(showInit)
	}

	const runAnimation = (e, idx) => {

		if (e.animationName === 'goIn' && idx !== 0) {
			const newArray = [...show]
			newArray[idx] = { "id": idx, "in": false, "out": true }
			setShow(newArray)
		} else if (e.animationName === 'goOut') {
			const newArray = [...show]
			newArray[idx] = { "id": idx, "in": true, "out": true }
			setShow(newArray)
			setOpen(open - 1)
		}
		else {
			setCounter(false)
			setFinalMessage(true)
		}
	}

	const onClickHandler = () => {
		resetDOM()
	}


	return (
		<>
			<div className={`counter ${counter ? "" : "hide"}`}>
				<div className="nums">
					{
						[...Array(totalNum + 1).keys()].map((num, idx) => <span key={idx} className={`${open == show[idx].id && show[idx].in ? "in" : ''} ${open == show[idx].id && show[idx].out ? "out" : ''}`} onAnimationEnd={(e) => runAnimation(e, idx)}>{num}</span>)
					}
				</div>
				<h4>Get Ready</h4>
			</div>
			<div className={`final ${finalMessage ? "show" : ""}`}>
				<h1>GO</h1>
				<button onClick={onClickHandler}>Replay</button>
			</div>
		</>
	)
};

export default App;
