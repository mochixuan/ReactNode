import React, {Component, Fragment} from 'react'
import {CSSTransition} from 'react-transition-group'
import './Animate2.css'

export default class Animate2 extends Component{

    constructor(props) {
        super(props)

        this.state = {
            display: true
        }
    }

    render() {
        return (
            <Fragment>
                <CSSTransition
                    in={this.state.display}
                    timeout={1000}
                    classNames={'wx'}
                    unmountOnExit
                    onEntered={(el)=>{el.style.color='blue'}}
                    appear={true}
                >
                    <div>Hello World</div>
                </CSSTransition>
                <button onClick={this.toggleState}>切换</button>
            </Fragment>
        )
    }

    toggleState = () => {
        this.setState({display: !this.state.display})
    }

}
