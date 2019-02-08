import React, { Component } from 'react';
import { GetEventsComponent } from '../generated/graphql';
import Player from './Player';

interface ISessionModalProps {
  sessionId: string;
  onClose?: () => void;
}

class SessionModal extends Component<ISessionModalProps> {
  constructor(props: ISessionModalProps) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress(event: KeyboardEvent) {
    const { onClose } = this.props;
    if (event.key === 'Escape') {
      onClose && onClose();
    }
  }

  render() {
    const { sessionId, onClose } = this.props;
    return (
      <div className="SessionModal">
        <button
          className="close-btn"
          onClick={() => {
            onClose && onClose();
          }}
        >
          X
        </button>
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