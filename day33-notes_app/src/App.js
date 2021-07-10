import React, { useState, useEffect } from 'react';
import marked from "marked";
import './App.css';



const App = () => {

	const [show, setShow] = useState(false)
	const [noteList, setNoteList] = useState([])

	useEffect(() => {

		const notes = JSON.parse(localStorage.getItem('notes'));

		if (notes) {
			const newArray = [...notes].map((note) => {
				return { "text": note.text, "open": true }
			})
			setNoteList(newArray)
			setShow(true)
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('notes', JSON.stringify(noteList));
	}, [noteList])

	const onAddClickHandler = () => {
		setNoteList([...noteList, { "text": "", "open": false }])
		setShow(true)
	}

	const onEditClickHandler = (idx) => {
		const newArray = [...noteList]
		newArray[idx] = { "text": noteList[idx].text, "open": !noteList[idx].open }
		setNoteList(newArray)
	}

	const onDeleteClickHandler = (idx) => {
		const newArray = [...noteList]
		newArray.splice(idx, 1)
		setNoteList(newArray)

	}

	const onTextChangeHandler = (e, idx) => {
		const newArray = [...noteList]
		newArray[idx] = { "text": e.target.value, "open": false }
		setNoteList(newArray)
	}



	return (
		<div className="wrap">
			{show &&
				noteList.map((note, idx) => {
					return (
						<div key={idx} className="note">
							<div className="tools">
								<button className="edit" onClick={() => onEditClickHandler(idx)}><i className="fas fa-edit"></i></button>
								<button className="delete" onClick={() => onDeleteClickHandler(idx)}><i className="fas fa-trash-alt"></i></button>
							</div>
							<div className={`main ${noteList[idx].open ? "" : "hidden"}`} dangerouslySetInnerHTML={{ __html: marked(noteList[idx].text) }}>
							</div>
							<textarea className={`${noteList[idx].open ? "hidden" : ""}`} onChange={(e) => onTextChangeHandler(e, idx)} />
						</div>
					)
				})
			}
			<button className="add" onClick={onAddClickHandler}><i className="fas fa-plus"></i> Add note</button>
		</div>
	)
};

export default App;
