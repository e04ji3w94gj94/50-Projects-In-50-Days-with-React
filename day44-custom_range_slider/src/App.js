import React, { useState, useRef } from 'react';
import './App.css';

const App = () => {

	const [value, setValue] = useState(50)
	const inputRef = useRef()
	const labelRef = useRef()

	const onChangeHandler = (e) => {

		const value = e.target.value;

		const range_width = getComputedStyle(inputRef.current).getPropertyValue('width');
		const label_width = getComputedStyle(labelRef.current).getPropertyValue('width');

		const num_range_width = range_width.substring(0, range_width.length - 2);
		const num_label_width = label_width.substring(0, label_width.length - 2);

		const max = e.target.max;
		const min = e.target.min;

		const left = value * (num_range_width / max) - num_label_width / 2 + scale(value, min, max, 10, -10);

		labelRef.current.style.left = `${left}px`;
		setValue(value)

	}

	const scale = (num, in_min, in_max, out_min, out_max) => {
		return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
	}


	return (
		<>
			<h2>Custom Range Slider</h2>
			<div className="range-container">
				<input type="range" id="range" min="0" max="100" value={value} onChange={onChangeHandler} ref={inputRef} />
				<label htmlFor="range" ref={labelRef}>{value}</label>
			</div>
		</>
	)
};

export default App;
