import { connect } from 'react-redux';
import UpComingList from './up_coming';
import { upComing } from '../../actions/movies_actions';

const mSTP = state => {
    return ({
        data: Object.values(state.entities.movies.upComing)
    })
};

const mDTP = dispatch => ({
    upComing: () => dispatch(upComing())
});

export default connect(mSTP, mDTP)(UpComingList)