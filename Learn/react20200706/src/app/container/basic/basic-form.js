import React, { Component } from 'react';
import './basic-form.css'

// https://www.jianshu.com/p/2f6d5889d0ed
/**
 * 
 */
class WForm {

  static create(WrapperComponent) {
    return class Wrapper extends Component {

      constructor(props) {
        super(props)

        this.state = {}

        // 验证规则、校验
        this.options = {};
      }

      handleChange = (e) => {
        // const {name, value} = e.target;
        // this.setState({
        //   [name]: value, // name为动态熟悉：牛逼
        // },() => {
        //   this.validateField(name)
        // })
        console.log(e);
      }

      validateField = (name) => {
        // 校验
        const opt = this.options[name];
        if (opt != null && opt.rules != null && opt.rules.required) {
          // 
        } 
      }

      getFieldDecorator = (name, opts) => {
        this.options[name] = opts
        return (ChildComponent) => {
          return React.cloneElement(ChildComponent, {
            name: name,
            value: this.state[name] || '',
            onChange: this.handleChange
          })
        }
      }

      getFieldValue = (name) => {
        return this.state[name]
      }

      getFieldsValue = (names) => {
        const values = {}
        for(let key of names) {
          values[key] = this.state[key];
        }
        return values
      }

      render() {

        const form = {
          getFieldDecorator: this.getFieldDecorator,
          getFieldValue: this.getFieldValue,
          getFieldsValue: this.getFieldsValue,
        }

        return <WrapperComponent {...this.props} form={form}/>
      }

    }
  }

}



export { WForm };
