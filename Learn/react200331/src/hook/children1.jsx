import React, {useContext, useMemo, useState, useEffect, memo} from 'react';
import {GlobalContext} from './store'

class Parent1 extends React.Component {
  
  constructor(props) {
      super(props)
      this.state = {
        count: 0,
      };

  }

  render() {
    Test1();
      return (
        <div style={{backgroundColor: 'green', margin: 10}}>
          <span>Parent1: {this.state.count}</span>
          <span>Parent2: {this.state.total}</span>
        </div>
      );
  }

}

class Child1 extends Parent1 {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      total: 0,
    };

    setInterval(()=>{
        this.setState({count: ++this.state.count,total: ++this.state.total})
    },1000)
  }

  render() {
      return super.render()
  }
}

class Parent extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    render() {
      return <div>{this.state.count}</div>;
    }

}

function Child(WrappedComponent) {
    return class extends WrappedComponent {
        render() {
            return (
                <div style={{backgroundColor: 'green',margin: 10}}>
                    <span>{this.state.count}</span>
                    {super.render()}
                </div>
            )
        }
    }
}

function Test1() {
  let a = 0;
  // console.warn('1', a);
  function Test2 () {
    setInterval(()=>{
      // console.warn('2', a)
    }, 1000)
  }
  a++;
  Test2();
}

const My = ({test}) => {
  return <div>My{test}</div>;
};
const areEqual = (preProps, nextProps) => {
  return preProps.test === nextProps.test;
};
const AC = memo(My, areEqual);

function TextHook() {

  const [test1,setTest1] = useState(1);

  const result = useMemo(() => {
    console.warn('useMemo', test1);
    return 'useMemo';
  }, [test1]);

  console.warn('TextHook');
  return (
    <div style={{margin: 10, backgroundColor: '#949494'}}>
      <button onClick={() => setTest1(test1 + 1)}>改变{result}</button>
    </div>
  );
}

const NewCoponent = Child(Parent);



function Children1() {
    const { state: { user} } = useContext(GlobalContext)
    console.warn('state refresh');
    return (
      <div>
        <h2>Children1</h2>
        <div>
          <p>name: {user.name}</p>
          <p>age: {user.age}</p>
        </div>
        <Child1 />
        <div style={{width: '90rem', height: '60px', backgroundColor: 'red'}}></div>
      </div>
    );
}

export {Children1}