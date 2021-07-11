import React, { useState } from 'react';
import './App.css';

const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];

const App = () => {
	const [squares, setSquares] = useState(500)
	const init = [...Array(squares).keys()].map((_, idx) => { return { "id": idx, "color": '' } })
	const [backgroundColor, setBackgroundColor] = useState(init)
	const [boxShadowColor, setBoxShadowColor] = useState(init)

	const getColor = (id) => {
		const color = getRandomColor();
		const newColorArray = [...backgroundColor]
		newColorArray[id] = { id, "color": color }
		setBackgroundColor(newColorArray);

		const newBoxShadowColor = [...boxShadowColor]
		newBoxShadowColor[id] = { id, "color": `0 0 2px ${color}, 0 0 10px ${color}` }
		setBoxShadowColor(newBoxShadowColor)
	}

	const removeColor = (id) => {
		const newColorArray = [...backgroundColor]
		newColorArray[id] = { id, "color": '#1d1d1d' }
		setBackgroundColor(newColorArray);

		const newBoxShadowColor = [...boxShadowColor]
		newBoxShadowColor[id] = { id, "color": '0 0 2px #000' }
		setBoxShadowColor(newBoxShadowColor)
	}

	const getRandomColor = () => {
		return colors[Math.floor(Math.random() * colors.length)]
	}

	return (
		<div className="container">
			{
				[...Array(squares).keys()].map((square, idx) => {
					return (
						<div
							key={idx}
							className="square"
							onMouseOver={() => getColor(idx)}
							onMouseOut={() => removeColor(idx)}
							style={{
								"background": `${backgroundColor[idx].color}`, "boxShadow": `${boxShadowColor[idx].color}`
							}} >

						</div>
					)
				})
			}
		</div>
	)
};

export default App;
