import React,{Component} from 'react'
import {Route,Switch,BrowserRouter} from 'react-router-dom'

import { MainPage } from './main'
import { CityPage } from './city'
import { SearchPage } from './search'
import { DetailPage } from './detail'
import { NotFoundPage } from './notfound'

class MainRouter extends Component{
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path={'/'} component={MainPage}/>
                    <Route path={'/city'} component={CityPage}/>
                    <Route path={'/search/:type(/:keyword)'} component={SearchPage}/>
                    <Route path={'/detail/:id'} component={DetailPage}/>
                    <Route path={'*'} component={NotFoundPage}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export {MainRouter}
