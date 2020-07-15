import React from 'react';
import { BrowserRouter, Route,Redirect, Switch, } from "react-router-dom";
import Main from './container/main'
import Home from './container/main1'
import First from './container/first'
import Second from './container/second'
import ManageSystem from './container/managesystem'
import SecondDetail from './container/secondDetail'
import Error from './container/error'

let index = 1;

function App() {

  index = index+1;
  console.log('index', index)

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Main} />
        <Route path='/home' component={Home} />
        <Route path='/first' component={First} />
        <Route path='/system' component={ManageSystem} />
        <Route path= '/second' component={Second} exact/>
        <Route path='/second/detail/:id' component={SecondDetail} />
        <Route path='/second/detail/:id?' component={SecondDetail} />
        <Route path='/error' component={Error} />
        <Redirect from='/' to='/error' />
      </Switch>
    </BrowserRouter>
  )
}



export default App;
