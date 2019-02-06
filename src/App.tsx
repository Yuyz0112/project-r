import React, { Component } from 'react';
import { GetAppsComponent } from './generated/graphql';
import AppCard from './components/AppCard';
import './App.css';

class App extends Component {
  componentDidMount() {

  }
  render() {
    return (
      <div className="App">
        <GetAppsComponent>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error || !data) return <p>Error :(</p>;

            return data.apps.map(app => (
              <AppCard key={app.id} {...app}/>
            ));
          }}
        </GetAppsComponent>
      </div>
    );
  }
}

export default App;
