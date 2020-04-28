import React from 'react';
import NowPlayingContainer from './now_playing_container';
import UpComingContainer from './up_coming_container';
import TopRatedContainer from './top_rated_container';
import { Link } from 'react-router-dom';


class moviesIndex extends React.Component {
    constructor(props) {
        super(props);
        this.moviePoster = this.moviePoster.bind(this);
        this.dbMoviePosters = this.dbMoviePosters.bind(this);
        this.dbMovieIDs = this.dbMovieIDs.bind(this);
    }

    componentDidMount() {
        this.props.setMovies();
    }

    moviePoster(){
        let urlArray = [];
        for (let url in this.props.movies) {
            let posterUrl = this.props.movies[url].poster_path;
            urlArray.push(posterUrl)
        }
        return urlArray;
    }

    dbMoviePosters(){
        let dbMoviePostersArray = [];
        for (let url in this.props.dbMovies) {
            let posterUrl = this.props.dbMovies[url].image_url;
            dbMoviePostersArray.push(posterUrl)
        }
        return dbMoviePostersArray;
    }

    dbMovieIDs(){
        let dbMovieIDsArray = [];
        for (let id in this.props.dbMovies) {
            let ids = this.props.dbMovies[id].id;
            dbMovieIDsArray.push(ids)
        }
        return dbMovieIDsArray;
    }

    combinInfo(){
        const dbPosters = this.dbMoviePosters();
        const dbIds = this.dbMovieIDs();
        const res = {};
        for (let i = 0; i < dbIds.length; i++) {
            res[dbIds[i]] = dbPosters[i];
        };
        return res;
    }

    render() {
        const dbInfo = this.combinInfo();
        return (
            <div className="movies-index">
                <div className="dbMovie-banner">
                    {
                        Object.keys(dbInfo).map((id, i) => 
                            <Link key={i} to={`/movies/${id}`} className="dbMovie-banner-link">
                                <img src={`${Object.values(dbInfo)[i]}`} />
                            </Link>
                        )
                    }
                </div>

                <div className='combin-lists'>
                    <div className="bg"></div>
                    <NowPlayingContainer />
                    <UpComingContainer />
                    <TopRatedContainer />
                </div>
                <div className="trending-bar-under-nav">
                    <span className="trending-text">OTHER TRENDING MOVIES:</span>
                    <div className="photo-banner">
                        {
                            this.moviePoster().map((url, i) =>
                                <img 
                                className="photo-banner-image"
                                src={`https://image.tmdb.org/t/p/w342${url}`}
                                key={i} 
                                />
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }

};
    
    export default moviesIndex;  

