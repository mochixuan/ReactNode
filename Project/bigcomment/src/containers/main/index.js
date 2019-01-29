import React,{Component} from 'react'
import {connect} from 'react-redux'
import {HomeTabPage} from './home'
import {FindTabPage} from './find'
import {NewsTabPage} from './news'
import {UserTabPage} from './user'
import {MainTabView} from '../../components/main'
import {Switch,Route,Redirect} from 'react-router-dom'

class Page extends Component{
    render() {
        return (
            <div>
                <Switch>
                    <Route path={'/main/home'} component={HomeTabPage}/>
                    <Route path={'/main/find'} component={FindTabPage}/>
                    <Route path={'/main/news'} component={NewsTabPage}/>
                    <Route path={'/main/user'} component={UserTabPage}/>
                    <Redirect to={'/main/home'}/>
                </Switch>
                <MainTabView/>
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
