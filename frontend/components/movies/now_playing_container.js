import { connect } from 'react-redux';
import NowPlayingList from './now_playing';
import { nowPlaying } from '../../actions/movies_actions';

const mSTP = state => {
    return ({
        data: Object.values(state.entities.movies)
    })
};

const mDTP = dispatch => ({
    nowPlaying: () => dispatch(nowPlaying())
});

export default connect(mSTP, mDTP)(NowPlayingList)