import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {

	const [todos, setTodos] = useState([])
	const [inputTodo, setInputTodo] = useState('')

	useEffect(() => {
		const getTodos = JSON.parse(localStorage.getItem('todos'));
		if (getTodos) {
			setTodos(getTodos)
		}
	}, [])

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos])

	const onSubmitHandler = (e) => {
		e.preventDefault();
		setTodos([...todos, { todo: inputTodo, completed: false }])
		setInputTodo('')
	}

	const onChangeHandler = (e) => {
		setInputTodo(e.target.value)
	}

	const onCompletedClickHandler = (id) => {
		const newArray = [...todos]
		newArray[id] = { ...newArray[id], completed: !newArray[id].completed }
		setTodos(newArray)
	}

	const onDeleteClickHandler = (e, id) => {
		e.preventDefault();
		const newTodo = [...todos]
		newTodo.splice(id, 1)
		setTodos(newTodo)
	}

	return (
		<>
			<h1>todos</h1>
			<form onSubmit={onSubmitHandler}>
				<input type="text" className="input" placeholder="Enter your todo" autoComplete="off" value={inputTodo} onChange={onChangeHandler} />
				<ul className="todos">
					{
						todos.map((todo, idx) => <li key={idx} className={`${todos[idx].completed ? 'completed' : ''}`} onClick={() => onCompletedClickHandler(idx)} onContextMenu={(e) => onDeleteClickHandler(e, idx)}>{todo.todo}</li>)
					}
				</ul>
			</form>
			<small>
				Left click to toggle completed.
				<br />
				Right click to delete todo
			</small>
		</>
	)
};

export default App;
