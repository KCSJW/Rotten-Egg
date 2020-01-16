import React from 'react';

class ReviewForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { rating: '', body: ''};
    }

    needToSignIn() {
        if (!this.props.signedIn) {
            this.props.signin();
        }
    }

    render() {

        return (
            <div>work?</div>
        )
    }

};

export default ReviewForm;