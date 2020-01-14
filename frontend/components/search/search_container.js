import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getAllDBMovies, getDBMovie } from '../../actions/search_actions';
import SearchBar from './search';

const mSTP = state => {
    return ({
        dbMovies: state.entities.search.movies
    })
};

const mDTP = dispatch => ({
    getAllDBMovies: () => dispatch(getAllDBMovies()),
    getDBMovie: id => dispatch(getDBMovie(id))
});

export default withRouter(connect(mSTP, mDTP)(SearchBar));