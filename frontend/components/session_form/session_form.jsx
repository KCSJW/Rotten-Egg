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
        this.ghostType = this.ghostType.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state);
    }

    handleDemo(e) {
        e.preventDefault();
        this.ghostType('username', 'RottenEgg');
            setTimeout(() => {
                this.ghostType('password', 'iamrotten');
                setTimeout(() =>{
                    this.props.action(this.state);
                }, 800)
            }, 600)
    }

    ghostType(input, string, n = 1) {
        setTimeout(() => {
            if (n < string.length) {
                this.ghostType(input, string, n+1);
            };
            this.setState({ [input]: string.slice(0, n)})
        }, 50)
    }
    

    componentWillUnmount() {
        this.props.getErrors([]);
    }

    render() {

        let footerText, formSwitch, demoButton;

        if (this.props.formType === 'Sign In') {
            demoButton = 
                <button className="session-demo-button" onClick={this.handleDemo}>
                    Sign in as Demo Egg
                    <div className="demo-button-icon" ><img src={window.demoImage} /></div>
                </button>
            footerText = <p>Not a rotten egg?</p>
            formSwitch =  <p className="session-form-modal-switch" onClick={() => this.props.switchModal()}>Become one!</p>
        } else if ( this.props.formType === "Sign Up") {
            demoButton = 
                <button className="session-demo-button" onClick={() => this.props.switchModal()}>
                    Go use a Demo Egg
                    <div className="demo-button-icon" ><img src={window.demoImage} /></div>
                </button>
            footerText = <p>Already a rotten egg?</p>
            formSwitch = <p className="session-form-modal-switch" onClick={() => this.props.switchModal()}>Sign In!</p>
        };

        return (
            <div className='modal-component session-form-container'>
 
                    <div className='session-form-header'>
                        <p className="session-form-title">{this.props.formType} Here!</p>
                        <p className="modal-close-x" onClick={(e) => this.props.hideModal()}>x</p>
                    </div>

                    <ul className="session-form-errors">
                        {this.props.errors.map((error, i) => <li key={i}>{error}</li>)}
                    </ul>

                    <form className="modal-form-box">
                        <div>{demoButton}</div>
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
                        <input type="submit" className="session-form-button" value={this.props.formType} />
                        <br/>
                        <div className="session-form-footer">
                            {footerText}
                            {formSwitch}
                        </div>
                    </form>
                </div>
        );
    };
        
};
        
export default sessionForm;