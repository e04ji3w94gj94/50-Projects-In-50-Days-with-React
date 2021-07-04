import React, { useState, useRef, useEffect } from 'react';
import './App.css';

const leftSlideList = [
	{
		"title": "Nature flower",
		"content": "all in pink",
		"style": "#fd3555"
	},
	{
		"title": "Bluuue Sky",
		"content": "with it's mountains",
		"style": "#2a86ba"
	},
	{
		"title": "Lonely castle",
		"content": "in the wilderness",
		"style": "#252e33"
	},
	{
		"title": "Flying eagle",
		"content": "in the sunset",
		"style": "#ffb866"
	},
]

const rightSlideList = [
	{
		"bgImage": "https://images.unsplash.com/photo-1508768787810-6adc1f613514?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e27f6661df21ed17ab5355b28af8df4e&auto=format&fit=crop&w=1350&q=80"
	},
	{
		"bgImage": "https://images.unsplash.com/photo-1519981593452-666cf05569a9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=90ed8055f06493290dad8da9584a13f7&auto=format&fit=crop&w=715&q=80"
	},
	{
		"bgImage": "https://images.unsplash.com/photo-1486899430790-61dbf6f6d98b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8ecdee5d1b3ed78ff16053b0227874a2&auto=format&fit=crop&w=1002&q=80"
	},
	{
		"bgImage": "https://images.unsplash.com/photo-1510942201312-84e7962f6dbb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=da4ca7a78004349f1b63f257e50e4360&auto=format&fit=crop&w=1050&q=80"
	},

]

const slidesLength = rightSlideList.length;

const App = () => {
	const [activeSlideIndex, setActiveSlideIndex] = useState(0)
	const [slideLeftTranslateY, setslideLeftTranslateY] = useState("translateY(0px)")
	const [slideRightTranslateY, setslideRightTranslateY] = useState("translateY(0px)")

	const sliderRef = useRef()

	useEffect(() => {
		if (activeSlideIndex > slidesLength - 1) {
			setActiveSlideIndex(0);
		}
		if (activeSlideIndex < 0) {
			setActiveSlideIndex(slidesLength - 1);
		}

		const sliderHeight = sliderRef.current.clientHeight;

		setslideLeftTranslateY(`translateY(${activeSlideIndex * sliderHeight}px)`)
		setslideRightTranslateY(`translateY(-${activeSlideIndex * sliderHeight}px)`)
	}, [activeSlideIndex])


	const changeSlide = (direction) => {

		if (direction === 'up') {
			setActiveSlideIndex(activeSlideIndex + 1)

		} else if (direction === 'down') {
			setActiveSlideIndex(activeSlideIndex - 1)
		}

	}


	return (
		<div className="slider-container" ref={sliderRef}>
			<div className="left-slide" style={{ "top": `-${(slidesLength - 1) * 100}vh`, "transform": slideLeftTranslateY }}>
				{
					leftSlideList.map((slide, idx) => {
						return (
							<div key={idx} style={{ "backgroundColor": slide.style }}>
								<h1>{slide.title}</h1>
								<p>{slide.content}</p>
							</div>
						)
					})
				}
			</div>
			<div className="right-slide" style={{ "transform": slideRightTranslateY }}>
				{
					rightSlideList.map((slide, idx) => {
						return (
							<div key={idx} style={{ "backgroundImage": `url(${slide.bgImage})` }} />
						)
					})
				}
			</div>
			<div className="action-buttons">
				<button className="down-button" onClick={() => changeSlide('down')}>
					<i className="fas fa-arrow-down"></i>
				</button>
				<button className="up-button" onClick={() => changeSlide('up')}>
					<i className="fas fa-arrow-up"></i>
				</button>
			</div>
		</div>

	)
};

export default App;
