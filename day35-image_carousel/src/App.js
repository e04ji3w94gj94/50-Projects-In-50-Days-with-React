import React, { useState, useEffect } from 'react';
import './App.css';

const imageList = [
	{
		"url": "https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1458&q=80",
		"alt": "first-image"
	},
	{
		"url": "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
		"alt": "second-image"
	},
	{
		"url": "https://images.unsplash.com/photo-1599423300746-b62533397364?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
		"alt": "third-image"
	},
	{
		"url": "https://images.unsplash.com/photo-1599561046251-bfb9465b4c44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1492&q=80",
		"alt": "fourth-image"
	},
]


const App = () => {

	const [selectImage, setSelectImage] = useState(0)

	useEffect(() => {
		if (selectImage > imageList.length - 1) {
			setSelectImage(0);
		} else if (selectImage < 0) {
			setSelectImage(imageList.length - 1);
		}

		const id = setInterval(run, 2000);
		return () => clearTimeout(id)
	}, [selectImage])

	const run = () => {
		setSelectImage(selectImage => selectImage + 1);
	}


	const onPrevClickHandler = () => {
		setSelectImage(selectImage => selectImage - 1);

	}

	const onNextClickHandler = () => {
		setSelectImage(selectImage => selectImage + 1);
	}

	return (
		<div className="carousel">
			<div className="image-container" id="imgs">
				{
					imageList.map((img, idx) => {
						return (
							<img
								key={idx}
								src={img.url}
								alt={img.alt}
								style={{ "transform": `translateX(${-selectImage * 500}px)` }}
							/>
						)
					})
				}
			</div>

			<div className="buttons-container">
				<button className="btn" onClick={onPrevClickHandler}>Prev</button>
				<button className="btn" onClick={onNextClickHandler}>Next</button>
			</div>
		</div>
	)
};

export default App;
