import React, { useState } from 'react';
import './App.css';

const quizList = [
	{
		id: "a",
		question: "Which language runs in a web browser?",
		options: [{ a: "Java" }, { b: "C" }, { c: "Python" }, { d: "JavaScript" }],
		correct: "d",
	},
	{
		id: "b",
		question: "What does CSS stand for?",
		options: [{ a: "Central Style Sheets" }, { b: "Cascading Style Sheets" }, { c: "Cascading Simple Sheets" }, { d: "JavCars SUVs SailboatsaScript" }],
		correct: "b",
	},
	{
		id: "c",
		question: "What does HTML stand for?",
		options: [{ a: "Hypertext Markup Language" }, { b: "Hypertext Markdown Language" }, { c: "Hyperloop Machine Language" }, { d: "Helicopters Terminals Motorboats Lamborginis" }],
		correct: "a",
	},
	{
		id: "d",
		question: "What year was JavaScript launched?",
		options: [{ a: "1996" }, { b: "1995" }, { c: "1994" }, { d: "none of the above" }],
		correct: "b",
	}
]

const App = () => {

	const [open, setOpen] = useState(0)
	const [answer, setAnswer] = useState('')
	const [correctCount, setCorrectCount] = useState(0)

	const onAnswerChangeHandler = (e) => {
		setAnswer(e.target.id)
	}

	const onClickHandler = () => {
		if (answer === quizList[open].correct) {
			setCorrectCount(correctCount + 1)
		}
		setOpen(open => open + 1)
	}

	return (
		<div className="quiz-container">
			{
				open === quizList.length ?
					<>
						<h2>You answered {correctCount}/{quizList.length} questions correctly</h2>
						<button onClick={() => window.location.reload()}>Reload</button>
					</>
					:
					<>
						<div className="quiz-header">
							{
								quizList.map((quiz, idx) => {
									return (
										open === idx &&
										<div key={idx}>
											<h2>{quiz.question}</h2>
											<ul>
												{
													quiz.options.map((option) => {
														return (
															<li key={Object.keys(option)[0]}>
																<input type="radio" name="answer" id={Object.keys(option)[0]} className="answer" value={answer} onChange={onAnswerChangeHandler} />
																<label htmlFor={Object.keys(option)[0]}>{Object.values(option)[0]}</label>
															</li>
														)
													})
												}
											</ul>
										</div>
									)
								})
							}

						</div>
						<button onClick={onClickHandler}>Submit</button>
					</>
			}
		</div>
	)
};

export default App;
