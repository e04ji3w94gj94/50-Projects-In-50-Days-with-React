import React, { useState } from 'react';
import './App.css';

const App = () => {
	return (
		<div class='container'>
			<h1>Please Login</h1>
			<form>
				<div class='form-control'>
					<input type='text' required />
					<label>
						{'Email'.split('').map((letter, idx) => {
							return (
								<span style={{ transitionDelay: `${idx * 50}ms` }}>
									{letter}
								</span>
							);
						})}
					</label>
				</div>

				<div class='form-control'>
					<input type='password' required />
					<label>
						{'Password'.split('').map((letter, idx) => {
							return (
								<span style={{ transitionDelay: `${idx * 50}ms` }}>
									{letter}
								</span>
							);
						})}
					</label>
				</div>

				<button class='btn'>Login</button>

				<p class='text'>
					Don't have an account?
					<a href='#'>Register</a>
				</p>
			</form>
		</div>
	);
};

export default App;
