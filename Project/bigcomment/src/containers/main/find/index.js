import React,{Component} from 'react'
import {connect} from 'react-redux'
import './style.css'

class Page extends Component{
    render() {
        return (
            <div className={'find'}>
                发现
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

const FindTabPage = connect(mapStateToProps,mapDispatchToProps)(Page)

export {FindTabPage}
