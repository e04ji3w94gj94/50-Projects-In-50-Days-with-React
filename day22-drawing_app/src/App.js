import React, { useState, useEffect, useRef } from 'react';
import './App.css';


const App = () => {

	const [size, setSize] = useState(10)
	const [isPressed, setIsPressed] = useState(false)
	const [color, setColor] = useState('black')
	const [x, setX] = useState(null)
	const [y, setY] = useState(null)
	const [ctx, setCtx] = useState(null)
	const canvasRef = useRef('')



	useEffect(() => {
		if (canvasRef) {
			setCtx(canvasRef.current.getContext('2d'));
		}

		if (size > 50) {
			setSize(50)
		}
		else if (size < 5) {
			setSize(5)

		}
	}, [x, y, size])


	const onMouseDownHandler = (e) => {
		setIsPressed(true)
		setX(e.nativeEvent.offsetX)
		setY(e.nativeEvent.offsetY)
	}
	const onMouseUpHandler = (e) => {
		setIsPressed(false)
		setX(null)
		setY(null)
	}

	const onMouseMoveHandler = (e) => {
		if (isPressed) {

			const x2 = e.nativeEvent.offsetX
			const y2 = e.nativeEvent.offsetY

			drawCircle(x2, y2)
			drawLine(x, y, x2, y2)

			setX(x2)
			setY(y2)
		}
	}

	const drawCircle = (x, y) => {
		ctx.beginPath();
		ctx.arc(x, y, size, 0, Math.PI * 2)
		ctx.fillStyle = color
		ctx.fill()
	}

	const drawLine = (x1, y1, x2, y2) => {
		ctx.beginPath()
		ctx.moveTo(x1, y1)
		ctx.lineTo(x2, y2)
		ctx.strokeStyle = color
		ctx.lineWidth = size * 2
		ctx.stroke()
	}

	const decreaseBtnHandler = () => {
		setSize(size - 5)
	}

	const increaseBtnHandler = () => {
		setSize(size + 5)

	}

	const colorHandler = (e) => {
		setColor(e.target.value)
	}

	const clearHandler = () => {
		ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
	}
	return (
		<div className="wrap">
			<canvas ref={canvasRef} width="800" height="700" onMouseDown={onMouseDownHandler} onMouseUp={onMouseUpHandler} onMouseMove={onMouseMoveHandler}></canvas>
			<div className="toolbox">
				<button onClick={decreaseBtnHandler}>-</button>
				<span>{size}</span>
				<button onClick={increaseBtnHandler}>+</button>
				<input type="color" onChange={colorHandler} />
				<button onClick={clearHandler}>X</button>
			</div>

		</div>
	);
};

export default App;
