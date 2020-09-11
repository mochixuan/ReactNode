import React from 'react'
import './first.css'
import count1,{
  count
} from '../../utils/util'
// import { withRouter } from 'react-router-dom';

console.warn('first page outer')
// export default (props) => {
//   // console.warn(props.match.params);
//   console.warn('first page loading')
//   return (
//     <div>First</div>
//   )
// }

// export default withRouter(({history})=> (
//   <div>
//     First1
//     <button onClick={() => { history.goBack() }}>后退</button>
//   </div>
// ))

export default (props) => {
  count.a = 12;
  count1.a = 12;
  console.log('count', count.a, count1.a)
  console.warn(document.body.clientWidth);
  return (
    <div className='box'>
      <div className='box1'>
        <span className='i1'>床前明月光,疑似地上时</span>
      </div>
      <div className='box2'>
        <span className='i2'>Name: mochixuan</span>
      </div>
      <ol>
        <li>1212121212</li>
        <li>1212121212</li>
        <li>1212121212</li>
        <li>1212121212</li>
        <li>1212121212</li>
        <li>1212121212</li>
        <li>1212121212</li>
        <li>1212121212</li>
        <li>1212121212</li>
        <li>1212121212</li>
      </ol>
    </div>
  )

}
