import React, { Component } from 'react';
import { GetPublishedPostsComponent } from './generated/graphql';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <GetPublishedPostsComponent>
            {({ loading, error, data }) => {
              if (loading) return <p>Loading...</p>;
              if (error || !data) return <p>Error :(</p>;

              return data.publishedPosts.map(p => (
                <div key={p.id}>{p.title}</div>
              ));
            }}
          </GetPublishedPostsComponent>
        </header>
      </div>
    );
  }
}

export default App;
