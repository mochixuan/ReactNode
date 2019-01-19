import React, { Component } from 'react';
import {Provider} from 'react-redux'
import {configureStore} from '../src/redux/store/configureStore'
import {MainRouter} from './containers/MainRouter'

const store = configureStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainRouter/>
      </Provider>
    );
  }
}

export default App;
