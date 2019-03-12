import React, { Component } from 'react';
import { GetEventsComponent } from '../generated/graphql';
import Player from './Player';

interface ISessionModalProps {
  sessionId: string;
}

class SessionModal extends Component<ISessionModalProps> {
  constructor(props: ISessionModalProps) {
    super(props);
  }

  render() {
    const { sessionId } = this.props;
    return (
      <div className="SessionModal">
        <GetEventsComponent variables={{ sessionId }}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error || !data) return <p>Error :(</p>;
            return <Player events={data.events} />;
          }}
        </GetEventsComponent>
      </div>
    );
  }
}

export default SessionModal;
