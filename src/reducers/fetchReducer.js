const initialState = {
	trending: [],
	originals: [],
	topRated: [],
	action: [],
	horror: [],
	comedy: [],
	romance: [],
	documentaries: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case "FETCH_TRENDNG":
			return { ...state, trending: action.payload };
		case "FETCH_NETFLIX_ORIGINALS":
			return { ...state, originals: action.payload };
		case "FETCH_TOP_RATED":
			return { ...state, topRated: action.payload };
		case "FETCH_ACTION_MOVIES":
			return { ...state, action: action.payload };
		case "FETCH_COMEDY_MOVIES":
			return { ...state, comedy: action.payload };
		case "FETCH_HORROR_MOVIES":
			return { ...state, horror: action.payload };
		case "FETCH_ROMANCE_MOVIES":
			return { ...state, romance: action.payload };
		case "FETCH_DOCUMENTARIES":
			return { ...state, documentaries: action.payload };
		default:
			return state;
	}
};
