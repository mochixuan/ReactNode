import React,{Component} from 'react'
import {connect} from 'react-redux'

class Page extends Component{
    render() {
        return (
            <div>DetailPage</div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

const DetailPage = connect(mapStateToProps,mapDispatchToProps)(Page)

export {DetailPage}
