import React, { Component } from 'react';
import RootRouter from './navigation/RootRouter'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <RootRouter/>
    );
  }
}
