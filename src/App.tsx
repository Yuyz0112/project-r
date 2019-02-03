import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import logo from './logo.svg';
import './App.css';

const queryUserWithPost = `
{
  users {
    name,
    id,
    email,
    posts {
      title,
      published
    }
  }
}
`;

type user = {
  id: string;
  name: string;
  email: string;
  posts: post[];
};

type post = {
  title: string;
  published: boolean;
};

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
          <Query query={gql(queryUserWithPost)}>
            {({ loading, error, data }) => {
              if (loading) return <p>Loading...</p>;
              if (error) return <p>Error :(</p>;

              return data.users.map((user: user) => (
                <div key={user.id}>
                  <p>{user.name}</p>
                  <p>{user.email}</p>
                  <ul>
                    {user.posts.map(post => (
                      <li key={post.title}>{post.title}</li>
                    ))}
                  </ul>
                </div>
              ));
            }}
          </Query>
        </header>
      </div>
    );
  }
}

export default App;
