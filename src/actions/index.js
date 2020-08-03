import movie from "../api/keys";
import tmdb from "../api/request";

export const fetchTrending = () => async dispatch => {
	const res = await tmdb.get(movie.trending);
	dispatch({
		type: "FETCH_TRENDNG",
		payload: res.data.results,
	});
};

export const fetchNetflixOriginals = () => async dispatch => {
	const res = await tmdb.get(movie.netflixOriginals);
	dispatch({
		type: "FETCH_NETFLIX_ORIGINALS",
		payload: res.data.results,
	});
};
export const fetchTopRated = () => async dispatch => {
	const res = await tmdb.get(movie.topRated);
	dispatch({
		type: "FETCH_TOP_RATED",
		payload: res.data.results,
	});
};
export const fetchActionMovies = () => async dispatch => {
	const res = await tmdb.get(movie.actionMovies);
	dispatch({
		type: "FETCH_ACTION_MOVIES",
		payload: res.data.results,
	});
};
export const fetchComedyMovies = () => async dispatch => {
	const res = await tmdb.get(movie.comedyMovies);
	dispatch({
		type: "FETCH_COMEDY_MOVIES",
		payload: res.data.results,
	});
};
export const fetchHorrorMovies = () => async dispatch => {
	const res = await tmdb.get(movie.horrorMovies);
	dispatch({
		type: "FETCH_HORROR_MOVIES",
		payload: res.data.results,
	});
};
export const fetchRomanceMovies = () => async dispatch => {
	const res = await tmdb.get(movie.romanceMovies);
	dispatch({
		type: "FETCH_ROMANCE_MOVIES",
		payload: res.data.results,
	});
};
export const fetchDocumentaries = () => async dispatch => {
	const res = await tmdb.get(movie.documentaries);
	dispatch({
		type: "FETCH_DOCUMENTARIES",
		payload: res.data.results,
	});
};
