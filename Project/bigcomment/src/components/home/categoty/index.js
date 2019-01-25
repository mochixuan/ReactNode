import React,{Component} from 'react'
import ReactSwipe from 'react-swipe'
import './style.css'

class CategoryView extends Component{

    constructor(props) {
        super(props)

        this.state = {
            swipeIndex: 0
        }
    }

    componentWillMount() {
        this.swipeOptions = {
            auto: 3000,
            callback: this.swipeCallBack
        }

        const iconBaseUrl = 'http://images2015.cnblogs.com/blog/138012/201610/'
        this.swipeItems = [
            [
                {icon: iconBaseUrl+'138012-20161022224203170-1528315005.png',text: '景点'},
                {icon: iconBaseUrl+'138012-20161022224309185-1519181081.png',text: 'KTV'},
                {icon: iconBaseUrl+'138012-20161022224150045-30962603.png',text: '购物'},
                {icon: iconBaseUrl+'138012-20161022224237513-176380794.png',text: '生活服务'},
                {icon: iconBaseUrl+'138012-20161022224256732-145714491.png',text: '健身运动'},
                {icon: iconBaseUrl+'138012-20161022224222123-643915682.png',text: '美发'},
                {icon: iconBaseUrl+'138012-20161022224229451-475201730.png',text: '亲子'},
                {icon: iconBaseUrl+'138012-20161022224244545-1583700011.png',text: '小吃快餐'},
                {icon: iconBaseUrl+'138012-20161022224113560-1012968440.png',text: '自助餐'},
                {icon: iconBaseUrl+'138012-20161022224210732-490953965.png',text: '酒吧'},
            ],
            [
                {icon: iconBaseUrl+'138012-20161022224203170-1528315005.png',text: '美食'},
                {icon: iconBaseUrl+'138012-20161022224309185-1519181081.png',text: '电影'},
                {icon: iconBaseUrl+'138012-20161022224150045-30962603.png',text: '酒店'},
                {icon: iconBaseUrl+'138012-20161022224237513-176380794.png',text: '休闲娱乐'},
                {icon: iconBaseUrl+'138012-20161022224256732-145714491.png',text: '外卖'},
                {icon: iconBaseUrl+'138012-20161022224222123-643915682.png',text: '火锅'},
                {icon: iconBaseUrl+'138012-20161022224229451-475201730.png',text: '丽人'},
                {icon: iconBaseUrl+'138012-20161022224244545-1583700011.png',text: '度假出行'},
                {icon: iconBaseUrl+'138012-20161022224113560-1012968440.png',text: '足疗按摩'},
                {icon: iconBaseUrl+'138012-20161022224210732-490953965.png',text: '周边游'},
            ],
            [
                {icon: iconBaseUrl+'138012-20161022224203170-1528315005.png',text: '日本菜'},
                {icon: iconBaseUrl+'138012-20161022224309185-1519181081.png',text: 'SPA'},
                {icon: iconBaseUrl+'138012-20161022224150045-30962603.png',text: '结婚'},
                {icon: iconBaseUrl+'138012-20161022224237513-176380794.png',text: '学习培训'},
                {icon: iconBaseUrl+'138012-20161022224256732-145714491.png',text: '西餐'},
                {icon: iconBaseUrl+'138012-20161022224222123-643915682.png',text: '火车机票'},
                {icon: iconBaseUrl+'138012-20161022224229451-475201730.png',text: '烧烤'},
                {icon: iconBaseUrl+'138012-20161022224244545-1583700011.png',text: '家装'},
                {icon: iconBaseUrl+'138012-20161022224113560-1012968440.png',text: '宠物'},
                {icon: iconBaseUrl+'138012-20161022224348467-646596364.png',text: '全部分类'},
            ]
        ]
    }

    render() {
        return (
            <div className={'swipe'}>
                <ReactSwipe swipeOptions={this.swipeOptions}>
                    {this.renderSwipeItemView()}
                </ReactSwipe>
                <ul className={'swipe_dot_ul'}>
                    <li className={this.state.swipeIndex === 0 ? 'swipe_dot_selected' : 'swipe_dot'}/>
                    <li className={this.state.swipeIndex === 1 ? 'swipe_dot_selected' : 'swipe_dot'}/>
                    <li className={this.state.swipeIndex === 2 ? 'swipe_dot_selected' : 'swipe_dot'}/>
                </ul>
            </div>
        )
    }

    renderSwipeItemView = () => {
        return this.swipeItems.map((oneItem,oneIndex)=>{
            const swipeItemChildView = oneItem.map((twoItem,twoIndex)=>{
                return (
                    <li
                        key={twoItem.text}
                        className={'swipe_li'}
                        style={{backgroundImage: `url(${twoItem.icon})`}}
                    >
                        {twoItem.text}
                    </li>
                )
            })
            return (
                <div key={oneIndex+''} className={'swipe_div'}>
                    <ul className={'swipe_ul'}>
                        {swipeItemChildView}
                    </ul>
                </div>
            )
        })
    }

    swipeCallBack = (swipeIndex) => {
        this.setState({
            swipeIndex
        })
    }

}

export {CategoryView}
