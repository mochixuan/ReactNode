import React, {Component, Fragment} from 'react'
import './Animate.css'
import {CSSTransition,TransitionGroup} from 'react-transition-group'

export default class Animate extends Component{

    constructor(props) {
        super(props)

        this.state = {
            list: []
        }
    }

    render() {
        return (
            <Fragment>
                <TransitionGroup>
                    {

                        this.state.list.map((item,index)=>{
                            return (
                                <CSSTransition
                                    key={index}
                                    timeout={1000}
                                    classNames={'wx'}
                                    unmountOnExit
                                    onEntered={(el)=>{el.style.color='blue'}}
                                    appear={true}
                                >
                                    <div className={'item'} onClick={()=>{this.removeItem(index)}}>{item}</div>
                                </CSSTransition>
                            )
                        })

                    }
                </TransitionGroup>
                <button onClick={this.addItem}>添加</button>
            </Fragment>
        )
    }

    addItem = () => {
        this.setState({list: [...this.state.list,'item'+this.state.list.length]})
    }

    removeItem = (removeIndex) => {
        let list = [...this.state.list]
        list.splice(removeIndex,1)
        this.setState({
            list
        })
    }

}
