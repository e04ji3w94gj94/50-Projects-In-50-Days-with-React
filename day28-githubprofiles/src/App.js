import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';


const APIURL = 'https://api.github.com/users/';

const App = () => {

	const [search, setSearch] = useState('')
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)
	const [user, setUser] = useState(null)
	const [userRepos, setUserRepos] = useState(null)

	const getUser = async (username) => {

		try {
			const { data } = await axios(APIURL + username);
			setUser(data);
			getRepos(username);
			setError(false)

		} catch (err) {
			setLoading(false)
			if (err.response.status === 404) {
				setError('No profile with this username');
			}
		}

	}

	const getRepos = async (username) => {
		try {

			const { data } = await axios(APIURL + username + '/repos?sort=created');
			setUserRepos(data);
			setLoading(false)

		} catch (err) {
			setLoading(false)
			setError('Problem fetching repos');
		}
	}

	const onChangeHandler = (e) => {

		setSearch(e.target.value)

	}

	const onSubmitHandler = (e) => {
		e.preventDefault();
		if (search) {
			getUser(search);
			setSearch('')
		}
	}

	return (
		<div className="wrap">
			<form className="user-form" onSubmit={onSubmitHandler}>
				<input type="text" placeholder="Search a Github User" value={search} onChange={onChangeHandler} />
			</form>

			<main>
				{
					!loading && !error && (
						<div className="card">
							<div>
								<img src={user.avatar_url} alt={user.name} className="avatar" />
							</div>
							<div className="user-info">
								<h2>{user.name}</h2>
								<p>{user.bio}</p>
								<ul>
									<li>{user.followers} <strong>Followers</strong></li>
									<li>{user.following} <strong>Following</strong></li>
									<li>{user.public_repos} <strong>Repos</strong></li>
								</ul>
								<div>
									{
										userRepos
											.slice(0, 5)
											.map((repo, idx) => {
												return (
													<a key={idx} className="repo" href={repo.html_url} target='_blank' rel='noreferrer'>{repo.name}</a>
												)
											})
									}
								</div>
							</div>
						</div>
					)
				}
				{
					!loading && error && (
						<div className="card">
							<h1>{error}</h1>
						</div>
					)
				}
			</main>

		</div>

	)
};

export default App;
