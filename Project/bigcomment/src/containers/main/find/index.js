import React,{Component} from 'react'
import {connect} from 'react-redux'
import './style.css'
import {Button} from 'antd-mobile';

class Page extends Component{
    render() {
        return (
            <div className={'find'}>
                发现家Ant Design
                <Button type="primary">按钮</Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

const FindTabPage = connect(mapStateToProps,mapDispatchToProps)(Page)

export {FindTabPage}
