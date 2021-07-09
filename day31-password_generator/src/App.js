import React, { useState } from 'react';
import './App.css';



const App = () => {
	const [result, setResult] = useState('')
	const [pwdLength, setPwdLength] = useState(20)
	const [hasLower, setHasLower] = useState(true)
	const [hasUpper, setHasUpper] = useState(true)
	const [hasNumber, setHasNumber] = useState(true)
	const [hasSymbol, setHasSymbol] = useState(true)

	const onChangeHandler = (e, value) => {

		const changeFunc = {
			length: setPwdLength,
			lowercase: setHasLower,
			uppercase: setHasUpper,
			numbers: setHasNumber,
			symbols: setHasSymbol
		}
		if (e.target.id === 'length')
			changeFunc[e.target.id](e.target.value)
		else
			changeFunc[e.target.id]((value) => !value)
	}

	const onGenerateHandler = () => {
		setResult(generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, pwdLength))
	}

	const onClipboardHandler = () => {

		const textarea = document.createElement('textarea');
		const password = result;

		if (!password) {
			return
		}

		textarea.value = password;
		document.body.appendChild(textarea);
		textarea.select();
		document.execCommand('copy');
		textarea.remove();
		alert('Password copied to clipboard!');
	}

	const generatePassword = (lower, upper, number, symbol, length) => {
		let generatePassword = '';
		const typesCount = lower + upper + number + symbol;
		const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]);

		if (typesCount === 0) {
			return ''
		}

		for (let i = 0; i < length; i += typesCount) {
			typesArr.forEach(type => {
				const funcName = Object.keys(type)[0];
				generatePassword += randomFunc[funcName]();
			})
		}

		const finalPassword = generatePassword.slice(0, length);

		return finalPassword

	}

	const getRandomLower = () => {
		return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
	}

	const getRandomUpper = () => {
		return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
	}

	const getRandomNumber = () => {
		return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
	}

	const getRandomSymbol = () => {
		const symbols = '!@#$%^&*(){}[]=<>/,.'
		return symbols[Math.floor(Math.random() * symbols.length)]
	}

	const randomFunc = {
		lower: getRandomLower,
		upper: getRandomUpper,
		number: getRandomNumber,
		symbol: getRandomSymbol
	}



	return (
		<div className="container">
			<h2>Password Generator</h2>
			<div className="result-container">
				<span>{result}</span>
				<button className="btn" onClick={onClipboardHandler}>
					<i className="far fa-clipboard"></i>
				</button>
			</div>
			<div className="settings">
				<div className="setting">
					<label>Password Length</label>
					<input type="number" id="length" min="4" max="20" value={pwdLength} onChange={(e) => onChangeHandler(e, pwdLength)} />
				</div>
				<div className="setting">
					<label>Include uppercase letters</label>
					<input type="checkbox" id="uppercase" checked={hasUpper} onChange={onChangeHandler} />
				</div>
				<div className="setting">
					<label>Include lowercase letters</label>
					<input type="checkbox" id="lowercase" checked={hasLower} onChange={onChangeHandler} />
				</div>
				<div className="setting">
					<label>Include numbers</label>
					<input type="checkbox" id="numbers" checked={hasNumber} onChange={onChangeHandler} />
				</div>
				<div className="setting">
					<label>Include symbols</label>
					<input type="checkbox" id="symbols" checked={hasSymbol} onChange={onChangeHandler} />
				</div>
			</div>

			<button className="btn btn-large" onClick={onGenerateHandler}>Generate Password</button>
		</div>
	)
};

export default App;
