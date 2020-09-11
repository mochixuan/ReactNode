import React from 'react'
import * as PropTypes from 'prop-types';

class Child1 extends React.Component{

    static contextTypes = {
        name: PropTypes.string,
        age: PropTypes.number,
        sex: PropTypes.string,
        getName: PropTypes.func,
    }

    constructor(props) {
        super(props);

        this.state = {
            name: 'wang'
        }
    }

    render() {
        console.warn(this.context);

        return (
            <button style={{margin: 20}} onClick={()=>{
                this.forceUpdate()
            }}>Child1 Refresh: {this.context.name}:{this.context.getName()}</button>
        )
    }
}

class Child2 extends React.Component{

    static contextTypes = {
        name: PropTypes.string,
        age: PropTypes.number,
        onChangeName: PropTypes.func
    }

    componentDidMount() {
        console.log(this.context.name)
    }

    render() {
        return (
            <div style={{margin: 20}} onClick={()=>{

            }}>Child2
            <input onChange={(e)=>{
                this.context.onChangeName(e.target.value)
                console.warn(this.context.name);
            }}/>
            </div>
        )
    }
}

class Parent extends React.Component {
    static childContextTypes = {
        name: PropTypes.string,
        sex: PropTypes.string,
    }

    getChildContext() {
        return {
            name: 'tian tian',
            sex: '男'
        }
    }

    componentDidMount() {
        setTimeout(()=>{
            this.props.onChangeColor('blue');
            this.forceUpdate();
        },6000)
    }

    render() {
        console.warn('refresh parent')
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default class ContextTest extends React.Component {

    static childContextTypes =  {
        name: PropTypes.string,
        age: PropTypes.number,
        onChangeName: PropTypes.func,
        getName: PropTypes.func,
    }

    constructor(props) {
        super(props);

        this.state = {
            name: 'mochixuan'
        }

        this.name = 'mochixuan'
        this.color = 'red';
    }

    onChangeName = (name) => {
        // this.setState({ name })
        this.name = name;

        setTimeout(()=>{
            console.warn('--------1------', new Date().getTime())
        },0)
        Promise.resolve()
            .then(()=>{
                console.warn('--------p1------', new Date().getTime())
            })
        console.log('------------start',this.state.name)
        this.setState({
            name: name,
        },()=>{
            console.warn('-------2-----', new Date().getTime())
        })
        console.log('------------end', this.state.name)
        setTimeout(() => {
            console.warn('--------3------', this.state.name, new Date().getTime())
        }, 0)
        Promise.resolve()
            .then(() => {
                console.warn('--------p3------', new Date().getTime())
            })
    }

    getName = () => {
        return this.name;
    }

    getChildContext() {
        return {
            name: this.name,
            age: 24,
            onChangeName: this.onChangeName,
            getName: this.getName
        }
    }

    componentDidMount() {
        console.warn(this.refs.parent);
    }

    onChangeColor = (color) => {
         this.color = color
    }

    render() {
        console.warn('refresh render');
        return (
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',backgroundColor:  this.color}}>
                asasasas
                <Parent onChangeColor={this.onChangeColor}>
                    <Child1 ref='parent'/>
                </Parent>
                <Child2/>
                <button onClick={() => {this.forceUpdate()}}>{this.color}</button>
            </div>
        )
    }

}