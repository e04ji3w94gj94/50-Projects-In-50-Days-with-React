import React, { useState } from 'react';
import './App.css';

const navListL1 = [
	"Teams", "Locations", "Life at Netflix"
]

const navListL2 = [
	"Netflix culture memo", "Work life balance", "Inclusion & diversity", "Blog"
]

const Image = () => {
	return (
		<img
			src="https://logos-download.com/wp-content/uploads/2016/03/Netflix_Logo_2014.png"
			alt="Logo"
			className="logo"
		/>
	)
}

const App = () => {

	const [open, setOpen] = useState(false)

	const onClickHandler = () => {
		setOpen(open => !open)
	}

	return (
		<>
			<button className="nav-btn open-btn" onClick={onClickHandler}>
				<i className="fas fa-bars"></i>
			</button>

			<Image />

			<p className="text">Mobile Navigation</p>

			<div className={`nav nav-black ${open ? "visible" : ""}`}>
				<div className={`nav nav-red ${open ? "visible" : ""}`}>
					<div className={`nav nav-white ${open ? "visible" : ""}`}>
						<button className="nav-btn close-btn" onClick={onClickHandler}>
							<i className="fas fa-times"></i>
						</button>

						<Image />


						<ul className="list">
							{
								navListL1.map((nav, idx) => <li key={idx} > <a href="#">{nav}</a></li>)
							}
							<li>
								<ul>
									{
										navListL2.map((nav, idx) => <li key={idx} > <a href="#">{nav}</a></li>)
									}
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	)
};

export default App;
