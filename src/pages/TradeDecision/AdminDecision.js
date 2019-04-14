import React, { Component } from 'react'
import Yuan from '@/utils/Yuan'
import { connect } from 'dva'
import { Table, Divider } from 'antd'
import styles from './AdminDecision.less'

@connect(({ decision, loading}) => ({
  decision,
  getDecision: loading.effects['decision/getDecision']
}))
class AdminDecision extends Component {
  constructor(props){
    super(props);
    this.state = {
      columns: [
        {
          title: '交易方案编号',
          dataIndex: 'solutionID',
          key: 'solutionID'
        },
        {
          title: '交易方案名称',
          dataIndex: 'solutionName',
          key: 'solutionName'
        },
        {
          title: '状态',
          dataIndex: 'status',
          key: 'status',
          render: (text) => (
            <span>{text === 1? '通过' : '待评定'}</span>
          )
        },
        {
          title: '交易额',
          dataIndex: 'tradeMoney',
          key: 'tradeMoney',
          render: (text) => (
            <Yuan>{text}</Yuan>
          )
        },
        {
          title: '交易者',
          dataIndex: 'tradePerson',
          key: 'tradePerson'
        },
        {
          title: '操作',
          key: 'action',
          render: () => (
            <div>
              <span className={styles.linkItem}>同意</span>
              <Divider type="vertical" />
              <span className={styles.linkItem}>拒绝</span>
            </div>
          )
        }
      ]
    }
  }

  componentWillMount() {
    this.getTradeDecision()
  }

  getTradeDecision = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'decision/getDecisions'
    })
  }

  render() {
    const {columns} = this.state;
    const { decision } = this.props;
    return (
      <div>
        <Table columns={columns} dataSource={decision.decisions} style={{background: '#fff', marginTop: 50}} />
      </div>
    )
  }
}

export default AdminDecision
