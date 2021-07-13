import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {

	const [search, setSeartch] = useState('')
	const [results, setResults] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		async function getData() {
			try {
				const { data } = await axios.get('https://randomuser.me/api?results=50');
				const results = data.results
				const newArray = []
				results.forEach(result => {
					newArray.push({ ...result, "hide": false })
				})
				setResults(newArray)
				setLoading(false)
			} catch (error) {
				console.log(error)
			}
		}

		getData()

	}, [])

	const filterData = (e) => {
		const searchTerm = e.target.value
		setSeartch(searchTerm)

		const newArray = [...results]

		results.forEach((user, idx) => {
			const filterFirst = user.name.first.toLowerCase().includes(searchTerm.toLowerCase())
			const filterLast = user.name.last.toLowerCase().includes(searchTerm.toLowerCase())

			if (filterFirst || filterLast) {
				newArray[idx] = { ...user, "hide": false }
			} else {
				newArray[idx] = { ...user, "hide": true }
			}
		})

		setResults(newArray)
	}

	return (
		<div className="container">
			<header className="header">
				<h4 className="title">Live User Filter</h4>
				<small className="subtitle">Search by name and/or location</small>
				<input type="text" placeholder="Search" value={search} onChange={filterData} />
			</header>

			<ul className="user-list">
				{
					loading ?
						<li>
							<h3>Loading...</h3>
						</li>
						:
						results.map((user, idx) => {
							return (
								<li key={idx} className={`${user.hide ? "hide" : ""}`}>
									<img src={user.picture.large} alt={user.name.first} />
									<div className="user-info">
										<h4>{user.name.first} {user.name.last}</h4>
										<p>{user.location.city}, {user.location.country}</p>
									</div>
								</li>
							)
						})
				}
			</ul>
		</div>
	)
};

export default App;
