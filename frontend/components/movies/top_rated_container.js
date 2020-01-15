import { connect } from 'react-redux';
import TopRatedList from './top_rated';
import { topRated } from '../../actions/movies_actions';

const mSTP = state => {
    return ({
        data: Object.values(state.entities.movies.topRated)
    })
};

const mDTP = dispatch => ({
    topRated: () => dispatch(topRated())
});

export default connect(mSTP, mDTP)(TopRatedList)