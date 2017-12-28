import React, { Component } from 'react';
import './App.css';
import LoginForm from './login/login';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider className="App">
        <header className="App-header">
          <h1 className="App-title">Login</h1>
        </header>
        <LoginForm />
      </MuiThemeProvider>
    );
  }
}

export default App;
