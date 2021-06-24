import React, { useState } from 'react';
import './App.css';

const FAQList = [
	{
		"id": "1",
		"title": "Why shouldn't we trust atoms?",
		"text": "They make up everything",
	},
	{
		"id": "2",
		"title": "What do you call someone with no body and no nose?",
		"text": "Nobody knows.",
	},
	{
		"id": "3",
		"title": "What's the object-oriented way to become wealthy?",
		"text": "Inheritance.",
	},
	{
		"id": "4",
		"title": "How many tickles does it take to tickle an octopus?",
		"text": "Ten-tickles!",
	},
	{
		"id": "5",
		"title": "What is: 1 + 1?",
		"text": "Depends on who are you asking.",
	}
];

const App = () => {
	const [openFAQ, setOpenFAQ] = useState({ "1": true })

	const toggleHandler = (id) => {
		setOpenFAQ((openFAQ) => { return { ...openFAQ, [id]: !openFAQ[id] } })
	}

	return (
		<>
			<h1>Frequently Asked Questions</h1>
			<div className="faq-container">
				{
					FAQList.map((FAQ) => {
						return (
							<div key={FAQ.id} className={`faq ${openFAQ[FAQ.id] ? 'active' : ''}`}>
								<h3 className="faq-title">
									{FAQ.title}
								</h3>
								<p className="faq-text">{FAQ.text}</p>
								<button className="faq-toggle">
									<i className="fas fa-chevron-down" onClick={(id) => toggleHandler(FAQ.id)}></i>
									<i className="fas fa-times" onClick={(id) => toggleHandler(FAQ.id)}></i>
								</button>
							</div>
						)
					})
				}
			</div>
		</>
	);
};

export default App;
