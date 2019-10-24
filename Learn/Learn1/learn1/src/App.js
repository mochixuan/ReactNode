import React,{Component} from 'react'
import TodoList from './todolist/TodoList'
import Animate from "./animate/Animate";
import {FlexTest} from'./flex/FlexTest'
import LiftCyclePage from './liftcycle/LiftCyclePage'
import LiftCycle2Page from './liftcycle/LiftCycle2Page'

export default class App extends Component{

    render() {
        return (
            <LiftCycle2Page/>
        )
    }

}
