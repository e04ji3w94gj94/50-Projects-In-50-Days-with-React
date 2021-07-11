import React, { useState } from 'react';
import './App.css';


const imageList = [
	{
		"url": "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80",
		"alt": "home"
	},
	{
		"url": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
		"alt": "work"
	},
	{
		"url": "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80",
		"alt": "blog"
	},
	{
		"url": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
		"alt": "about"
	},
]

const navList = [
	{
		"icon": "fas fa-home",
		"title": "Home"
	},
	{
		"icon": "fas fa-box",
		"title": "Work"
	},
	{
		"icon": "fas fa-book-open",
		"title": "Blog"
	},
	{
		"icon": "fas fa-users",
		"title": "About Us"
	},
]


const App = () => {

	const [open, setOpen] = useState(0)

	const onClickHandler = (id) => {
		setOpen(id)
	}

	return (
		<div className="phone">
			{
				imageList.map((img, idx) => {
					return (
						<img
							key={idx}
							src={img.url}
							alt={img.alt}
							className={`content ${open === idx ? "show" : ""}`}
						/>
					)
				})
			}
			<nav>
				<ul>
					{
						navList.map((nav, idx) => {
							return (
								<li key={idx} className={`${open === idx ? "active" : ""}`} onClick={() => onClickHandler(idx)}>
									<i className={nav.icon}></i>
									<p>{nav.title}</p>
								</li>
							)
						})
					}
				</ul>
			</nav>
		</div>
	)
};

export default App;
