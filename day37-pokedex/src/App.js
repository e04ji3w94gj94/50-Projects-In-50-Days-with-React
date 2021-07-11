import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const pokemon_count = 150;
const colors = {
	fire: '#FDDFDF',
	grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
};

const main_types = Object.keys(colors);

const App = () => {

	const [pokemonCards, setPokemonCards] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {

		const fetchPokemons = async () => {
			for (let i = 1; i <= pokemon_count; i++) {
				await getPokemon(i)
			}
		};

		const getPokemon = async (id) => {
			const url = `https://pokeapi.co/api/v2/pokemon/${id}`
			const { data } = await axios.get(url)
			setPokemonCards((pokemonCards) => [...pokemonCards, data])
			setLoading(false)
		};

		fetchPokemons()
	}, [])

	return (
		<div className="container">
			<h1>Pokedex</h1>
			<div className="poke-container">
				{!loading &&
					pokemonCards.map((pokemonCard, idx) => {

						const name = pokemonCard.name[0].toUpperCase() + pokemonCard.name.slice(1)
						const id = pokemonCard.id.toString().padStart(3, '0')
						const poke_types = pokemonCard.types.map(type => type.type.name)
						const type = main_types.find(type => poke_types.indexOf(type) > -1)
						const color = colors[type]

						return (
							<div key={idx} className="pokemon" style={{ backgroundColor: `${color}` }}>
								<div className="img-container">
									<img src={`https://pokeres.bastionbot.org/images/pokemon/${pokemonCard.id}.png`} alt="" />
								</div>
								<div className="info">
									<span className="number">#{id}</span>
									<h3 className="name">{name}</h3>
									<small className="type">Type: <span>{type}</span> </small>
								</div>
							</div>
						)
					})
				}
			</div>
		</div>
	)
};

export default App;
