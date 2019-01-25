import React,{Component} from 'react'
import {connect} from 'react-redux'
import {HomeHeaderView} from '../../../components/home/header'
import {CategoryView} from '../../../components/home/categoty'
import {AdvertView} from '../../../components/home/advert'

class Page extends Component{
    render() {
        return (
            <div>
                <HomeHeaderView cityName={'深圳'}/>
                <CategoryView/>
                <AdvertView/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

const HomeTabPage = connect(mapStateToProps,mapDispatchToProps)(Page)

export {HomeTabPage}
