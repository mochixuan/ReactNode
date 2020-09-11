import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
import { modifyUserName } from '../redux/action/userAct';

function OneFrame() {
  const name = useSelector(state => state.user.name);
  return (
    <div 
      style={{
        backgroundColor: 'red',
        color: 'white',
        width: 200,
        height: 200,
        margin: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {name}
    </div>
  )
}

function TwoFrame() {
  const dispatch = useDispatch();
  return (
    <div 
      style={{
        backgroundColor: 'black',
        color: 'white',
        width: 200,
        height: 200,
        margin: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
       <input onChange={(e)=>{
          dispatch(modifyUserName(e.target.value))
        }}/>
    </div>
  )
}

let emptyIndex = 1;
function EmptyFrame() {
  emptyIndex = emptyIndex+1;
  return (
    <div 
      style={{
        backgroundColor: 'red',
        color: 'white',
        width: 200,
        height: 200,
        margin: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      我会被刷新吗？{emptyIndex}
    </div>
  )
}

function RouterIndex() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          flexDirection: 'column'
        }}
      >
        Welcome to Redux
        <Link to="/main" style={{display: 'block'}} className='margin20'>进入主页</Link>
        <Link to="/find" className='margin20'>进入发现页</Link>
        <div style={{display: 'flex'}}>
          <OneFrame/>
          <EmptyFrame/>
          <TwoFrame/>
        </div>
      </div>
    );
}

export default RouterIndex