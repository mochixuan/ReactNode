import React, { createContext, useReducer } from 'react';

const FormContext = createContext();
// 类似于实例
const WHForm = React.forwardRef((props, ref)=>{
  
  const reducers = (state, action) => {
    return Object.assign({}, state, {
      [action.name]: action.value,
    })
  }
  const [state, dispatch] = useReducer(reducers, {a: 2});


  return (
    <FormContext.Provider value={{state, dispatch}}>
      {props.children}
    </FormContext.Provider>
  )
})

const Item = function(props) {

  const ChildCompFC = (store) => {
    const handleChange = (e) => {
      const {value, name} = e.target;
      store.dispatch({value,name})
    }
    return React.cloneElement(props.children, {name: props.name, value: store.state[props.name] || '', onChange: handleChange})
  }

  return (
    <FormContext.Consumer>
      { ChildCompFC }
    </FormContext.Consumer>
  )
}

WHForm.Item = Item

export { WHForm };
