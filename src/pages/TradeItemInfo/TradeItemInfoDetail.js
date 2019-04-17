import React, { Component } from 'react'
import router from 'umi/router'
import { Table, Card, Row, Col, Button } from 'antd'
import { connect } from 'dva';

import styles from './TradeItemInfoDetail.less'



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
        },
        {
          title: '操作',
          key: 'action',
          render: (text, item) => (
            <span className={styles.linkItem} onClick={() => this.checkDetail(item.item)}>查看详情</span>
          )
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

  checkDetail = (id) => {
    router.push(`/tradeitem/detail/${id}`)
  }

  render() {
    const {columns} = this.state;
    const {trade, getData} = this.props;
    return (
      <div>
        {/* <Table dataSource={trade.tradeItems} columns={columns} style={{background:'#fff'}} loading={getData} /> */}
        <Row type="flex" justify="space-around">
          {trade.tradeItems.map(item => (
            <Col xs={20} sm={16} md={12} lg={10} xl={6}>
              <Card
                title={item.item}
                extra={<span className={styles.linkItem} onClick={() => this.checkDetail(item.item)}>查看详情</span>}
              >
                <p>{`买价: ${item.ask? item.ask: ''}`}</p>
                <p>{`卖价: ${item.bid? item.bid: ''}`}</p>
                <p>{`最高: ${item.high? item.high: ''}`}</p>
                <p>{`最低: ${item.low? item.low: ''}`}</p>
                <p>{`敞口头寸: ${item.position? item.position: ''}`}</p>
                <p>{`浮亏/盈: ${item.floating? item.floating: ''}`}</p>
                <p>{`头寸均价: ${item.avgPrice? item.avgPrice: ''}`}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    )
  }
}

export default TradeItemInfoDetail
