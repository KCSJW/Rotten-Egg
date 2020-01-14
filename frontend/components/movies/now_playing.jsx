import React from 'react';

class NowPlayingList extends React.Component {
    constructor(props){
        super(props);
        this.nowPlayingData = this.nowPlayingData.bind(this);
    }

    componentDidMount() {
        this.props.nowPlaying();
    }

    nowPlayingData() {
        let pair = [];
        let temp;
        let ratingIcon;
        this.props.data.map((movie) => {

            if (movie.vote_average >= 7.5) {
                ratingIcon = window.goodImage;
            } else if (movie.vote_average >= 5 && movie.vote_average < 7.5 ) {
                ratingIcon = window.mehImage;
            } else if (movie.vote_average >= 3.5 && movie.vote_average < 5) {
                ratingIcon = window.arghImage;
            } else if (movie.vote_average < 3.5) {
                ratingIcon = window.badImage;
            }
    
            let temp = { icon: ratingIcon ,rating: movie.vote_average, title: movie.title, id: movie.id };
            pair.push(temp);
        })
        return pair;
    }
    
    
    render() {
        let array = this.nowPlayingData()
        return (
            <div className="main-page-movie-lists">
                <div className="main-page-list-container">
                    <div className="main-page-list-header">Now Playing:</div>
                    <ul>
                        {
                            array.map((movie) => (
                                <li key={movie.id} className="movie-index-item">
                                    <img src={movie.icon} className="index-icon"/>
                                    <div className="index-score">{movie.rating}</div>
                                    <div>{movie.title}</div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )      
    }
};

export default NowPlayingList;