import React,{Component} from 'react'
import '../decorator/decorator'


export default class LiftCyclePage extends Component{

    constructor(props) {
        super(props)
        this.state = {
            text: '按压'
        }
        console.warn('constructor')
    }

    componentWillMount() {
        console.warn('componentWillMount')
    }

    componentDidMount() {
        console.warn('componentDidMount')
    }

    componentWillReceiveProps(nextProps) {
        console.warn('componentWillReceiveProps')
    }

    shouldComponentUpdate(nextProps,nextState) {
        console.warn('shouldComponentUpdate')
        return true
    }

    componentWillUpdate(nextProps,nextState) {
        console.warn('componentWillUpdate')
    }

    render() {
        return (
            <div>
                <button onClick={this.change}>{this.state.text}</button>
            </div>
        )
    }

    change = () => {
        this.setState({
            text: '大家好'
        })

        const student = new Student()
        console.warn(student)
    }

    componentDidUpdate(nextProps,nextState) {
        console.warn('componentDidUpdate')
    }

    componentWillUnmount() {
        console.warn('componentWillUnmount')
    }

}

class Person {
    name = "网"
    test() {

    }
}

class Student {
    constructor(prosp) {
        Person.apply(this)
    }
}
