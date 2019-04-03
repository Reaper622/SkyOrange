import React, { PureComponent } from 'react'
import {
  Form, Input, Button, Card
} from 'antd';
import { connect } from 'dva'
// import styles from './InvestorManagement.less'

@connect()
class InvestorManagement extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render() {
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
    };
    const buttonItemLayout ={
      wrapperCol: { span: 14, offset: 4 },
    };
    return (
      <Card bordered={false}>
        <Form layout="horizontal">
          <Form.Item
            label="提款目的"
            {...formItemLayout}
          >
            <Input placeholder="输入提款目的" />
          </Form.Item>
          <Form.Item
            label="提款金额"
            {...formItemLayout}
          >
            <Input placeholder="输入提款金额" />
          </Form.Item>
          <Form.Item {...buttonItemLayout}>
            <Button type="primary">提交申请</Button>
          </Form.Item>
        </Form>
      </Card>
    )
  }
}

export default InvestorManagement
