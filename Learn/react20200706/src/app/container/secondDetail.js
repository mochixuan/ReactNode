import React from 'react'
import {useLocation, useRouteMatch} from 'react-router-dom'

const Header = () => {
  // const match = useRouteMatch('/second/detail/:id')
  const match = useRouteMatch('/second/detail/101')
  console.warn('match101', match)
  return match && <div>当id=101我才显示</div>
}

export default (props) => {
  console.warn('props.match', props.match)
  console.warn('props.location', props.location)
  const location = useLocation();
  console.warn('loacation.search', location.search);
  console.warn('loacation.state', location.state);

  return (
    <div>
      SecondDetail
      <Header />
      <button onClick={() => { window.history.back() }}>后退</button>
      <button onClick={() => { window.location.reload() }}>刷新</button>
    </div>
  )
}