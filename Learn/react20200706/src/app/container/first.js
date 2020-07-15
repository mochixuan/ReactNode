import React from 'react'
// import { withRouter } from 'react-router-dom';

console.warn('first page outer')
export default (props) => {
  // console.warn(props.match.params);
  console.warn('first page loading')
  return (
    <div>First</div>
  )
}

// export default withRouter(({history})=> (
//   <div>
//     First1
//     <button onClick={() => { history.goBack() }}>后退</button>
//   </div>
// ))