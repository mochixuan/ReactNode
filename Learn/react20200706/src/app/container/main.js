import React from 'react'
import {Link,useHistory} from 'react-router-dom'
import './global.css'

const Main = () => {

  const history = useHistory();

  return (
    <div>
      Main
      <ol>
        <li><Link to='/basicComponent' >基本组件封装</Link></li>
        <li><Link to='/demoTable' >Table封装</Link></li>
        <li><Link to='/home' >模拟登入</Link></li>
        <li><Link to='/parent' >跳转Parent</Link></li>
        <li><Link to='/hooktest' >跳转Hook</Link></li>
        <li><Link to='/firstloadable' >跳转到First Loadabel模式</Link></li>
        <li><Link to='/firstlazy' >跳转到First firstlazy模式</Link></li>
        <li><Link to='/system' >System</Link></li>
        <li><Link to='/second' style={{color: 'red',textDecoration: 'none'}}>跳转到Second</Link></li>
        <li><Link to='/three' >跳转到Three</Link></li>
        <li><Link to='/second/detail' >跳转到SecondDetail</Link></li>
        <li><Link to='/second/detail/100' >跳转到SecondDetail: id=100</Link></li>
        <li><Link to='/second/detail/101' >跳转到SecondDetail: id=101</Link></li>
        <li><Link to={'/second/detail?id='+10} >跳转到SecondDetail: ?id=10</Link></li>
        <li onClick={() => { history.push('/second/detail', {name: 'mochixuan'}) }}>跳转到SecondDetail State</li>
        <li onClick={() => { history.push('/second/detail') }}>跳转到SecondDetail</li>
      </ol>
    </div>
  )
}

export default Main