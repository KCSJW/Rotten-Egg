import React from 'react';
import NowPlayingContainer from './now_playing_container';
import UpComingContainer from './up_coming_container';
import TopRatedContainer from './top_rated_container';


class moviesIndex extends React.Component {
    constructor(props) {
        super(props);
        this.moviePoster = this.moviePoster.bind(this);
    }

    componentDidMount() {
        this.props.setMovies();
    }

    moviePoster(){
        let urlArray = [];
        for (let property in this.props.movies) {
            let posterUrl = this.props.movies[property].poster_path;
            urlArray.push(posterUrl)
        }
        return urlArray;
    }

    render() {
        return (
            <div>
                <div className="movies-index">
                    <div className="photo-banner">
                        {
                        this.moviePoster().map((url, i) =>
                            <img
                            className="photo-banner-image"
                            src={`https://image.tmdb.org/t/p/w342${url}`}
                            key={i} />)
                        }
                    </div>
                </div>
                <NowPlayingContainer />
                <UpComingContainer />
                <TopRatedContainer />
            </div>
        )
    }

};
    
    export default moviesIndex;  

