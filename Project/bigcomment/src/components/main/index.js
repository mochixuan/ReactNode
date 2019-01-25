import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'

import './style.css'

export class MainTabView extends Component{
    render() {
        return (
            <div className={'main_tab'}>
                <div className={'main_tab_ul'}>
                    <NavLink to={'/home'} className={'main_tab_li'} activeClassName={'main_tab_li_selected'}>首页</NavLink>
                    <NavLink to={'/find'} className={'main_tab_li'} activeClassName={'main_tab_li_selected'}>发现</NavLink>
                    <NavLink to={'/news'} className={'main_tab_li'} activeClassName={'main_tab_li_selected'}>资讯</NavLink>
                    <NavLink to={'/user'} className={'main_tab_li'} activeClassName={'main_tab_li_selected'}>用户</NavLink>
                </div>
            </div>
        )
    }

}

