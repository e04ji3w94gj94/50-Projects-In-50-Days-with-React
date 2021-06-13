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
		<div class={`search ${open ? 'active' : ''}`}>
			<input
				ref={inputRef}
				type='text'
				class='input active'
				placeholder='Search...'
			/>
			<button class='btn active' onClick={toggleHandler}>
				<i class='fas fa-search'></i>
			</button>
		</div>
	);
};

export default App;
