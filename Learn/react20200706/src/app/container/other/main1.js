import React from 'react'
import { Switch, Route, Redirect, Link } from 'react-router-dom';


function YLogin() {
  return (
    <div>
      <div>已登入</div>
      <img src={require('../../img/night.png')} alt='错误'/>
      <button onClick={() => {sessionStorage.setItem('isLogin', false); window.location.reload(true);}}>退出登入</button>
    </div>
  )
}
function NLogin() {
  return (
    <div>
      <div>请登入</div>
      <button onClick={() => {sessionStorage.setItem('isLogin', true); window.location.reload();}}>登入</button>
    </div>
  )
}

function Main() {
  return (
    <div>
      <ol>
        <li><YLogin/></li>
        <li><Link to='/home/page1'>page1</Link></li>
        <li><Link to='/home/page2'>page2</Link></li>
      </ol>
      
    </div>
  )
}

function Page1() {
  return <div>Page1</div>
}

function Page2() {
  return <div>Page2</div>
}

export default function() {
  const isLogin = sessionStorage.getItem('isLogin');
  return isLogin === 'true' ? (
    <Switch>
      <Route path='/home/main1' component={Main} />
      <Route path='/home/page1' component={Page1}/>
      <Route path='/home/page2' component={Page2}/>
      <Redirect to='/home/main1' />
    </Switch>
  ) : (
    <Switch>
      <Route path='/home/login' component={NLogin} />
      <Redirect to='/home/login' />
    </Switch>
  )
}
