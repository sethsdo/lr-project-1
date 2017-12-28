import React, { Component } from 'react';
import './login.css';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.email = ''
    }

    handleSubmit(event) {
        alert('Form Was submitted: ' + this.refs.email.getValue());
        event.preventDefault();
    }
    render() {
        return (
            <div class="container">
                <form>
                    <h1>Login</h1>
                    <TextField
                        hintText="Email Username"
                        floatingLabelText="Email"
                        type="text" ref="email"
                        onChange={this._handleTextFieldChange}
                        /><br />
                    <TextField
                        hintText="Password Field"
                        floatingLabelText="Password"
                        type="password"
                        onChange={this._handleTextFieldChange}
                    /><br />
                    <FlatButton label="LOGIN" primary={true} onClick={this.handleSubmit}/>
                </form>
            </div>
        );
    }
}

export default LoginForm;
