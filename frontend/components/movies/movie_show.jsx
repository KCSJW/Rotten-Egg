import React from 'react'

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
                <img src={this.props.movie.image_url} />
            </div>
        )
    }

}

export default MovieShowPage;