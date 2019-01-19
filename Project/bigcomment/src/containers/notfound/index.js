import React,{Component} from 'react'
import {connect} from 'react-redux'

class Page extends Component{
    render() {
        return (
            <div>Error 404</div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

const NotFoundPage = connect(mapStateToProps,mapDispatchToProps)(Page)

export {NotFoundPage}
