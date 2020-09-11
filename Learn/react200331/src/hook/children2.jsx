import React, {useContext, useRef} from 'react';
import { GlobalContext } from './store'

function Children2() {
    const {dispatch} = useContext(GlobalContext);
    const nameRef = useRef(null)
    const ageRef = useRef(null)
    console.warn('dispatch refresh');
    return (
      <div>
        <h2>Children2</h2>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <input style={{margin: 10}} ref={nameRef} />
          <input style={{margin: 10}} ref={ageRef} />
          <button
            onClick={() => {
                
              dispatch({
                type: 'login',
                data: {
                  name: nameRef.current.value,
                  age: ageRef.current.value,
                },
              });
            }}
          >
            提交
          </button>
        </div>
      </div>
    );
}

export { Children2 }