import React, { useState, useEffect } from 'react';
import './App.css';

const unsplashURL = 'https://source.unsplash.com/random/'
const rows = 5
const imageList = []

const getRandomSize = () => {
	return `${getRandomNr()}x${getRandomNr()}`
}

const getRandomNr = () => {
	return Math.floor(Math.random() * 10) + 300
}


for (let i = 0; i < rows * 3; i++) {
	imageList.push(`${unsplashURL}${getRandomSize()}`)
}


const App = () => {

	const [images, setImages] = useState([])

	useEffect(() => {
		setImages(imageList)
	}, [])

	return (
		<div className="wrap">
			<h1>Random Image Feed</h1>
			<div className="container">
				{images &&
					images.map((img, idx) => {
						return <img src={img} alt={`${idx + 1}_image`} />
					})
				}
			</div>
		</div>
	)
};

export default App;
