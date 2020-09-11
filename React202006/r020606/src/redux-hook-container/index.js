import React, { createContext, useContext, useReducer,useRef } from 'react'

const initialState = {
  name: 'mochixuan'
}
function allReducer(state, action) {
  switch (action.type) {
    case 'modifyName':
      return Object.assign({}, state, {
        name: action.data
      });
    default:
      return state;
  }
}

const Context = createContext();
const Provider = Context.Provider;

const useSelector = (selector) => {
  const {state} = useContext(Context);
  return selector(state)
}

const useDispatch = function () {
  const {dispatch} = useContext(Context);
  return dispatch;
}

function OneFrame() {
  const name = useSelector(state => state.name);
  console.warn('useSelector');
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
  console.warn('useDispatch');
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
          dispatch({type: 'modifyName', data: e.target.value})
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

function ReduxHookRouter() {
    const [state, dispatch] = useReducer(allReducer, initialState);
    console.warn('Provider');
    const testRef = useRef();
    console.warn('test', testRef)
    return (
        <Provider value={{ state, dispatch}}>
          <div 
              style = {{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  height: '100%',
                  flexDirection: 'column'
              }}
          >
              ReduxHookRouter
              <div style={{display: 'flex'}}>
                  <OneFrame ref={testRef}/>
                  <EmptyFrame/>
                  <TwoFrame/>
              </div>
          </div>
        </Provider>
    )
}

export default ReduxHookRouter