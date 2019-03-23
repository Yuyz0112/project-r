import React, { Component } from 'react';
import { Modal } from 'antd';
import { GetEventsComponent } from '../generated/graphql';
import Player from './Player';

interface ISessionModalProps {
  onClose(): void;
  sessionId: string;
}

class SessionModal extends Component<ISessionModalProps> {
  constructor(props: ISessionModalProps) {
    super(props);
  }

  render() {
    const { sessionId, onClose } = this.props;
    return (
      <Modal
        visible
        width={1072}
        className="SessionModal"
        onCancel={onClose}
        footer={null}
      >
        <GetEventsComponent variables={{ sessionId }}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error || !data) return <p>Error :(</p>;
            return (
              <div className="clearfix">
                <Player events={data.events} />
              </div>
            );
          }}
        </GetEventsComponent>
      </Modal>
    );
  }
}

export default SessionModal;
