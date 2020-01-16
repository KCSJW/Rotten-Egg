import React from 'react'
import ReviewForm from '../reviews/reviews_form_container'

class MovieShowPage extends React.Component {
    constructor(props) {
        super(props);
        this.getAllRating = this.getAllRating.bind(this);
    }

    componentDidMount() {
        this.props.getMovie(this.props.match.params.movieId);
    }

    getAllRating() {
        let ratingSum = 0; 
        this.props.reviews.map(review => (
            ratingSum += review.rating
        ))
        return ratingSum;
    }

    render() {
        if (!this.props.movie) return null;

        console.log(this.props.movie)
        
        let avgRating = (this.getAllRating() / this.props.reviews.length)

        let ratingIcon;
        if (avgRating >= 75) {
            ratingIcon = window.goodImage;
        } else if (avgRating >= 50 && avgRating < 75) {
            ratingIcon = window.mehImage;
        } else if (avgRating >= 35 && avgRating < 50) {
            ratingIcon = window.arghImage;
        } else if (avgRating < 35) {
            ratingIcon = window.badImage;
        }

        return (


            <div className="movie-show-page">
                <div className="movie-information-content">

                    <div className="movie-show-left-side-content">
                        <div className="movie-container-for-title-image">
                            <div className="movie-show-image">
                                <img src={this.props.movie.image_url} />
                            </div>
                        </div>
                        <div className="movie-container-upper-content">
                            <ul>
                                <li className="movie-show-title">{this.props.movie.title}</li>
                                <li className="movie-show-info">{this.props.movie.info}</li>
                                <li className="movie-show-info">Status: {this.props.movie.status}</li>
                                <li className="movie-show-info">Genres: {this.props.movie.genres}</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="movie-show-right-side-content">

                        <div className="movie-show-upper-right-content-container">

                            <div className="rating-box-wrap-title">{this.props.movie.title}</div>
                            <div className="rating-box-wrap"></div>
                           

                            <div className="movie-show-upper-right-content1-container">
                                <div className="movie-show-upper-right-content1">
                                    <div className="movie-container-for-critic-score">
                                        <img className="movie-critic-score-icon" src={ratingIcon} />
                                        <div className="movie-critic-score">{avgRating}</div>
                                    </div>
                                </div>
                                <div className="movie-show-upper-right-content-header1">Egg Status</div>
                            </div>

                            <div className="movie-show-upper-right-content2-container">
                                <div className="movie-show-upper-right-content1">
                                    <div className="movie-container-for-critic-score">
                                        <img className="movie-user-score-icon" src={window.NAImage} />
                                        <div className="movie-critic-score">N/A</div>
                                    </div>
                                </div>
                                <div className="movie-show-upper-right-content-header1">Other Thinks</div>
                            </div>

                        </div>

                        <div className="movie-show-bottom-right-content">
                            <ReviewForm movieId={this.props.movie.id} />
                        </div>

                    </div>

                </div>
            </div>
        )
    }

}

export default MovieShowPage;