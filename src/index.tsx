import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const token = localStorage.getItem('token');
const client = new ApolloClient({
  uri:
    process.env.NODE_ENV === 'production'
      ? '/graphql'
      : 'http://localhost:4000/graphql',
  headers: {
    Authorization: token ? `Basic ${token}` : '',
  },
});

const Root = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
