import React from 'react'
import {
    WForm
} from './basic-form'
import {
  WHForm
} from './basic-form1.jsx'
import './style.css'
import { Input, Select, Checkbox, Radio, InputNumber, Button } from 'antd'

// eslint-disable-next-line
class TBasicComponent1 extends React.Component {

  render() {

    const { getFieldDecorator } = this.props.form;
    
    return (
      <div className='box'>
        <WForm>
          <WForm.WItem label='属性: '>
            <Select className='box-item'>
              <Select.Option value={'1'}>天</Select.Option>
              <Select.Option value={'2'}>地</Select.Option>
              <Select.Option value={'3'}>旋</Select.Option>
              <Select.Option value={'4'}>黄</Select.Option>
              <Select.Option value={'5'}>好</Select.Option>
            </Select>
          </WForm.WItem>
          <WForm.WItem label='姓名: '>
            <Input className='box-item' />
          </WForm.WItem>
          <WForm.WItem label='Email: '>
            {
              getFieldDecorator('email',{
                initialValue: '130@qq.com'
              })(
                <input className='box-item' />
              )
            }
            
          </WForm.WItem>
          <WForm.WItem label='电话: '>
            <InputNumber className='box-item'/>
          </WForm.WItem>
          <WForm.WItem label='爱好: '>
            <Checkbox.Group className='box-item'>
              <Checkbox value='篮球'>篮球</Checkbox>
              <Checkbox value='足球'>足球</Checkbox>
              <Checkbox value='网球'>网球</Checkbox>
            </Checkbox.Group>
          </WForm.WItem>
          <WForm.WItem label='性别: '>
            <Radio.Group className='box-item'>
              <Radio value='男'>男</Radio>
              <Radio value='女'>女</Radio>
            </Radio.Group>
          </WForm.WItem>
        </WForm>
      </div>
    )
  }
}

// eslint-disable-next-line
@WForm.create
class TBasicComponent extends React.Component {

  sumbit = () => {
    const params = this.props.form.getFieldsValue(['email']);
    console.warn('sumbit', params)
  }

  render() {

    const {getFieldDecorator,} = this.props.form;

    return (
      <div>
        {
          getFieldDecorator('email', {
            rules: [
              {required: true, msg: '用户名必填'}
            ]
          })(
            <input className='box-item' />
          )
        }
        {
          getFieldDecorator('property',{})(
            <select className='box-item'>
              <option value={'1'}>天</option>
              <option value={'2'}>地</option>
              <option value={'3'}>旋</option>
              <option value={'4'}>黄</option>
              <option value={'5'}>好</option>
            </select>
          )
        }
        <Button onClick={this.sumbit} type='primary'>提交</Button>
      </div>
    )
  }

}

function BasicComponent() {
  return (
    <WHForm >
      <WHForm.Item name='email'>
        <input className='box-item'/>
      </WHForm.Item>
    </WHForm>
  )
}


export { BasicComponent }