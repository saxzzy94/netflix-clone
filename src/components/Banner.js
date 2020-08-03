import React from "react";
import "./Banner.css";
const Banner = props => {
	const movie =
		props.movies[Math.floor(Math.random() * props.movies.length - 1)];
	function truncate(str, n) {
		return str?.length > n ? str.substr(0, n - 1) + "..." : str;
	}
	return (
		<>
			<header
				className='banner'
				style={{
					backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
				}}
			>
				<div className='banner_contents'>
					<h1 className='banner_title'>
						{movie?.name ||
							movie?.original_name ||
							movie?.title ||
							movie?.original_title}
					</h1>
					<div className='banner_buttons'>
						<button className='banner_button'>Play</button>
						<button className='banner_button'>My List</button>
					</div>
					<h1 className='banner_description'>
						{truncate(movie?.overview, 150)}
					</h1>
				</div>

				<div className='banner_fade'></div>
			</header>
		</>
	);
};

export default Banner;
