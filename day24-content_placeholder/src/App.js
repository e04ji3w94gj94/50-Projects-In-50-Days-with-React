import React, { useState, useEffect } from 'react';
import './App.css';


const App = () => {

	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const id = setTimeout(() => setLoading(false), 2500)
		return () => clearTimeout(id)
	}, [])

	return (
		<div className="card">
			<div className={`card-header ${loading ? 'animated-bg' : ''}`}>
				{!loading && <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />}
			</div>

			<div className="card-content">
				<h3 className={`card-title ${loading ? 'animated-bg animated-bg-text' : ''}`}>
					{!loading && "Lorem ipsum dolor sit amet"}
				</h3>
				<p className="card-excerpt">
					{!loading && "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis"}
					<span className={`${loading ? 'animated-bg animated-bg-text' : ''}`}>&nbsp;</span>
					<span className={`${loading ? 'animated-bg animated-bg-text' : ''}`}>&nbsp;</span>
					<span className={`${loading ? 'animated-bg animated-bg-text' : ''}`}>&nbsp;</span>
				</p>
				<div className="author">
					<div className={`profile-img ${loading ? 'animated-bg' : ''}`}>
						{!loading && <img src="profile.png" alt="" />}
					</div>
					<div className="author-info">
						{!loading && <strong className={`${loading ? 'animated-bg animated-bg-text' : ''}`}>Fai Fai</strong>}
						{!loading && <small className={`${loading ? 'animated-bg animated-bg-text' : ''}`}>July 03, 2021</small>}
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
