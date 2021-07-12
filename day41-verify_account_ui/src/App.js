import React, { useState, useEffect, useRef } from 'react';
import './App.css';

const App = () => {

	const inputRef = useRef([])
	const [codes, setCodes] = useState(6)

	useEffect(() => {
		inputRef.current[0].focus()
	}, [])

	const onKeyDown = (e, idx) => {
		if (e.key >= 0 && e.key <= 9) {
			inputRef.current[idx].value = '';
			setTimeout(() => idx < inputRef.current.length ? inputRef.current[idx + 1].focus() : inputRef.current[idx].focus(), 10);
		} else if (e.key === 'Backspace') {
			setTimeout(() => inputRef.current[idx - 1].focus(), 10);
		}
	}

	return (
		<div className="container">
			<h2>Verify Your Account</h2>
			<p>
				We emailed you the six digit code to cool_guy@email.com <br />
				Enter the code below to confirm your email address.
			</p>
			<div className="code-container">
				{
					[...Array(codes).keys()].map((code, idx) => {
						return (
							<input
								key={idx}
								type="number"
								className="code"
								placeholder="0"
								min="0"
								max="9"
								ref={el => (inputRef.current[idx] = el)}
								onKeyDown={(e) => onKeyDown(e, idx)}
								required
							/>
						)
					})
				}
			</div>
			<small className="info">
				This is design only. We didn't actually send you an email as we don't
				have your email, right?
			</small>
		</div>
	)
};

export default App;
