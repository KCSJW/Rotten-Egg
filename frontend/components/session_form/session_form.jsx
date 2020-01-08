import React from 'react';

class SessionForm extends React.Component {

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
        console.log(this.props);
        e.preventDefault();
        this.props.signin(this.state);
    }

    errors() {
        if (this.props.errors) {
            return <div>{this.props.errors[0]}</div>
        } else {
            return null
        }
    }
 
    render() {
        return (
                <div>
                    {this.errors()}
                    <form className="session-form-main" onSubmit={this.handleSubmit}>
                        <label>Username
                            <input
                                type="text"
                                className="session-form-input"
                                value={this.state.username}
                                onChange={this.update('username')}
                            />
                        </label>
                        <label>Password
                            <input
                                type="password"
                                className="session-form-input"
                                value={this.state.password}
                                onChange={this.update('password')}
                            />
                        </label>
                        <input type="submit" className="session-form-button" value="Sign In"/>
                    </form>
                </div>
        );
    }
        
}

        
export default SessionForm;