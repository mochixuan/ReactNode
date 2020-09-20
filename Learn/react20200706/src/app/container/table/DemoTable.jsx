import React from 'react';
import {WTable} from './index'

class DemoTable extends React.Component {

  constructor() {
    super()

    this.columns = [
      {
        title: '编号',
        dataIndex: 'name',
        key: 'orderno',
        align: 'center',
        renderHeader: () => {
          return '我是个小编好'
        },
        render: (item, index) => {
          return index + 1
        }
      },
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        align: 'center',
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
      },
    ]


    const items = [];
    for(let i = 0 ; i < 10 ; i++) {
      items.push({
        age: 23+i,
        name: 'mochixuan'+i,
        address: '深圳'+ i,
        id: i,
      })
    }

    this.state = {
      items
    }
  }

  render() {
    return (
      <WTable
        dataSource={this.state.items} 
        columns={this.columns}
      />
    )
  }
}

export {DemoTable}