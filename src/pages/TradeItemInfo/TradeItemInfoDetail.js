import React, { Component } from 'react'

import { Table } from 'antd'
import { connect } from 'dva';



@connect(({ trade, loading}) => ({
  trade,
  getData: loading.effects['trade/getTradeItems'],
}))

class TradeItemInfoDetail extends Component {
  constructor(props){
    super(props);
    this.state = {
      columns : [
        {
          title: '对象名称',
          dataIndex: 'item',
          key: 'item'
        },
        {
          title: '买价',
          dataIndex: 'ask',
          key: 'ask'
        },
        {
          title: '卖价',
          dataIndex: 'bid',
          key: 'bid'
        },
        {
          title: '最高',
          dataIndex: 'high',
          key: 'high'
        },
        {
          title: '最低',
          dataIndex: 'low',
          key: 'low'
        },
        {
          title: '敞口头寸',
          dataIndex: 'position',
          key: 'position'
        },
        {
          title: '浮亏/盈',
          dataIndex: 'floating',
          key: 'floating'
        },
        {
          title: '头寸均价',
          dataIndex: 'avgPrice',
          key: 'avgPrice'
        }
      ]
    }
  }


  componentWillMount(){
    this.getTradeData()
  }

  getTradeData = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'trade/getTradeItems',
    })
  }

  render() {
    const {columns} = this.state;
    const {trade, getData} = this.props;
    return (
      <div>
        <Table dataSource={trade.tradeItems} columns={columns} style={{background:'#fff'}} />
      </div>
    )
  }
}

export default TradeItemInfoDetail
