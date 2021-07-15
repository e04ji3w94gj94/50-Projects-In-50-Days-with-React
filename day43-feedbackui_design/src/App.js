import React, { useState } from 'react';
import './App.css';

const imageList = [
	{
		"url": "https://image.flaticon.com/icons/svg/187/187150.svg",
		"alt": "Unhappy"
	},
	{
		"url": "https://image.flaticon.com/icons/svg/187/187136.svg",
		"alt": "Neutral"
	},
	{
		"url": "https://image.flaticon.com/icons/svg/187/187133.svg",
		"alt": "Satisfied"
	},
]

const App = () => {

	const [selectRate, setSelectRate] = useState(2)
	const [show, setShow] = useState(false)

	const onRateClickHandler = (id) => {
		setSelectRate(id)
	}

	const onBtnClickHandler = () => {
		setShow(true)
	}
	return (
		<div className="panel-container">
			{
				show ?
					<>
						<i className="fas fa-heart"></i>
						<strong>Thank You!</strong>
						<br />
						<strong>Feedback: {imageList[selectRate].alt}</strong>
						<p className="thanks">We'll use your feedback to improve our customer support</p>
					</>
					:
					<>
						<strong>
							How satisfied are you with our
							<br />
							customer support performance?
						</strong>
						<div className="ratings-container">
							{
								imageList.map((image, idx) => {
									return (
										<div key={idx} className={`rating ${selectRate === idx ? "active" : ""}`} onClick={() => onRateClickHandler(idx)}>
											<img
												src={image.url}
												alt={image.alt}
											/>
											<small>{image.alt}</small>
										</div>
									)
								})
							}
						</div>
						<button className="btn" onClick={onBtnClickHandler}>Send Review</button>
					</>
			}

		</div>
	)
};

export default App;
