import React, { useState, useRef } from 'react';

class TextState extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }

    setTimeout(()=>{
      this.setState({
        count: this.state.count + 1
      },()=>{
        console.warn('后1'+this.state.count)
      });
      console.warn('后2'+this.state.count)
    },10000)
  }

  componentDidMount() {
    console.warn('parent', this.refs.parent);
  }

  add = () => {

    console.warn('1')

    setTimeout(()=>{
      console.warn('2')
    },0)

    Promise.resolve()
      .then(()=>{
        console.warn('2.2')
      })

    this.setState({
      count: this.state.count + 1
    },()=>{
      console.warn('3')
    });

    Promise.resolve()
      .then(() => {
        console.warn('3.2')
      })

    setTimeout(() => {
      console.warn('4')
    }, 0)
    
  }

  increase = () => {
    this.add()
    console.log(this.state.count)
  }

  render() {
    return (
      <div style={{margin: 100}}>
        <button onClick={this.increase}>{this.state.count}</button>
        
      </div>
    );
  }
}

function Person() {
  const [count, setCount] = useState(1)

  return (
    <div style={{marginTop: 100}}>
      <button onClick={() => { setCount(count+1) }}>改变数字: {count}</button>
    </div>
  );
}

function TestHook() {
  
  const [name, setName] = useState('mochixuan')
  const [age, setAge] = useState(21)

  return (
    <div style={{margin: '100px',width: '100%'}}>
      <button onClick={() => { setName(name+"1") }}>改变姓名: {name}</button>
      <button style={{marginLeft: 40}} onClick={() => { setAge(age+1) }}>改变年龄: {age}</button>
      <Person />
      <TextState ref='ref'/>
    </div>
  );
}

export default TestHook