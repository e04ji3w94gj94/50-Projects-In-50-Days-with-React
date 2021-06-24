import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
	const [keydowning, setKeyDowning] = useState(false)
	const [eventKey, setEventKey] = useState('')
	const [eventKeyCode, setEventKeyCode] = useState('')
	const [eventCode, setEventCode] = useState('')


	useEffect(() => {
		const keyDownHandler = (e) => {
			setKeyDowning(true)
			setEventKey(e.key)
			setEventKeyCode(e.keyCode)
			setEventCode(e.code)
		}

		window.addEventListener('keydown', keyDownHandler);

		return () => {
			window.removeEventListener('keydown', keyDownHandler);
		};
	}, []);

	const keyRender = () => {
		return (
			<>
				<div className="key">
					{eventKey === ' ' ? 'Space' : eventKey}
					<small>eventKey</small>
				</div>
				<div className="key">
					{eventKeyCode}
					<small>eventKeyCode</small>
				</div>
				<div className="key">
					{eventCode}
					<small>eventCode</small>
				</div>
			</>
		)
	}

	return (
		<>
			{keydowning ?
				keyRender()
				:
				<div id="insert">
					<div className="key">Press any key to get the keyCode</div>
				</div>

			}
		</>
	);
};

export default App;
