import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './App.css';


const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

const App = () => {

	const [movie, setMovie] = useState([])
	const [search, setSearch] = useState('')


	useEffect(() => {
		getMovies(API_URL)

	}, [])

	const getMovies = async (url) => {
		try {
			const { data } = await axios.get(url)
			setMovie(data.results)
		}
		catch (err) {

		}

	}

	const onSubmitHangler = (e) => {
		e.preventDefault()
		if (search && search !== '') {
			getMovies(SEARCH_API + search);

			setSearch('')
		} else {
			window.location.reload()
		}
	}

	const onChangeHangler = (e) => {
		setSearch(e.target.value)
	}

	return (
		<>
			<header>
				<form onSubmit={onSubmitHangler}>
					<input type="text" className="search" value={search} placeholder="Search" onChange={onChangeHangler} />
				</form>
			</header>

			<main>
				{
					movie &&
					movie.map((movie, idx) => {
						const { title, poster_path, vote_average, overview } = movie;

						return (
							<div key={idx} className="movie">
								<img src={`${IMG_PATH + poster_path}`} alt={`${title}`} />
								<div className="movie-info">
									<h3>{title}</h3>
									<span className={`${vote_average >= 8 ? 'green' : vote_average >= 5 ? 'orange' : 'red'}`}>{vote_average}</span>
								</div>
								<div className="overview">
									<h3>Overview</h3>
									{overview}
								</div>
							</div>
						)
					})
				}
			</main>
		</>
	);
};

export default App;
