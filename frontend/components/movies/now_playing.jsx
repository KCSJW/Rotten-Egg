import React from 'react';

class NowPlayingList extends React.Component {
    constructor(props){
        super(props);
        this.state = {isHidden: true};
        this.nowPlayingData = this.nowPlayingData.bind(this);
        this.toggleHidden = this.toggleHidden.bind(this);
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
    
            temp = { 
                icon: ratingIcon, 
                rating: movie.vote_average, 
                title: movie.title, 
                id: movie.id, 
                poster: movie.poster_path 
            };
            
            pair.push(temp);
        })
        return pair;
    }

    toggleHidden() {
        this.setState((prevState)=>({isHidden: !prevState.isHidden}))
    };
    
    render() {
        let array = this.nowPlayingData()
        return (
            <div className="main-page-movie-lists">
                <div className="main-page-list-container">
                    <div className="main-page-list-header">Now Playing:</div>
                    <ul>
                        {
                            array.map((movie) => (
                                <li key={movie.id} onClick={(e) =>this.toggleHidden()} className="movie-list-outeritem">

                                    <div className="movie-list-item">
                                        <img src={movie.icon} className="list-icon" />
                                        <div className="list-score">{movie.rating}</div>
                                        <div className="list-text">{movie.title}</div>
                                    </div>

                                    <div className="poster">
                                        {!this.state.isHidden && <img src={`https://image.tmdb.org/t/p/original${movie.poster}`}/>}
                                    </div>

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