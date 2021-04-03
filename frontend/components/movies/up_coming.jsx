import React from 'react';

class UpComingList extends React.Component {
    constructor(props) {
        super(props);
        this.upComingData = this.upComingData.bind(this);
    }

    componentDidMount() {
        this.props.upComing();
    }

    upComingData() {
        let pair = [];
        let temp;
        let ratingIcon;
        this.props.data.map((movie) => {

            if (movie.vote_average >= 7.5) {
                ratingIcon = window.goodImage;
            } else if (movie.vote_average >= 5 && movie.vote_average < 7.5) {
                ratingIcon = window.mehImage;
            } else if (movie.vote_average >= 3.5 && movie.vote_average < 5) {
                ratingIcon = window.arghImage;
            } else if (movie.vote_average < 3.5) {
                ratingIcon = window.badImage;
            }

            let temp = { 
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
        let array = this.upComingData()
        return (
            <div className="main-page-movie-lists">
                <div className="main-page-list-container">
                    <div className="main-page-list-header">Up Coming:</div>
                    <ul>
                        {
                            array.map((movie) => (
                                <li key={movie.id} className="movie-list-outeritem">
                                    <img src={`https://image.tmdb.org/t/p/original${movie.poster}`}/>
                                    <div className="movie-list-item">
                                        <img src={movie.icon} className="list-icon" />
                                        <div className="list-score">{movie.rating}</div>
                                        <div className="list-text">{movie.title}</div>
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

export default UpComingList;