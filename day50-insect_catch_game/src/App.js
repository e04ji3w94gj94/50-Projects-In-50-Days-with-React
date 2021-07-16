import React, { useState, useEffect } from 'react';
import './App.css';

const insectList = [
	{
		name: "Fly",
		image: "http://pngimg.com/uploads/fly/fly_PNG3946.png"
	},
	{
		name: "Mosquito",
		image: "http://pngimg.com/uploads/mosquito/mosquito_PNG18175.png"
	},
	{
		name: "Spider",
		image: "http://pngimg.com/uploads/spider/spider_PNG12.png"
	},
	{
		name: "Roach",
		image: "http://pngimg.com/uploads/roach/roach_PNG12163.png"
	},
]

let seconds = 0;

const App = () => {

	const [screenUp, setScreenUp] = useState()
	const [selectInsect, setSelectInsect] = useState()
	const [createInsectList, setCreateInsectList] = useState([])
	const [time, setTime] = useState("Time: 00:00")
	const [score, setScore] = useState(0)
	const [showMessage, setShowMessage] = useState(false)

	useEffect(() => {

		if (screenUp === 1 && score === 0) createInsect()
		if (score > 19)
			setShowMessage(true)
		else if (score > 0) {

		}
	}, [screenUp, score])

	const onStartClickHandler = () => {
		setScreenUp(0)
	}

	const startGame = () => {
		setInterval(increaseTime, 1000);
	}

	const increaseTime = () => {
		let m = Math.floor(seconds / 60);
		let s = seconds % 60;
		m = m < 10 ? `0${m}` : m;
		s = s < 10 ? `0${s}` : s;
		setTime(`Time: ${m}:${s}`);
		seconds++;
	}

	const onSelectClickHandler = (id) => {
		setSelectInsect(insectList[id])
		setScreenUp(1)
		startGame()
	}

	const getRandomLocation = () => {
		const width = window.innerWidth;
		const height = window.innerHeight;
		const x = Math.random() * (width - 200) + 100;
		const y = Math.random() * (height - 200) + 100;
		return { x, y }
	}


	const createInsect = () => {
		const { x, y } = getRandomLocation();
		setCreateInsectList((createInsectList) => [...createInsectList, {
			name: selectInsect.name,
			image: selectInsect.image,
			div_style: { top: `${y}px`, left: `${x}px` },
			img_style: { transform: `rotate(${Math.random() * 360}deg)` }
		}])
	}

	const addInsects = () => {
		setTimeout(createInsect, 1000);
		setTimeout(createInsect, 1500);
	}

	const catchInsect = (id) => {
		increaseScore();
		const newArray = [...createInsectList]
		newArray[id] = { ...newArray[id], caught: true }
		setCreateInsectList(newArray)
		addInsects()
	}

	const increaseScore = () => {
		setScore(score + 1)
	}

	return (
		<>
			<div className={`screen ${0 <= screenUp ? "up" : ""}`}>
				<h1>Catch The Insect</h1>
				<button className="btn" onClick={onStartClickHandler}>Play Game</button>
			</div>

			<div className={`screen ${1 <= screenUp ? "up" : ""}`}>
				<h1>What is your "favorite" insect?</h1>
				<ul className="insects-list">
					{
						insectList.map((insect, idx) => {
							return (
								<li key={idx}>
									<button className="choose-insect-btn" onClick={() => onSelectClickHandler(idx)}>
										<p>{insect.name}</p>
										<img
											src={insect.image}
											alt={insect.name}
										/>
									</button>
								</li>
							)
						})
					}
				</ul>
			</div>

			<div className="screen game-container">
				<h3 className="time">{time}</h3>
				<h3 className="score">Score: {score}</h3>
				<h5 className={`message ${showMessage ? "visible" : ""}`}>
					Are you annnoyed yet? <br />
					You are playing an impossible game!!
				</h5>
				{
					createInsectList &&
					createInsectList.map((insect, idx) => {
						return (
							<div key={idx} className={`insect ${insect.caught ? "caught" : ""}`} style={insect.div_style} onClick={() => catchInsect(idx)}>
								<img src={insect.image} alt={insect.name} style={insect.img_style} />
							</div>
						)
					})
				}
			</div>
		</>
	)
};

export default App;
