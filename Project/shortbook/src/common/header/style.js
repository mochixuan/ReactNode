import styled from 'styled-components'
import logoIcon from '../../static/img/logo.png'

export const HeaderWrapper = styled.div`
    height: 56px;
    position: relative;
    border-bottom: 1px solid #f0f0f0;
`

export const Logo = styled.a.attrs({
    href: '/'
})`
    position: absolute;
    width: 100px;
    height: 56px;
    left: 0;
    top: 0;
    display: block;
    background: url(${logoIcon});
    background-size: contain;
`

export const Nav = styled.div`
    width: 960px;
    height: 56px;
    margin: 0 auto;
    box-sizing: border-box;
    padding-right: 70px;
`

export const NavItem = styled.div`
    font-size: 15px;
    &.left {
        float: left;
        font-size: 17px;
    };
    &.right {
        float: right;
        color: #969696;
    };
    &.download {
        color: #333;
    }
    &.home {
        color: #ea6f5a;
    };
    height: 56px;
    line-height: 26px;
    padding: 15px;
    box-sizing: border-box;
    cursor:pointer;
`

export const NavSearch = styled.div`
    height: 38px;
    margin-left: 20px;
    margin-top: 9px;
    background: #eee;
    float: left;
    border-radius: 19px;
    .iconfont {
        width: 38px;
        height: 38px;
        border-radius: 19px;
        display: inline-block;
        line-height: 38px;
        text-align: center;
        color: #666;
        &.focused {
            background: #aaa;
        }
        &.opacity-enter {
            transition: all .2s ease-out;
        };
        &.opacity-enter-active {
            opacity: 1;
        };
        &.opacity-exit {
            transition: all .2s ease-out;
        };
        &.opacity-exit-active {
            opacity: 0;
        };
`

export const NavSearchInput = styled.input.attrs({
    placeholder: '搜索',
})`
    box-sizing: border-box;
    width: 160px;
    height: 38px;
    padding: 0 40px 0px 20px;
    border: none;
    outline: none;
    font-size: 14px;
    background: transparent;
    &.focused {
        width: 240px;
    };
    &.slide-enter {
        transition: all .2s ease-out;
    };
    &.slide-enter-active {
        width: 240px;
    };
    &.slide-exit {
        transition: all .2s ease-out;
    };
    &.slide-exit-active {
        width: 160px;
    };
`

export const Addition  = styled.div`
    height: 56px;
    position: absolute;
    right: 0;
    top: 0;
`

export const Button = styled.div`
    height: 40px;
    font-size: 15px;
    line-height: 20px;
    margin: 8px 15px;
    float: right;
    padding: 10px 20px;
    border-radius: 20px;
    box-sizing: border-box;
    &.write {
         background: #ea6f5a;
         color: #fff;
    }
    &.register {
        border: 1px solid #ea6f5a;
        color: #ea6f5a;
        padding: 10px 25px;
        margin: 8px 10px 8px 15px;
    }
`
