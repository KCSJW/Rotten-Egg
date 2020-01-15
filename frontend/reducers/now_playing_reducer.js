import { NOW_PLAYING_MOVIES } from '../actions/movies_actions';

const nowPlayingReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case NOW_PLAYING_MOVIES:
            return Object.assign({}, oldState, action.payload.results);
        default:
            return oldState;
    }
};

export default nowPlayingReducer;