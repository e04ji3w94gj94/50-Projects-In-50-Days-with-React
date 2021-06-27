import React, { useState } from 'react';
import './App.css';

const App = () => {

	const [open, setOpen] = useState(true)

	const toggleHandler = () => {
		setOpen((open) => !open)
	}

	return (
		<nav className={`${open ? 'active' : ''}`} id="nav">
			<ul>
				<li><a href="#">Home</a></li>
				<li><a href="#">Works</a></li>
				<li><a href="#">About</a></li>
				<li><a href="#">Content</a></li>
			</ul>
			<button className="icon" onClick={toggleHandler}>
				<div className="line line1"></div>
				<div className="line line2"></div>
			</button>
		</nav>
	);
};

export default App;
