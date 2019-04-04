import React, { Component } from 'react'
import { Form, Input, Button, Radio, Select, List, Table } from 'antd'
import RadioGroup from 'antd/lib/radio/group';
import Yuan from '@/utils/Yuan'

const { Option } = Select;
const { Item } = List;

class InvestorMoneyDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortedInfo: null,
      type: '',
      moneyBelow: 1000,
      infos: [
        {id:1, type:'转入', money: 1000, investorName: '张三'},
        {id:2, type:'转出', money: 3000, investorName: '张三'},
        {id:3, type:'投资', money: 3000, investorName: '张三'},
        {id:4, type:'转入', money: 1000, investorName: '李四'},
        {id:5, type:'转出', money: 3000, investorName: '李四'},
        {id:6, type:'投资', money: 3000, investorName: '李四'},
        {id:7, type:'转入', money: 1000, investorName: '王五'},
        {id:8, type:'转出', money: 3000, investorName: '王五'},
        {id:9, type:'投资', money: 3000, investorName: '王五'},
      ]
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

  handleTableChange = (pagination, filters, sorter) => {
    console.log(sorter);
    this.setState({
      sortedInfo: sorter
    })
  }

  render() {
    const { infos } = this.state;
    let {sortedInfo } = this.state;
    sortedInfo = sortedInfo || {};
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 8, offset: 5 },
    };
    const buttonItemLayout = {
      wrapperCol: { span: 14, offset: 10 },
    };
    const tableClomuns = [
      {
        title: '类型',
        dataIndex: 'type',
        key: 'type'
      },
      {
        title:'资金',
        dataIndex: 'money',
        key: 'money',
        sorter: (a, b) => a.money - b.money,
        sortOrder: sortedInfo.columnKey === 'money' && sortedInfo.order
      },
      {
        title: '投资人姓名',
        dataIndex: 'investorName',
        key: 'investorName',
        sorter: (a, b) => a.investorName.length - b.investorName.length,
        sortOrder: sortedInfo.columnKey === 'investorName' && sortedInfo.order
      }
    ]
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
        <Table style={{background: '#ffffff', marginTop: 50}} columns={tableClomuns} dataSource={infos} onChange={this.handleTableChange} />
      </div>
    )
  }
}

export default InvestorMoneyDetail
