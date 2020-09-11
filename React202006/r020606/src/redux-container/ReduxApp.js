import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import MainPage from './page/MainPage'
import FindPage from './page/FindPage'
import RouterIndex from './page'
import { configureStore } from './redux/store/configureStore'

const store = configureStore()

function ReduxApp() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={RouterIndex} />
                    <Route exact path='/main' component={MainPage} />
                    <Route exact path='/find' component={FindPage} />
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}

export default ReduxApp