import React,{Component} from 'react'
import {HeaderWrapper,Logo,Nav,NavItem,Addition,Button,NavSearch,NavSearchInput} from './style'
import {CSSTransition} from 'react-transition-group'

class Header extends Component{

    constructor(props) {
        super(props)

        this.state = {
            focused: false
        }
    }

    render() {
        return (
            <HeaderWrapper>
                <Logo/>
                <Nav>
                    <NavItem className={'left home'}>首页</NavItem>
                    <NavItem className={'left download'} >下载App</NavItem>
                    <NavSearch>
                        <CSSTransition
                            in={this.state.focused}
                            timeout={200}
                            classNames={'slide'}
                            >
                            <NavSearchInput
                                className={this.state.focused ? 'focused' : ''}
                                onFocus={()=> this.onListenerInputState(true)}
                                onBlur={()=>this.onListenerInputState(false)}
                            />
                        </CSSTransition>
                        <CSSTransition
                            in={this.state.focused}
                            timeout={200}
                            classNames={'opacity'}
                        >
                            <i className={this.state.focused ? 'focused iconfont' : 'iconfont'}>&#xe6a8;</i>
                        </CSSTransition>
                    </NavSearch>
                    <NavItem className={'right'}>登录</NavItem>
                    <NavItem className={'right'}>
                        <i className={'iconfont'}>&#xe636;</i>
                    </NavItem>
                </Nav>
                <Addition>
                    <Button className={'write'}>
                        <i className={'iconfont'}>&#xe637;</i>
                        写文章
                    </Button>
                    <Button className={'register'}>注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }

    onListenerInputState = (focused) => {
        this.setState({focused})
    }

}

export {Header}
