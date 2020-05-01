import React from 'react';

const range = (min, max) => Array(max - min + 1).fill().map((_, i) => min + i)

const RatingItem = ({ checked, colored, onChange, value }) => (
    <label className={`rating-item ${colored ? 'rating-item-selected' : ''}`}>
        <input
            checked={checked}
            className='rating-input'
            onChange={(e) => {
                onChange(value)
            }}
            type="radio"
            value={value} />
    </label>)

const Rating = ({ min, max, onChange, value }) => {
    return (
        <div className='rating'>
            {range(min, max).map(item => (
                <RatingItem key={item}
                    colored={value >= item}
                    checked={value === item} 
                    value={item} onChange={onChange}/>
                ))
            }
        </div>
    )
}

class ReviewForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            rating: '', 
            body: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleSubmit(e) {
        e.preventDefault();
        const movieId = parseInt(this.props.movieId);
        const review = Object.assign({}, this.state, { movie_id: movieId });
        if (this.props.signedIn) {
            this.props.createReview(review).then(() => { return (this.props.getMovie(movieId))});
            this.setState({ 
                rating: '', 
                body: ''
            });
        } else {
            this.props.signin();
        };
    };

    requireToSignIn() {
        if (!this.props.signedIn) {
            this.props.signin();
        };
    };


    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    };

    render() {

        return (
            <div className="movie-review-form-container">

                <ul className="review-form-errors">
                    {this.props.errors.map((error, i) => <li key={i} className="review-form-error-text">{error}</li>)}
                </ul>

                <div className="movie-review-form-score-and-body-container">
                    <form onSubmit={this.handleSubmit}>
                        
                        <Rating min={1} max={10}
                            value={this.state.rating}
                            onChange={(rating) => {this.setState({rating})}}
                        />

                        <textarea
                            cols="100"
                            rows="5"
                            placeholder="A penny for your thoughts?"
                            className="movie-review-form-body"
                            value={this.state.body}
                            onChange={this.update("body")}
                        />

                        <input
                            onClick={(e) => this.requireToSignIn()}
                            className="movie-review-form-button"
                            type="submit"
                            value="Submit!"
                        />

                    </form>
                </div>
            </div>
        );
    };

};

export default ReviewForm;