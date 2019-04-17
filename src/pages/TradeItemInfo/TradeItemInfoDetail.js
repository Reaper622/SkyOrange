import React, { Component } from 'react'
import router from 'umi/router'
import Yuan from '@/utils/Yuan'
import { Table, Card, Row, Col, Divider } from 'antd'
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
            <Col xs={20} sm={16} md={12} lg={10} xl={6} style={{marginBottom: 10}}>
              <Card
                title={<span className={styles.linkItem} onClick={() => this.checkDetail(item.item)}>{item.item}</span>}
                extra={<div><Yuan>{item.bid}</Yuan><Divider type="vertical" /><Yuan>{item.ask}</Yuan></div>}
              >
                <Row type="flex" justify="start" style={{marginBottom: 30}}>
                  <Col span={8}>
                    <Yuan>{item.low}</Yuan>
                  </Col>
                  <Col span={8}>
                    <Yuan>{item.high}</Yuan>
                  </Col>
                  <Col span={8}>
                    <Yuan>{item.floating}</Yuan>
                  </Col>
                </Row>
                <Row type="flex" justify="start">
                  <Col span={8}>
                    <Yuan>{item.position}</Yuan>
                  </Col>
                  <Col span={8}>
                    <Yuan>{item.avgPrice}</Yuan>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    )
  }
}

export default TradeItemInfoDetail
