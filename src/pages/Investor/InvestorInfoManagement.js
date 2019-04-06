import React, { PureComponent } from 'react'
import {
  Form, Input, Button, Card, Avatar
} from 'antd';
import { connect } from 'dva'
// import styles from './InvestorManagement.less'

const fakeAvatar = "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1554379058&di=04c565d8258a79cba4e827425e60f6bc&src=http://img.zcool.cn/community/01a3865ab91314a8012062e3c38ff6.png@1280w_1l_2o_100sh.png"

@connect()
class InvestorInfoManagement extends PureComponent {
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
            label="头像"
            {...formItemLayout}
          >
            <Avatar style={{width:100, height: 100}} src={fakeAvatar} />
          </Form.Item>
          <Form.Item
            label="姓名"
            {...formItemLayout}
          >
            <Input placeholder="此处登录后展示原姓名" />
          </Form.Item>
          <Form.Item
            label="性别"
            {...formItemLayout}
          >
            <Input placeholder="此处登录后展示原性别" />
          </Form.Item>
          <Form.Item
            label="年龄"
            {...formItemLayout}
          >
            <Input placeholder="此处登录后展示原姓名" />
          </Form.Item>
          <Form.Item
            label="资本"
            {...formItemLayout}
          >
            <Input placeholder="此处登录后展示原资本" />
          </Form.Item>
          <Form.Item {...buttonItemLayout}>
            <Button type="primary">提交修改</Button>
          </Form.Item>
        </Form>
      </Card>
    )
  }
}

export default InvestorInfoManagement
