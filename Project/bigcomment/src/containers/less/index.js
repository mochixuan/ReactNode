import React,{Component} from 'react'
import {connect} from 'react-redux'
import './style.less'

class Page extends Component{
    render() {
        return (
            <div>
                <div>正常Div</div>
                <ul>
                    <li className={'li'}>li 0</li>
                    <li className={'top-li'}>li 1</li>
                    <li className={'center-li'}>li 2</li>
                    <li id={'bottom-li'}>li 3</li>
                </ul>
                <p>
                    p标签<span>span标签</span>
                    <strong>strong标签</strong>
                </p>
                <div className={'external'}>
                    <div>
                        <ul>
                            <li>1.qwqwdq</li>
                            <li>2.qwqwdq</li>
                            <li>3.qwqwdq</li>
                            <li>4.qwqwdq</li>
                            <li>5.qwqwdq</li>
                            <li>6.qwqwdq</li>
                            <li>7.qwqwdq</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>11.qwqwdq</li>
                            <li>22.qwqwdq</li>
                            <li>33.qwqwdq</li>
                            <li>44.qwqwdq</li>
                            <li>55.qwqwdq</li>
                            <li>66.qwqwdq</li>
                            <li>77.qwqwdq</li>
                        </ul>
                    </div>
                </div>
                <div className={'one'}>One</div>
                <div className={'two'}>Two</div>
                <div className={'three'}>Three</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

const LessPage = connect(mapStateToProps,mapDispatchToProps)(Page)

export {LessPage}
