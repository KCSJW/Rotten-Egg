import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getAllDBMovies, requestMovie } from '../../actions/movies_action';
import SearchBar from './search';

const mSTP = state => {
    console.log(state)
    return ({
        dbMovies: Object.values(state.entities.movies)
    })
};

const mDTP = dispatch => ({
    getAllDBMovies: () => dispatch(getAllDBMovies()),
    requestMovie: id => dispatch(requestMovie(id))
});

export default withRouter(connect(mSTP, mDTP)(SearchBar));