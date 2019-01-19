import React,{Component} from 'react'
import {connect} from 'react-redux'

class Page extends Component{
    render() {
        return (
            <div>CityPage</div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

const CityPage = connect(mapStateToProps,mapDispatchToProps)(Page)

export {CityPage}
