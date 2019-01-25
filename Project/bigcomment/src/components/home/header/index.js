import React,{Component} from 'react'
import './style.css'

class HomeHeaderView extends Component{

    render() {
        return (
            <div id={'home-header'}>
                <div className={'home-header-left'}>
                    <span>{this.props.cityName}</span>
                    <i className={'iconfont'}>&#58887;</i>
                </div>
                <div className={'home-header-center'}>
                    <i className={'iconfont'}>&#xe782;</i>
                    <span className={'home-header-center-tip'}>请输入关键字</span>
                </div>
                <div className={'home-header-right'}>
                    <i className={'iconfont'}>&#58912;</i>
                </div>
            </div>
        )
    }

}

export {HomeHeaderView}
