const API_KEY = "c0e7e9c18aad2e988ea75fca3162dda3";

const movie = {
	trending: `trending/all/week?api_key=${API_KEY}&language=en=US`,
	netflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=123`,
	topRated: `/movie/top_rated?api_key=${API_KEY}&language=en=US`,
	actionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
	comedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
	horrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
	romanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	documentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};
export default movie;
