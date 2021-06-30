import React, { useState, useEffect } from 'react';
import './App.css';

const slides = [
	'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
	'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80',
	'https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
	'https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80',
	'https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80'
]

const App = () => {

	const [open, setOpen] = useState(0)

	useEffect(() => {
		if (open > slides.length - 1) {
			setOpen(0)
		}

		if (open < 0) {
			setOpen(slides.length - 1)
		}

		document.body.style.backgroundImage = `url(${slides[open]})`
	}, [open])

	const leftClickHandler = () => {
		setOpen(open => open + 1)
	}

	const rightClickHandler = () => {
		setOpen(open => open - 1)
	}

	return (
		<div className="slider-container">
			{
				slides.map((slide, idx) => {
					return (
						<div key={idx} className={`slide ${open === idx ? 'active' : ''}`} style={{ "backgroundImage": `url(${slide})` }}></div>
					)
				})
			}
			<button className="arrow left-arrow" onClick={leftClickHandler}>
				<i className="fas fa-arrow-left"></i>
			</button>

			<button className="arrow right-arrow" onClick={rightClickHandler}>
				<i className="fas fa-arrow-right"></i>
			</button>
		</div >
	);
};

export default App;
