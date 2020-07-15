import React,{Component,useState,useEffect} from 'react';

const TestView = () => {

  const [data,changeData] = useState({color: 'red',count: 0})
  const [data1,changeData1] = useState({color: 'red',count: 0})

  // useEffect(()=>{
  //   // componentDidMonut、componentDidUpdate
  //   console.log(`一阶 ${data.count}`)
  //   return () => {
  //     // componentWillUpdate、componentWillUnmount
  //     console.log(`二阶 ${data.count}`)
  //   }
  // })

  useEffect(()=>{
    // componentDidMonut
    console.log(`一阶 ${data.count}`)
    return () => {
      // componentWillUnmount
      console.log(`二阶 ${data.count}`)
    }
  },[])

  return (
    <div>
      <div style={{backgroundColor: data.color,display: 'flex',justifyContent: 'center',padding: 10}}>
      <button onClick={()=>{
        changeData({color: data.color === 'red' ? 'blue' : 'red', count: data.count+1})
      }}>内部切换</button>
      </div>
      <div style={{backgroundColor: data1.color,display: 'flex',justifyContent: 'center',padding: 10}}>
        <button onClick={()=>{
          changeData1({color: data1.color === 'red' ? 'blue' : 'red', count: data1.count+1})
        }}>内部切换</button>
      </div>
    </div>
  )
}

class App extends Component{

  constructor(props) {
    super(props)

    this.state = {
      status: true
    }
  }

  render(){
    return (
      <div>
        {
          this.state.status ? <TestView /> : null
        }
        <div style={{display: 'flex',justifyContent: 'center',padding: 10}}>
          <button style={{margin: 100, display: 'inline-block'}} onClick={this.changeStatus}>改状态</button>
          <button style={{margin: 100, display: 'inline-block'}} onClick={this.changeView}>切界面</button>
        </div>
      </div>
    );
  }

  changeStatus = () => {

  }

  changeView = () => {
    this.setState({status: !this.state.status})
  }

};

export default App;
