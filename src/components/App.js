/**
 * Test React Native App for theBlacklayer CodeChallenge
 * Author: Novak Zaballa
 * 
 * @flow
 * @format
 */
"use strict";

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Reducers from '../reducers';
import PortfolioList from './PortfolioList'
import Login from './Login'
import {AsyncStorage} from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: false
    };
  }

  _retrieveData = user => {
    this.setState(user)
  }; 

  render() {
    const { user } = this.state;
    if (!this.state.user) {
      return (<Login _retrieveData = {this._retrieveData} />)
    } else {
      return (
        <Provider store={createStore(Reducers)}>
            <PortfolioList/>        
        </Provider>
      );
    }
  }
}
