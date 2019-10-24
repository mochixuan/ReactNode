import React ,{Component} from 'react'

export default class LiftCycle2Page extends Component{

    constructor(props) {
        super(props)
        this.state = {
            testTip: 1,
            name: {
                name: '天涯海角'
            },
        }

        console.warn('constructor')
    }

    static getDerivedStateFromProps(nextProps,nextState) {
        // 名义：将传入的props映射到state上面
        // 调用：每次re-rendering之前被调
        // 作用：档新的props改变需要改变state是可以在这里调用
        // 注意：如果props传入的内容不需要影响到你的state，那么就需要返回一个null，这个返回值是必须的，所以尽量将其写到函数的末尾
        console.warn('getDerivedStateFromProps',nextState)
        // 返回null或者state对象(仅仅被修改的)
        return {
            name: {
                name: 'mochixuan'
            }
        }
    }

    static UNSAFE_componentWillMount() {
        console.warn('UNSAFE_componentWillMount')
    }

    componentDidMount() {
        console.warn('componentDidMount')
        this.state.name = "天涯"
    }

    static UNSAFE_componentWillReceiveProps(nextProps) {
        console.warn('UNSAFE_componentWillReceiveProps')
    }

    getSnapshotBeforeUpdate(perProps, perState) {
        console.warn('getSnapshotBeforeUpdate')
        // 这个参数将会传给componentDidUpdate第三个参数
        return null
    }

    shouldComponentUpdate(nextProps,nextState) {
        console.warn('shouldComponentUpdate')
        return true
    }

    componentDidUpdate(perProps, perState, data) {
        console.warn('componentDidUpdate',data)
    }

    componentWillUnmount() {
        console.warn('componentWillUnmount')
    }

    render() {
        console.warn('render')
        return (
            <div style={{
                width: '200px',
                height: '100px',
                margin: '100px auto',
                backgroundColor: '#f01290',
                textAlign: 'center',
                lineHeight: '100px',
                color: '#fff'
            }} onClick={this.change}>
                新生命周期{this.state.testTip}{this.state.name.name}
            </div>
        )
    }

    renderTestView = () => {
        return (
            <div>
                <h1>asasasasasas</h1>
            </div>
        )
    }

    change = () => {
        // this.setState({
        //     testTip: 10,
        // },()=>{
        //     console.warn(1, this.state.testTip)
        // })
        // this.setState({
        //     testTip: this.state.testTip+1,
        // },()=>{
        //     console.warn(2, this.state.testTip)
        // })
        // this.setState({
        //     testTip: this.state.testTip+1,
        // },()=>{
        //     console.warn(3, this.state.testTip)
        // })
        // this.setState({
        //     testTip: this.state.testTip+1,
        // },()=>{
        //     console.warn(4, this.state.testTip)
        // })
        // setTimeout(()=>{
        //     this.setState({
        //         testTip: 10,
        //     })
        //     console.warn('testTip1',this.state.testTip)
        //     this.setState({
        //         testTip: 11,
        //     },()=>{
        //         console.warn('testTip22',this.state.testTip)
        //     })
        //     console.warn('testTip2',this.state.testTip)
        // },0)

        Promise.resolve().then(()=>{
            this.setState({
                testTip: 10,
            })
            console.warn('testTip1',this.state.testTip)
            this.setState({
                testTip: 11,
            },()=>{
                console.warn('testTip22',this.state.testTip)
            })
            console.warn('testTip2',this.state.testTip)
        })
    }

}
