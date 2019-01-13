import React, { Component } from 'react';
import {GlobalBaseStyle} from './style'
import {GlobalIconfontStyle} from '../src/static/img/iconfont/iconfont'
import {Header} from './common/header/index'

class App extends Component {
  render() {
    return (
      <div>
        <GlobalBaseStyle/>
        <GlobalIconfontStyle/>
        <Header/>
      </div>
    );
  }
}

export default App;
