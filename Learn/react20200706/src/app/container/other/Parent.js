import React,{PureComponent, Component} from 'react'

class PureChild1 extends Component {

  constructor(props){
    super()

    console.log('==========constructor1')
  }

  componentWillReceiveProps(nextProps) {
    console.warn('nextProps1')
  }

  render() {
    return (
      <div>Child1</div>
    )
  }
}

class PureChild2 extends Component {

  constructor(props){
    super()

    console.log('==========constructor2')
  }

  componentWillReceiveProps(nextProps) {
    console.warn('nextProps2')
  }

  render() {
    return (
      <div>Child2</div>
    )
  }
}

class PureChild3 extends Component {

  constructor(props){
    super()

    console.log('==========constructor3')
  }

  componentWillReceiveProps(nextProps) {
    console.warn('nextProps3')
  }

  render() {
    return (
      <div>Child3</div>
    )
  }
}

class PureChild extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      items: {
        a: 1,
        b: 2,
        c: 3
      },
      count: true,
    }
  }

  onChange = () => {
    // const items = [...this.state.items];
    // // items.push(4);
    this.setState({
      items: {
        a: 1,
        b: 2,
        c: 3
      }
    })
  }

  onChangeCount = () => {
    this.setState({
      count: !this.state.count
    })
  }

  render() {
    console.log('pure render', this.state.items)
    return (
      <div>
        <div>PureComponent</div>
        <button onClick={this.onChange}>改变</button>
        {
          this.state.count ? (
            <>
              <PureChild1></PureChild1>
              <PureChild2></PureChild2>
            </>
          ) : (
            <>
              <PureChild2></PureChild2>
              <PureChild1></PureChild1>
            </>
          )
        }
        
        <button onClick={this.onChangeCount}>改变1</button>
      </div>
    )
  }
}


class Child extends React.Component {

  name = 10;

  constructor(props) {
      super();
      this.state = {
        name: 'mo mo da'
      }
  }

  componentWillReceiveProps(nextProps, nextState) {
    console.warn('调用了,nextProps', nextProps)
    console.warn('调用了,nextState', nextState)

    this.setState({
      name: '1'
    })
  }

  shouldComponentUpdate() {
    
    return true;
  }

  componentWillUpdate() {
    // this.setState({
    //   name: '2'
    // })
  }

  componentDidMount() {
    console.warn('------点击前-------')
    this.refs.btn.click()
    console.warn('-----点击后------');
  }

  render() {
    console.log('==========render=============', this.state.name)
    return (
      <div style={{backgroundColor: 'blue', margin: 20}}>
        <div>我是子组件</div>
        <div>{this.props.name}</div>
        <button ref='btn' onClick={()=> { 
          console.warn('点击中');
           //  this.props.name = '我想改变你'
           // console.warn(this.props.name);
             }}>改变父内容</button>
      </div>
    );
  }
}

const child = new Child();
console.warn('child', child);

export default class Parent extends React.Component {
  
  constructor(props) {
    super(props)

    this.state = {
      name: 'mochixuan'
    }
  }

  componentDidMount() {
    setTimeout(()=>{
      console.warn('this', this);
    }, 3000)

    Promise.resolve().then(()=>{
      console.log('=======1>>>' + this.state.name)
      this.setState({name: 1})
      console.log('=======1>>>'+this.state.name)
      this.setState({name: 2})
      console.log('=======2>>>' + this.state.name)
      this.setState({name: 3})
      console.log('=======3>>>' + this.state.name)
    })
  }

  componentDidUpdate() {
    console.warn('---------------didupdate', this.state.name)
  }

    render() {
        return (
          <div>
            <div>我是父组件</div>
            <button onClick={()=> { 
             }}>测试</button>
            <Child name={this.state.name}/>
            <PureChild />
          </div>
        );
    }
}