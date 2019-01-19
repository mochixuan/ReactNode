import React,{Component} from 'react'
import {connect} from 'react-redux'

class Page extends Component{
    render() {
        return (
            <div>UserPage</div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

const UserPage = connect(mapStateToProps,mapDispatchToProps)(Page)

export {UserPage}
