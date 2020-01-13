import { connect } from 'react-redux';
import moviesIndex from './movies_index';
import { setMovies, getAllMovies } from '../../actions/movies_action';

const mSTP = (state) => {
    return ({
        movies: state.entities.movies
    })
};

const mDTP = dispatch => ({
    setMovies: () => dispatch(setMovies())
});

export default connect(mSTP, mDTP)(moviesIndex)