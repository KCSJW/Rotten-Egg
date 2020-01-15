import { connect } from 'react-redux';
import MovieShowPage from './movie_show';
import { withRouter } from 'react-router-dom'
import { getDBMovie } from '../../actions/search_actions';
import { deleteReview } from '../../actions/review_actions';

const mSTP = (state, ownProps) => {
    return ({
        movie: state.entities.search[ownProps.match.params.movieId],
        reviews: Object.values(state.entities.reviews)
    })
}

const mDTP = dispatch => ({
    getMovie: id => dispatch(getDBMovie(id)),
    deleteReview: id => dispatch(deleteReview(id))
});

export default withRouter(connect(mSTP, mDTP)(MovieShowPage))