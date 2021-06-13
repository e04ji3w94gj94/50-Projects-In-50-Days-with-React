import React, { useState, useRef } from 'react';
import './App.css';

const App = () => {
	const [open, setOpen] = useState(false);
	const inputRef = useRef(null);

	const toggleHandler = () => {
		setOpen((open) => !open);
		inputRef.current.focus();
	};

	return (
		<div className={`search ${open ? 'active' : ''}`}>
			<input
				ref={inputRef}
				type='text'
				className='input active'
				placeholder='Search...'
			/>
			<button className='btn active' onClick={toggleHandler}>
				<i className='fas fa-search'></i>
			</button>
		</div>
	);
};

export default App;
