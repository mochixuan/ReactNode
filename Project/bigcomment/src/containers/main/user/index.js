import React,{Component} from 'react'
import {connect} from 'react-redux'
import './style.css'

class Page extends Component{
    render() {
        return (
            <div className={'find'}>
                <ul>用户</ul>
                <ul>用户</ul>
                <ul>用户</ul>
                <ul>用户</ul>
                <ul>用户</ul>
                <ul>用户</ul>
                <ul>用户</ul>
                <ul>用户</ul>
                <ul>用户</ul>
                <ul>用户</ul>
                <ul>用户</ul>
                <ul>用户</ul>
                <ul>用户</ul>
                <ul>用户</ul>
                <ul>用户</ul>
                <ul>用户</ul>
                <ul>用户</ul>
                <ul>用户</ul>
                <ul>用户</ul>
                <ul>用户</ul>
                <ul>用户</ul>
                <ul>用户</ul>
                <ul>用户</ul>
                <ul>用户</ul>
                <ul>用户</ul>
                <ul>用户</ul>
                <ul>用户</ul>
                <ul>用户</ul>
                <ul>用户</ul>
                <ul>用户</ul>
                <ul>用户</ul>
                <ul>用户</ul>
                <ul>用户</ul>
                <ul>用户</ul>
                <ul>用户</ul>
                <ul>用户</ul>
                <ul>用户</ul>
                <ul>用户</ul>
                <ul>用户</ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

const UserTabPage = connect(mapStateToProps,mapDispatchToProps)(Page)

export {UserTabPage}
