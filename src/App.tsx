import React, { Component } from 'react';
import { GetAppsComponent } from './generated/graphql';
import AppCard from './components/AppCard';
import './App.css';

interface IAppState {
  password: string;
  token: string | null;
}
class App extends Component<{}, IAppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      password: '',
      token: localStorage.getItem('token'),
    };
    this.login = this.login.bind(this);
  }

  login() {
    localStorage.setItem('token', btoa(`admin:${this.state.password}`));
    window.location.reload();
  }

  render() {
    const { password, token } = this.state;
    if (!token) {
      return (
        <div className="Login">
          <input
            placeholder="Enter the password"
            type="password"
            value={password}
            onChange={evt => this.setState({ password: evt.target.value })}
          />
          <button onClick={this.login}>Login</button>
        </div>
      );
    }
    return (
      <div className="App">
        <GetAppsComponent>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error || !data) return <p>{error!.message || 'Error :('}</p>;

            return data.apps.map(app => <AppCard key={app.id} {...app} />);
          }}
        </GetAppsComponent>
      </div>
    );
  }
}

export default App;
