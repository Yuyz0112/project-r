import React, { Component } from 'react';
import dayjs from 'dayjs';
import { GetAppsApps } from '../generated/graphql';
import SessionModal from './SessionModal';

const HOST = process.env.BACKEND

const getCode = (
  id: string,
) => `<script src="https://cdn.jsdelivr.net/npm/rrweb@latest/dist/record/rrweb-record.min.js"></script>
<script>
  let events = [];

  fetch('${HOST}/sessions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      appId: '${id}'
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
    fetch('${HOST}/events:batch', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    });
  }
</script>`;

interface IAppCardProps extends GetAppsApps {}

interface IAppCardState {
  collapse: boolean;
  showSession: string | null;
}

class AppCard extends Component<IAppCardProps, IAppCardState> {
  constructor(props: IAppCardProps) {
    super(props);
    this.state = {
      collapse: true,
      showSession: null,
    };
  }

  render() {
    const { id, name, sessions } = this.props;
    const { collapse, showSession } = this.state;
    return (
      <div className="Card" key={id}>
        <p>name: {name}</p>
        <p>
          <button onClick={() => this.setState({ collapse: !collapse })}>
            {collapse ? 'Show install code' : 'Hide'}
          </button>
        </p>
        {!collapse && (
          <pre>
            <code>{getCode(id)}</code>
          </pre>
        )}
        {sessions.map(session => (
          <div
            className="Session"
            key={session.id}
            onClick={() => this.setState({ showSession: session.id })}
          >
            <p>
              Created at:{' '}
              {dayjs(session.createdAt).format('YYYY-MM-DD HH:mm:ss')}
            </p>
            <p>
              Duration:{' '}
              {dayjs(session.lastEventTime!).diff(
                dayjs(session.createdAt),
                'second',
              )}{' '}
              seconds
            </p>
          </div>
        ))}
        {showSession && (
          <SessionModal
            sessionId={showSession}
            onClose={() => this.setState({ showSession: null })}
          />
        )}
      </div>
    );
  }
}

export default AppCard;
