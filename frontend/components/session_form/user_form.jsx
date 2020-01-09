import React from 'react';

class userForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state);
    }


    render() {

        return (
            <div className='modal-component session-form-container'>

                <header className='session-form-header'>
                    <div className="session-form-modal-header">
                        <p className="session-form-title">{this.props.formType}</p>
                        <p className="modal-close-x" onClick={(e) => this.props.hideModal()}>x</p>
                    </div>
                </header>

                <ul className="session-form-errors">
                    {this.props.errors.map((error, i) => <li key={i}>{error}</li>)}
                </ul>

                <form className="modal-form-box" onSubmit={this.handleSubmit}>

                    <label className="session-form-label">Username
                        <input
                            type="text"
                            className="session-form-input"
                            value={this.state.username}
                            onChange={this.update('username')}
                        />
                    </label>

                    <br/>
                    
                    <label className="session-form-label">Password
                        <input
                            type="password"
                            className="session-form-input"
                            value={this.state.password}
                            onChange={this.update('password')}
                        />
                    </label>

                    <input type="submit" className="session-form-submit" value="Next"/>

                    <div className="session-form-footer">
                        <p>Already have an rotten egg?</p>
                        <p className="session-form-modal-switch" onClick={() => this.props.switchModal()}>Log in here</p>
                    </div>

                </form>

            </div>
        );
    }
        
}
        
export default userForm;
