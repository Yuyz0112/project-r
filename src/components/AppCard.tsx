import React, { Component } from 'react';
import dayjs from 'dayjs';
import { Button, Tag } from 'antd';
import { GetAppsApps } from '../generated/graphql';
import SessionModal from './SessionModal';

const HOST = process.env.REACT_APP_BACKEND || window.location.origin;

const getCode = (
  id: string,
) => `<script src="https://cdn.jsdelivr.net/npm/rrweb@0.7.12/dist/record/rrweb-record.min.js"></script>
<script>
  let events = [];

  fetch('${HOST}/sessions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      appId: '${id}',
      referrer: document.referrer,
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
  visible: boolean;
}

class AppCard extends Component<IAppCardProps, IAppCardState> {
  constructor(props: IAppCardProps) {
    super(props);
    this.state = {
      collapse: true,
      showSession: null,
      visible: false,
    };
  }

  render() {
    const { id, sessions } = this.props;
    const { collapse, showSession } = this.state;
    return (
      <div className="Card" key={id}>
        <p>
          <Button onClick={() => this.setState({ collapse: !collapse })}>
            {collapse ? 'Show install code' : 'Hide'}
          </Button>
        </p>
        {!collapse && (
          <pre>
            <code className="code">{getCode(id)}</code>
          </pre>
        )}
        {sessions &&
          sessions.map(session => (
            <div
              className="Session"
              key={session.id}
              onClick={() => this.setState({ showSession: session.id })}
              style={{ lineHeight: '36px', borderBottom: '1px solid #ddd' }}
            >
              <div>
                访问时间：
                {dayjs(session.createdAt).format('YYYY-MM-DD HH:mm:ss')}
              </div>
              <div>
                访问时长：
                {dayjs(session.lastEventTime!).diff(
                  dayjs(session.createdAt),
                  'second',
                )}{' '}
                秒
              </div>
              <div>入口：{session.referrer || '直接访问'}</div>
              {session.utm && (
                <>
                  <div>
                    utm source：
                    <Tag color="cyan">{session.utm.utm_source || '-'}</Tag>
                  </div>
                  <div>
                    utm campaign：
                    <Tag color="blue">{session.utm.utm_campaign || '-'}</Tag>
                  </div>
                </>
              )}
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
