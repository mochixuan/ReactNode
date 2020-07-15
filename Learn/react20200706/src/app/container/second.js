import React from 'react'
import { Link, useHistory } from 'react-router-dom'

export default () => {
  const history = useHistory();
  const enterDetail = function() {
    //history.push('/second/detail')
    history.replace('/second/detail') //替换当前
  }
  // console.warn('location', window.location.href='https://www.baidu.com')
  window.onpopstate = (event) => {
    console.warn('event', event)
  }

  const enterDetail1 = function() {
    window.history.pushState({name: 'mochixuan'},'我是谁', 'first')
  }

  return (
    <div>
      Second
      <Link to='detail'>详情</Link>  
      <button onClick={enterDetail}>详情</button>
      <button onClick={enterDetail1}>详情1</button>
    </div>
  )
}