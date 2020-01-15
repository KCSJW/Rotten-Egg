import { combineReducers } from "redux";
import nowPlayingReducer from "./now_playing_reducer";
import upComingReducer from './up_coming_reducer';
import topRatedReducer from "./top_rated_reducer";

const moviesReducer = combineReducers({
    nowPlaying: nowPlayingReducer,
    upComing: upComingReducer,
    topRated: topRatedReducer
});

export default moviesReducer;