import React,{Component} from 'react'
import {connect} from 'react-redux'

class Page extends Component{
    render() {
        return (
            <div>
                资讯
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

const NewsTabPage = connect(mapStateToProps,mapDispatchToProps)(Page)

export {NewsTabPage}
