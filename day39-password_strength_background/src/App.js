import React, { useState } from 'react';
import './App.css';

const App = () => {

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [blurValue, setBlurValue] = useState('')

	const onEmailChangeHandler = (e) => {
		setEmail(e.target.value)
	}

	const onPasswordChangeHandler = (e) => {
		const input = e.target.value
		const length = input.length
		const blurValue = 20 - length * 2
		setPassword(e.target.value)
		setBlurValue(blurValue)
	}

	return (
		<>
			<div className="background" style={{ "filter": `blur(${blurValue}px)` }}></div>
			<div className="bg-white rounded p-10 text-center shadow-md">
				<h1 className="text-3xl">Image Password Strength</h1>
				<p className="text-sm text-gray-700">Change the password to see the effect</p>
				<div className="my-4 text-left">
					<label htmlFor="email" className="text-gray-900">Email:</label>
					<input
						type="text"
						className="border block w-full p-2 mt-2 rounded"
						id="email"
						placeholder="Enter Email"
						value={email}
						onChange={onEmailChangeHandler}
					/>
				</div>

				<div className="my-4 text-left">
					<label htmlFor="password" className="text-gray-900">Password:</label>
					<input
						type="password"
						className="border block w-full p-2 mt-2 rounded"
						id="password"
						placeholder="Enter Password"
						value={password}
						onChange={onPasswordChangeHandler}
					/>
				</div>

				<button
					className="bg-black text-white py-2 mt-4 inline-block w-full rounded"
					type="submit"
				>
					Submit
				</button>
			</div>
		</>
	)
};

export default App;
