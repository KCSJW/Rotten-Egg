import React from 'react'
import ReviewForm from '../reviews/reviews_form_container';
import ReviewsItem from '../reviews/reviews_item';

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
        if (typeof avgRating === NaN) return null;
        let avgRating = (Math.round((this.getAllRating() / this.props.reviews.length) * 100) / 100);
        let ratingIcon;
        if (avgRating >= 7.5) {
            ratingIcon = window.goodImage;
        } else if (avgRating >= 5.0 && avgRating < 7.5) {
            ratingIcon = window.mehImage;
        } else if (avgRating >= 3.5 && avgRating < 5.0) {
            ratingIcon = window.arghImage;
        } else if (avgRating < 3.5) {
            ratingIcon = window.badImage;
        };
        
        return (

            <div className="movie-show-page">
                <div className="movie-information-content">
                
                    <div className="movie-show-left-side-content">
                        <img src={this.props.movie.image_url} className="movie-show-image"/>
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
                                <ul>
                                    <li className="movie-show-info">{this.props.movie.info}</li>
                                    <li className="movie-show-info">Status: {this.props.movie.status}</li>
                                    <li className="movie-show-info">Genres: {this.props.movie.genres}</li>
                                </ul>
                            </div>

                        </div>

                        <div className="movie-show-bottom-right-content">
                            <ReviewForm movieId={this.props.movie.id} />
                        </div>
                    </div>
                </div>

                <div className="movie-reviews-lists">
                    <div className="movie-review-list-container">
                        <div className="movie-review-list-header">Egg Reviews:</div>
                        <br/>
                        <ul className="movie-review-list-critics">
                            <li>
                                {
                                    this.props.reviews.map((review) => (
                                        <ReviewsItem
                                            key={review.id} 
                                            review={review}
                                            getMovie={this.props.getMovie}
                                            deleteReview={this.props.deleteReview}
                                            currentUserId={this.props.currentUserId}
                                        />
                                    ))
                                }
                            </li>
                        </ul>
                    </div>
                </div>           
            </div>
        )
    };
};

export default MovieShowPage;