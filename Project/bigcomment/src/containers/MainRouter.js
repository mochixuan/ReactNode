import React,{Component} from 'react'
import {Route,Switch,BrowserRouter} from 'react-router-dom'

import { MainPage } from './main'
import { HomePage } from './home'
import { CityPage } from './city'
import { UserPage } from './user'
import { SearchPage } from './search'
import { DetailPage } from './detail'
import { NotFoundPage } from './notfound'

class MainRouter extends Component{
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path={'/'} exact={true} component={MainPage}/>
                    <Route path={'/home'} component={HomePage}/>
                    <Route path={'/city'} component={CityPage}/>
                    <Route path={'/user'} component={UserPage}/>
                    <Route path={'/search/:type(/:keyword)'} component={SearchPage}/>
                    <Route path={'/detail/:id'} component={DetailPage}/>
                    <Route path={'*'} component={NotFoundPage}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export {MainRouter}
