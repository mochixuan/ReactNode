import React,{Component} from 'react'
import {connect} from 'react-redux'

class Page extends Component{
    render() {
        return (
            <div>HomePage</div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

const HomePage = connect(mapStateToProps,mapDispatchToProps)(Page)

export {HomePage}
