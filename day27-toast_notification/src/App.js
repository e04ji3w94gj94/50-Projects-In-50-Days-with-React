import React, { useState, useEffect } from 'react';
import './App.css';

const messages = [
	'Message One',
	'Message Two',
	'Message Three',
	'Message Four',
];

const types = ['info', 'success', 'error'];

const App = () => {

	const [show, setShow] = useState(false)
	const [toast, setToast] = useState([])

	useEffect(() => {
		if (show) {
			setTimeout(() => {
				setShow(false)
				setToast((toast) => [...toast].slice(1))
			}, 3000);
		}

	}, [show, toast])

	const createNotification = () => {
		setShow(true)
		setToast((toast) => [...toast, toast.length])
	}

	const getRandomMessage = () => {
		return messages[Math.floor(Math.random() * messages.length)]
	}

	const getRandomType = () => {
		return types[Math.floor(Math.random() * types.length)]

	}

	return (
		<>
			<div className="toasts">
				{toast && toast.map((_, idx) => <div key={idx} className={`toast ${getRandomType()}`}>{getRandomMessage()}</div>)}
			</div>
			<button className="btn" onClick={createNotification}>Show Notification</button>
		</>

	)
};

export default App;
