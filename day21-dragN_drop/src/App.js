import React, { useState } from 'react';
import './App.css';


const App = () => {

	const [emptys] = useState(5)
	const [fill, setFill] = useState(0)
	const [hold, setHold] = useState(false)
	const [invisible, setInvisible] = useState(false)
	const [hovered, setHovered] = useState(false)

	const onDragStartHandler = () => {
		setHold(true)
		setTimeout(() => setInvisible(true), 0);
	}

	const onDragEndHandler = () => {
		setHold(false)
		setInvisible(false)
		setHovered(false)

	}

	const onDragOverHandler = (e) => {
		e.preventDefault();
	}

	const onDragEnterHandler = (e, idx) => {
		e.preventDefault();
		setFill(Number(idx))
		setHovered(true)
		setInvisible(false)
	}


	const onDropHandler = () => {
		setHovered(false)
		setHold(false)
	}


	return (
		<div className='wrap'>
			{
				[...Array(emptys).keys()].map((empty, idx) => {
					return (
						<div key={idx}
							className={`empty ${fill === idx && hovered ? 'hovered' : ''}`}
							onDragOver={onDragOverHandler}
							onDragEnter={(e) => onDragEnterHandler(e, idx)}

						>
							{fill === idx &&
								<div className={`${invisible ? 'invisible' : `fill ${hold ? 'hold' : ''}`}`} draggable
									onDragStart={onDragStartHandler}
									onDragEnd={onDragEndHandler}
									onDrop={onDropHandler}
								></div>
							}
						</div>
					)
				})
			}
		</div>
	);
};

export default App;
