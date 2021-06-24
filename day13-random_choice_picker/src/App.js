import React, { useState, useRef, useEffect } from 'react';
import './App.css';

const App = () => {
	const textareaRef = useRef(null)
	const [text, setText] = useState('')
	const [chooseTag, setChooseTag] = useState(null)

	useEffect(() => {
		textareaRef.current.focus();
	}, [])

	const textHandler = (e) => {
		setText(e.target.value)
	}

	const keyUpHandler = (e) => {
		if (e.key === 'Enter') {
			setTimeout(() => {
				e.target.value = ''
			}, 10)
			randomSelect();
		}
	}

	const randomSelect = () => {
		const times = 30;

		const interval = setInterval(() => {
			const randomTag = pickRandomTag();

			setChooseTag(randomTag);

		}, 100);

		setTimeout(() => {
			clearInterval(interval)

			setTimeout(() => {
				const randomTag = pickRandomTag();

				setChooseTag(randomTag);
			}, 100)

		}, times * 100)
	}

	const pickRandomTag = () => {
		return Math.floor(Math.random() * text.split(',').length)
	}


	return (
		<div className="container">
			<h3>
				Enter all of the choices divided by a comma (','). <br />
				Press enter when you're done
			</h3>
			<textarea ref={textareaRef} placeholder="Enter choices here..." id="textarea" onKeyUp={keyUpHandler} onChange={textHandler} value={text}></textarea>

			<div id="tags">
				{
					text.split(',')
						.filter(tag => tag.trim() !== '')
						.map((tag, idx) => <span key={idx} className={`tag ${chooseTag === idx ? "highlight" : ""}`}>{tag.trim()}</span>)
				}
			</div>
		</div>
	);
};

export default App;
