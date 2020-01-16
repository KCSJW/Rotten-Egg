import React from 'react';

const reviewsItem = ({ body, rating, author_id, author_name, movie_id, currentUserId}) => {
    
    let reviewIcon;
    if (rating >= 7.5) {
        reviewIcon = window.goodImage;
    } else if (rating >= 5 && rating < 7.5) {
        reviewIcon = window.mehImage;
    } else if (rating >= 3.5 && rating < 5) {
        reviewIcon = window.arghImage;
    } else if (rating < 3.5) {
        reviewIcon = window.badImage;
    };

    let delPost; 
                    // =<div className="movie-review-delete"
                    //     onClick={() => deleteReview(review)
                    //     .then(() => getMovie(movie_id))}
                    //     >Delete this egg...
                    // </div>
    if ( author_id === currentUserId ) {
        delPost = 
        <li className="movie-review-delete" 
            onClick={() => deleteReview(review)
                .then(() => getMovie(review.movie_id))}>Delete this egg...
        </li>
    };

    return (
        <ul className="movie-review-item">
            <div className="movie-review-content">

                <div className="review-score-icon-text-container">
                    <li><img className="movie-review-score-icon" src={reviewIcon} /></li>
                    <li><div className="movie-review-text"> {body} </div></li>
                </div>

                {/* <div className="review-score-link-container">
                    <div className="movie-review-score">Rating: {review.rating} </div>
                </div> */}
            </div>

            <ul className="movie-review-author-info">
                <li className="movie-review-author-name">{author_name}</li>
                <li className="movie-review-author-name">{delPost}</li>
            </ul>

        </ul>  
    );
};

export default reviewsItem;