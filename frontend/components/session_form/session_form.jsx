import React from 'react';

class sessionForm extends React.Component {

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

                    <div className='session-form-header'>
                        <p className="session-form-title">{this.props.formType}</p>
                        <p className="modal-close-x" onClick={(e) => this.props.hideModal()}>x</p>
                    </div>

                    <ul className="session-form-errors">
                        {this.props.errors.map((error, i) => <li key={i}>{error}</li>)}
                    </ul>

                    <form className="modal-form-box" onSubmit={this.handleSubmit}>

                        <div className="session-form-label">
                            <label >Username</label>
                            <input
                                type="text"
                                className="session-form-input"
                                value={this.state.username}
                                onChange={this.update('username')}/>
                        </div>
                        <div className="session-form-label">
                            <label>Password</label>
                            <input
                                type="password"
                                className="session-form-input"
                                value={this.state.password}
                                onChange={this.update('password')}/>
                        </div>

                        <input type="submit" className="session-form-button" value={this.props.formType}/>
                        <br/>
                        <div className="session-form-footer">
                            <p>Don't have an rotten egg?</p>
                            <p className="session-form-modal-switch" onClick={() => this.props.switchModal()}>Sign up!</p>
                        </div>

                    </form>

                </div>
        );
    }
        
}
        
export default sessionForm;
