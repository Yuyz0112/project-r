import React, { Component } from 'react';
import { GetAppsComponent } from './generated/graphql';
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
              <div className="Card" key={app.id}>
                <p>name: {app.name}</p>
                <p>Install:</p>
                <pre>
                  <code>
                    {`<script src="https://cdn.jsdelivr.net/npm/rrweb@latest/dist/record/rrweb-record.min.js"></script>
<script>
  let events = [];

  fetch('http://localhost:4000/sessions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      appId: '${app.id}'
    }),
  })
    .then(res => res.json())
    .then(data => {
      const sessionId = data.id;
      rrwebRecord({
        emit(event) {
          events.push(event);
        },
      });
      setInterval(() => save(sessionId), 10 * 1000);
    });

  function save(sessionId) {
    if (!events.length) {
      return;
    }
    const body = JSON.stringify({
      sessionId,
      events
    })
    events = [];
    fetch('http://localhost:4000/events:batch', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    });
  }
</script>`}
                  </code>
                </pre>
              </div>
            ));
          }}
        </GetAppsComponent>
      </div>
    );
  }
}

export default App;
