import { connect } from 'react-redux';
import moviesIndex from './movies_index';
import { setMovies } from '../../actions/movies_actions';


const mSTP = state => {
    return ({
        movies: state.entities.posters,
        dbMovies: state.entities.search.movies
    })
};

const mDTP = dispatch => ({
    setMovies: () => dispatch(setMovies())
});

export default connect(mSTP, mDTP)(moviesIndex)