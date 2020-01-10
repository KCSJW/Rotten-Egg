import React from 'react';

class sessionForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
        this.handleDemo = this.handleDemo.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state);
    }

    handleDemo() {
        this.setState({
            username: 'RottenEgg',
            password: 'iamarotten'
        }, () => this.props.action(this.state));
    }

    render() {

        let footerText, formSwitch;

        if (this.props.formType === 'Sign In') {
            footerText = <p>Not a rotten egg?</p>
            formSwitch =  <p className="session-form-modal-switch" onClick={() => this.props.switchModal()}>Sign up!</p>
        } else if ( this.props.formType === "Sign Up") {
            footerText = <p>Already a rotten egg?</p>
            formSwitch = <p className="session-form-modal-switch" onClick={() => this.props.switchModal()}>Sign In!</p>
        };

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

                        <button className="session-demo-button" onClick={this.handleDemo}>
                            Sign in as Demo Egg
                            <div className="demo-button-icon" ><img src='/assets/demo_egg' /></div>
                        </button>

                        <br/>

                        <div className="session-modal-divider">
                            <div className="session-modal-divider-text">OR</div>
                        </div>

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
                            {footerText}
                            {formSwitch}
                        </div>
                    </form>
                </div>
        );
    }
        
}
        
export default sessionForm;
