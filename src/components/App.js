/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
"use strict";

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Reducers from '../reducers';
import PortfolioList from './PortfolioList'
import Car from './Card';
import Login from './Login'
import List from './list'
import {
  View
} from 'react-native';
export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(Reducers)}>
        <View>
          <PortfolioList/>        
        </View>
      </Provider>
    );
    // return (<Login />);
  }
}
