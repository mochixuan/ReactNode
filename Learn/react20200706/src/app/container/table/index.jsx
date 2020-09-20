import React from 'react';
import './styles.css'

class WTable extends React.Component {


  _renderTH = (columns) => {
    return (
      <tr>
          {
            columns.map((item, index) => {
              const itemStyle = {
                textAlign: item.align ? item.align : 'left',
              }
              let renderChild = item.renderHeader ? item.renderHeader(item, index) : item.title;
              return (
                <th key={item.key} className='base-table-th' style={itemStyle}>
                  { renderChild }
                </th>
              )
            })
          }
      </tr>
    )
  }

  _renderItemTD = (dataSource, columns) => {
    return dataSource.map((trItem, trIndex) => {
      return (
        <tr key={trItem.id+trIndex}>
          {
            columns.map((thItem, thIndex) => {
              const itemStyle = {
                textAlign: thItem.align ? thItem.align : 'left',
              }
              let renderItemChild = trItem[thItem.key]
              if (thItem.render) {
                renderItemChild = thItem.render(thItem.dataIndex ? trItem[thItem.dataIndex] : trItem, trIndex)
              }
              return (
                <td key={thItem.key} className='base-table-td' style={itemStyle}>
                  { renderItemChild }
                </td>
              )
            })
          }
        </tr>
      )
    })
  }

  render() {
    const {columns, dataSource} = this.props;
    return (
      <table>
        <thead>
          {this._renderTH(columns)}
        </thead>
        <tbody>
          {this._renderItemTD(dataSource, columns)}
        </tbody>
      </table>
    )
  }
}

export {WTable}