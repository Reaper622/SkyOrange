import React, { Component } from 'react'
import { Form, Input, Button, Radio, Select } from 'antd'
import RadioGroup from 'antd/lib/radio/group';
import Yuan from '@/utils/Yuan'

const { Option } = Select;

class InvestorMoneyDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: '',
      moneyBelow: 1000
    }
  }

  handleTypeChange = (e) => {
    this.setState({
      type: e.target.value
    })
  }

  handleMoneyChange = (e) => {
    this.setState({
      moneyBelow: e
    })
  }

  render() {
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 8, offset: 5 },
    };
    const buttonItemLayout = {
      wrapperCol: { span: 14, offset: 10 },
    };
    return (
      <div>
        <Form layout="inline">
          <Form.Item
            label="流动类型"
            {...formItemLayout}
          >
            <RadioGroup style={{width:200}} defaultValue="转入" onChange={this.handleTypeCHange}>
              <Radio.Button value="转入">转入</Radio.Button>
              <Radio.Button value="转出">转出</Radio.Button>
              <Radio.Button value="投资">投资</Radio.Button>
            </RadioGroup>
          </Form.Item>
          <Form.Item
            {...formItemLayout}
          >
            <Select
              showSearch
              style={{width:200}}
              placeholder="选择最大资金数"
              onChange={this.handleMoneyChange}
            >
              <Option value="20000"><Yuan>20000</Yuan></Option>
              <Option value="10000"><Yuan>10000</Yuan></Option>
              <Option value="5000"><Yuan>5000</Yuan></Option>
              <Option value="3000"><Yuan>3000</Yuan></Option>
              <Option value="1000"><Yuan>1000</Yuan></Option>
            </Select>
          </Form.Item>
          <Form.Item {...buttonItemLayout}>
            <Button type="primary" icon="search">查找</Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default InvestorMoneyDetail
