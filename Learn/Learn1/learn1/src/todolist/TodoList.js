import React,{Component} from 'react'
require('./TodoList.css')

export default class TodoList extends Component{

    constructor(props) {
        super(props)

        this.state = {
            list:[
               'learn react',
               'learn english'
            ],
            inputValue: ''
        }
    }

    render() {
        return (
            <div>
                <div>
                    <input value={this.state.inputValue} onChange={(e)=>{
                        this.setState({inputValue: e.target.value})
                    }}/>
                    <button className='red-btn' onClick={()=>{
                        this.setState({
                            list: [...this.state.list,this.state.inputValue],
                            inputValue: ''
                        })
                    }}>Add</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            return (
                                <li key={index} onClick={()=>{
                                    const list = this.state.list
                                    list.splice(index,1)
                                    this.setState({
                                        list: list
                                    })
                                }}>{item}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }

}
