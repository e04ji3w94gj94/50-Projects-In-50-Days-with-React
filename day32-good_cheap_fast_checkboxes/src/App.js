import React, { useState, useEffect } from 'react';
import './App.css';



const App = () => {

	const [good, setGood] = useState(false)
	const [cheap, setCheap] = useState(false)
	const [fast, setFast] = useState(false)
	const [selectCheck, setSelectCheck] = useState('')

	useEffect(() => {

		if (good && cheap && fast) {
			console.log("aa")
			if ("good" === selectCheck) {
				setFast(false);
			}

			if ("cheap" === selectCheck) {
				setGood(false);
			}

			if ("fast" === selectCheck) {
				setCheap(false);
			}
		}
	}, [good, cheap, fast, selectCheck])

	const onChangeHandler = (e, value) => {
		const changeFunc = {
			good: setGood,
			cheap: setCheap,
			fast: setFast,
		}

		changeFunc[e.target.id]((value) => !value)

		setSelectCheck(e.target.id)

	}



	return (
		<div className="wrap">
			<h2>How do you want your project to be?</h2>
			<div className="toggle-container">
				<input type="checkbox" id="good" className="toggle" checked={good} onChange={(e) => onChangeHandler(e, good)} />
				<label htmlFor="good" className="label">
					<div className="ball"></div>
				</label>
				<span>Good</span>
			</div>

			<div className="toggle-container">
				<input type="checkbox" id="cheap" className="toggle" checked={cheap} onChange={(e) => onChangeHandler(e, cheap)} />
				<label htmlFor="cheap" className="label">
					<div className="ball"></div>
				</label>
				<span>Cheap</span>
			</div>

			<div className="toggle-container">
				<input type="checkbox" id="fast" className="toggle" checked={fast} onChange={(e) => onChangeHandler(e, fast)} />
				<label htmlFor="fast" className="label">
					<div className="ball"></div>
				</label>
				<span>Fast</span>
			</div>
		</div>
	)
};

export default App;
