import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Page extends Component{
    render() {
        return (
            <div>
                <div>MainPage</div>
                <div>
                    <Link to={'/city'}>城市</Link>
                </div>
                <div>
                    <Link to={{pathname: '/home',search: '', hash: '', key: 'abc123', state: {}}}>主页</Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

const MainPage = connect(mapStateToProps,mapDispatchToProps)(Page)

export {MainPage}
