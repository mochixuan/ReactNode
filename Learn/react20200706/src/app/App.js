/**
 * @file APP.js
 * @description 入口文件
 * @author mochixuan
 */
import React from 'react';
import { BrowserRouter, Route,Redirect, Switch, } from "react-router-dom";
import Loadadle from 'react-loadable'
import Main from './container/main'
import Home from './container/other/main1'
import Second from './container/other/second'
import ManageSystem from './container/other/managesystem'
import SecondDetail from './container/other/secondDetail'
import Parent from './container/other/Parent'
import Error from './container/other/error'
import {Loading} from './container/other/loading';
import ErrorBoundary from './container/other/ErrorBoundary'
import HookTest from './container/test1/hook';
import {BasicComponent} from './container/basic/basic-component';

import 'antd/dist/antd.css';

// import First from './container/first'

const FirstLoadable = Loadadle({
  loader: () => import('./container/other/first.js'),
  loading: Loading,
});


const FirstLazy = function() {
  const LazyComponent = React.lazy(() => import('./container/other/first'));
  return (
    <React.Suspense fallback={<div>Loading</div>}>
      <LazyComponent />
    </React.Suspense>
  )
}

/**
 * @namespace 
 */
function App() {

  console.warn(process.env.NODE_ENV);

  return (
    
      <BrowserRouter>
        <ErrorBoundary>
          <Switch>
            <Route path='/' exact component={Main} />
            <Route path='/basicComponent' exact component={BasicComponent} />
            <Route path='/home' component={Home} />
            <Route path='/hooktest' component={HookTest} />
            <Route path='/parent' component={Parent} />
            <Route path='/firstloadable' component={FirstLoadable} />
            <Route path='/firstlazy' component={FirstLazy} />
            <Route path='/system' component={ManageSystem} />
            <Route path= '/second' component={Second} exact/>
            <Route path='/second/detail/:id' component={SecondDetail} />
            <Route path='/second/detail/:id?' component={SecondDetail} />
            <Route path='/error' component={Error} />
            <Redirect from='/' to='/error' />
          </Switch>
        </ErrorBoundary>
      </BrowserRouter>
    
    
  )
}


export default App;
