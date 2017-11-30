/* @flow */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import {observable} from 'mobx';

import Demo from './Demo';
import {Provider} from 'mobx-react';
import stores from './stores';
export default class MobXApp extends Component {
  render() {
    return (
      <Provider {...stores}>
        <Demo/>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('MobXApp', () => MobXApp);
