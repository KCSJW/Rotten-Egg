import { connect } from 'react-redux';
import { createReview } from '../../actions/review_actions';
import { showModal } from '../../actions/modal_actions';
import { getDBMovie } from '../../actions/search_actions';
import ReviewForm from './reviews_form';

const mSTP = state => {
    return ({
        signedIn: Boolean(state.session.currentUser),
        errors: state.errors.review
    })
};

const mDTP = dispatch => {
    return({
        createReview: (review) => dispatch(createReview(review)),
        signin: () => dispatch(showModal('signin')),
        getMovie: (id) => dispatch(getDBMovie(id))
    })
}

export default connect(mSTP, mDTP)(ReviewForm)