import React from 'react';
import MovieItem from "./movie_item";

class NowPlayingList extends React.Component {
    constructor(props){
        super(props);
        this.state = {isHidden: true};
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
    
    render() {
        let array = this.nowPlayingData()
        return (
            <div className="main-page-movie-lists">
                <div className="main-page-list-container">
                    <div className="main-page-list-header">Now Playing:</div>
                    <ul>
                        {
                            array.map((movie) => (
                                <MovieItem 
                                    key={movie.id} 
                                    icon={movie.icon} 
                                    rating={movie.rating} 
                                    title={movie.title} 
                                    poster={movie.poster}
                                />
                            ))
                        }
                    </ul>
                </div>
            </div>
        )      
    }
};

export default NowPlayingList;