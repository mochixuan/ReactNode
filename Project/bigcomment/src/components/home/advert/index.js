import React,{Component} from 'react'
import './style.css'

class AdvertView extends Component{

    constructor(props) {
        super(props)

        this.state = {
            adItems: []
        }
    }

    render() {
        return (
            <div className={'ad'}>
                <div className={'ad_header'}>
                    <span className={'ad_header_span'}>超值特惠</span>
                </div>
                <ul className={'ad_ul'}>
                    {this.renderItemView()}
                </ul>
            </div>
        )
    }

    renderItemView = () => {
        return this.state.adItems.map((item,index)=>{
            return (
                <div key={item} className={'ad_ul_li'}>dadsa</div>
            )
        })
    }

}

export {AdvertView}
