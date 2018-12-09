import React, {Component, Fragment} from 'react'
require('./Animate.css')

export default class Animate extends Component{

    constructor(props) {
        super(props)

        this.state = {
            display: false
        }
    }

    render() {
        return (
            <Fragment>
                <div className={this.state.display ? 'show' : 'hide'}>
                    Hello World
                </div>
                <button onClick={this.toggleState}>切换</button>
            </Fragment>
        )
    }

    toggleState = () => {
        this.setState({display: !this.state.display})
    }

}
