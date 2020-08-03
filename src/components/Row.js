import React, { useEffect } from "react";
import "./row.css";
import Youtube from "react-youtube";
import { useState } from "react";
import movieTrailer from "movie-trailer";

const imgURL = "https://image.tmdb.org/t/p/original";

const Row = props => {
	const [trailerUrl, setTrailerUrl] = useState("");
	useEffect(() => {
		props.fetch();

		// eslint-disable-next-line
	}, []);

	const opts = {
		height: "390",
		width: "100%",
		playerVars: {
			// 'https://developers.google.com/youtube/player_parameters',
			autoplay: 1,
		},
	};

	const handleClick = movie => {
		if (trailerUrl) {
			setTrailerUrl("");
		} else {
			movieTrailer(
				movie?.name ||
					movie?.title ||
					movie?.original_name ||
					movie?.original_title ||
					""
			)
				.then(url => {
					const urlParams = new URLSearchParams(new URL(url).search);

					setTrailerUrl(urlParams.get("v"));
				})
				.catch(err => {
					console.log(err);
				});
		}
	};

	return (
		<div className='row'>
			<h4>{props.heading}</h4>

			<div className={`row_posters`}>
				{props.movies.map(movie => (
					<img
						onClick={() => {
							handleClick(movie);
						}}
						key={movie.id}
						className={`poster ${props.isLargeRow && "large_poster"}`}
						src={`${imgURL}${
							!props.isLargeRow ? movie.backdrop_path : movie.poster_path
						}`}
						alt={movie.name}
					/>
				))}
			</div>
			{trailerUrl && <Youtube videoId={trailerUrl} opt={opts} />}
		</div>
	);
};

export default Row;
