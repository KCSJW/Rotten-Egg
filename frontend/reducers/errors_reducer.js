import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer";
import reviewErrorsReudcer from './review_errors_reducer';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    review: reviewErrorsReudcer
});

export default errorsReducer;