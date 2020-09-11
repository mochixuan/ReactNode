import 'antd'
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import count1, { count } from '../../utils/util'
import Portal from './portal'
import './second.css'


export default () => {
  const history = useHistory();
  const [total] = useState(1)
  const enterDetail = function() {
    //history.push('/second/detail')
    history.replace('/second/detail') //替换当前
  }
  // console.warn('location', window.location.href='https://www.baidu.com')
  window.onpopstate = (event) => {
    console.warn('event', event)
  }

  const enterDetail1 = function() {
    // window.history.pushState({name: 'mochixuan'},'我是谁', 'first')
    // setCount(() => {
    //   console.warn('set2')
    //   return 2;
    // });
    // console.warn(total);
    // setCount(() => {
    //   console.warn('set3')
    //   return 3;
    // });
    // console.warn(total);
    // setCount(() => {
    //   console.warn('set4')
    //   return 4;
    // });
    // console.warn(total);
  }

  console.log('count', count.a, count1.a, total)
  const to = {
    pathname: '/second/detail',
    search: '?sort=name',
    state: '我是state1',
    query: '我是query',
  }

  return (
    
    <div>
      Second
      <Link to='detail'>详情</Link>  
      <br/>
      <Link to={to}>详情</Link>  
      <button onClick={enterDetail}>详情</button>
      <button onClick={enterDetail1}>详情1</button>
      <div className='item' id='p1'>我是1哈</div>
      <div className='item1' id='p2'>我是2哈</div>
      <div className='item' id='p3'>我是3哈</div>
      <div className='item1' id='p4'>
        你是我儿子Portal
        <Portal />
      </div>
    </div>
  )
}