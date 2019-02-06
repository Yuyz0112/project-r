import React, { Component } from 'react';
import rrwebPlayer from 'rrweb-player';
import { GetEventsEvents } from '../generated/graphql'

interface IPlayerProps {
  events: GetEventsEvents[]
}

class Player extends Component<IPlayerProps> {
  componentDidMount() {
    const { events } = this.props;
    new rrwebPlayer({
      target: this.refs.wrapper,
      data: {
        events: events.map(event => ({
          ...event,
          timestamp: new Date(event.timestamp).getTime()
        })),
        autoPlay: true,
      },
    });
  }
  render() {
    return <div ref="wrapper" />;
  }
}

export default Player;
