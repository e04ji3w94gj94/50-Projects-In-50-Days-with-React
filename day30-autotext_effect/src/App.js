import React, { useState, useEffect, useRef } from 'react';
import './App.css';



const App = () => {
	const [text, setText] = useState('')
	const [speed, setSpeed] = useState(1)
	let idx = useRef(1)
	let runSpeed = useRef(null)
	let initText = useRef('We Love Programming!')
	const onChangeHandler = (e) => {
		setSpeed(e.target.value)
	}

	useEffect(() => {
		runSpeed.current = 300 / speed;
		idx.current = 1;
		const writeText = () => {
			const newArray = [...initText.current]
			setText(() => [newArray.slice(0, idx.current)])

			idx.current += 1;

			if (idx.current > initText.current.length) {
				idx.current = 1;
			}

			setTimeout(writeText, runSpeed.current);
		}

		writeText()
	}, [speed])

	return (
		<div className="wrap">
			<h1>{text}</h1>

			<div>
				<label htmlFor="speed">Speed:</label>
				<input
					type="number"
					id="speed"
					name="speed"
					value={speed}
					min="1"
					max="10"
					step="1"
					onChange={onChangeHandler}
				/>
			</div>
		</div>

	)
};

export default App;
