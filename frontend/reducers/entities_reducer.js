import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import moviesReducer from './movies_reducer';
import searchReducer from './search_reducer';
import reviewsRuducer from './reviews_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    movies: moviesReducer,
    search: searchReducer,
    reviews: reviewsRuducer
});

export default entitiesReducer;