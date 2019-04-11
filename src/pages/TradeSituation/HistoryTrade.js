import React, { Component } from 'react'
import {Row, Col, Table, DatePicker} from 'antd'
import { connect } from 'dva'
const { RangePicker } = DatePicker;

@connect(({ history, loading}) => ({
  history,
  getHistoryTrade: loading.effects['history/getHistoryTrade']
}))
class HistoryTrade extends Component {
  constructor(props){
    super(props);
    this.state = {
      columns : [
        {
          title: '交易编号',
          dataIndex: 'tradeID',
          key: 'tradeID'
        },
        {
          title: '账户编号',
          dataIndex: 'accountID',
          key: 'accountID'
        },
        {
          title: '交易方案编号',
          dataIndex: 'solutionID',
          key: 'solutionID'
        },
        {
          title: '对象',
          dataIndex: 'item',
          key: 'item'
        },
        {
          title: '头寸',
          dataIndex: 'position',
          key: 'position'
        },
        {
          title: '买/卖',
          dataIndex: 'direction',
          key: 'direction'
        },
        {
          title: '价格',
          dataIndex: 'price',
          key: 'income'
        },
        {
          title: '收入',
          dataIndex: 'income',
          key: 'income'
        },
        {
          title: '佣金',
          dataIndex: 'commission',
          key: 'commission'
        },
        {
          title: '时间',
          dataIndex: 'time',
          key: 'time'
        },
        {
          title: '备注',
          dataIndex: 'remark',
          key: 'remark'
        }
      ],
      tradeData: []
    }
  }

  componentWillMount() {
    this.getHistoryTradeData()
  }


  onChange = (date, dateString) => {
    console.log(date, dateString);
    this.getRangeData(dateString[0], dateString[1]);
  }

  getHistoryTradeData = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'history/getHistoryTrade'
    })
    const {history} = this.props;
    this.setState({
      tradeData: history.historyTrades
    })
  }

  getRangeData = (start, end) => {
    const { tradeData } = this.state;
    const newData = tradeData.filter( v => {
      const theTime = new Date(v.time);
      const startTime = new Date(start);
      const endTime = new Date(end);
      return theTime >= startTime && theTime <= endTime;
    })
    this.setState({
      tradeData: newData
    })
  }


  render() {
    const { columns, tradeData } = this.state;
    return (
      <div>
        <Row>
          <Col span={4}>选择时间段</Col>
          <Col span={6}>
            <RangePicker onChange={this.onChange} />
          </Col>
        </Row>
        <Table style={{background: '#fff', marginTop: 50}} columns={columns} dataSource={tradeData} />

      </div>
    )
  }
}

export default HistoryTrade
