import React,{Component} from 'react'
import {connect} from 'react-redux'

class Page extends Component{
    render() {
        return (
            <div>SearchPage</div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

const SearchPage = connect(mapStateToProps,mapDispatchToProps)(Page)

export {SearchPage}
