import React from "react";
import Row from "./Row";
import "./app.css";

import * as actions from "../actions";
import { connect } from "react-redux";
import Banner from "./Banner";
import Navbar from "./Navbar";

function App(props) {
	return (
		<div className='app'>
			<Navbar />
			<Banner fetch={props.fetchTrending} movies={props.movies.trending} />
			<Row
				fetch={props.fetchNetflixOriginals}
				heading='Netflix Original'
				movies={props.movies.originals}
				isLargeRow
			/>

			<Row
				fetch={props.fetchTrending}
				heading='Trending Now'
				movies={props.movies.trending}
			/>

			<Row
				fetch={props.fetchTopRated}
				heading='Top Rated'
				movies={props.movies.topRated}
			/>
			<Row
				fetch={props.fetchActionMovies}
				heading='Action Movies'
				movies={props.movies.action}
			/>
			<Row
				fetch={props.fetchComedyMovies}
				heading='Comedy Movies'
				movies={props.movies.comedy}
			/>
			<Row
				fetch={props.fetchRomanceMovies}
				heading='Romance Movies'
				movies={props.movies.romance}
			/>
			<Row
				fetch={props.fetchHorrorMovies}
				heading='Horror Movies'
				movies={props.movies.horror}
			/>
			<Row
				fetch={props.fetchDocumentaries}
				heading='Documentaries'
				movies={props.movies.documentaries}
			/>
		</div>
	);
}
const mapStateToProps = ({ movies }) => ({
	movies: movies,
});

export default connect(mapStateToProps, actions)(App);
