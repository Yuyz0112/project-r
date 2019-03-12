import React, { Component } from 'react';
import { GetEventsComponent } from '../generated/graphql';
import Player from './Player';

interface ISessionModalProps {
  sessionId: string;
  onClose?: () => void;
}

const sessionStyle = {
  background: 'rgba(0,0,0,0)',
  width: 1024,
  height: 576,
  margin: '-24px 0 0 -24px'
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
    const { sessionId } = this.props;
    return (
      <div className="SessionModal" style={sessionStyle}>
        <GetEventsComponent variables={{ sessionId }}>
          {({ loading, error, data }) => {
            if (loading) return <p style={{ lineHeight: '16px' }}>Loading...</p>;
            if (error || !data) return <p>Error :(</p>;
            return <Player events={data.events} />;
          }}
        </GetEventsComponent>
      </div>
    );
  }
}

export default SessionModal;
