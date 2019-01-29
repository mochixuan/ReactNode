import React,{Component} from 'react'
import {Route,Switch,BrowserRouter} from 'react-router-dom'

import { MainPage } from './main'
import { CityPage } from './city'
import { SearchPage } from './search'
import { DetailPage } from './detail'
import { NotFoundPage } from './notfound'
import {LessPage} from './less'

class MainRouter extends Component{
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path={'/main'} component={MainPage}/>
                    <Route path={'/city'} component={CityPage}/>
                    <Route path={'/less'} component={LessPage}/>
                    <Route path={'/search/:type(/:keyword)'} component={SearchPage}/>
                    <Route path={'/detail/:id'} component={DetailPage}/>
                    <Route path={'*'} component={NotFoundPage}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export {MainRouter}
