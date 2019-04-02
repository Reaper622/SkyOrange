import React, { Component, Suspense } from 'react'
import { ChartCard, Field, Pie, Bar } from '@/components/Charts'
import Trend from '@/components/Trend'
import Yuan from '@/utils/Yuan'
import { Row, Col, Icon, Tooltip, Card, Table, Tag, Divider} from 'antd'
import numeral from 'numeral'
import GridContent from '@/components/PageHeaderWrapper/GridContent'
import { connect } from 'dva'
import styles from './InvestorMoney.less'
import PageLoading from '@/components/PageLoading';

// 生成柱状图的随机数据
const salesData = [];
for (let i = 0; i <= 12; i += 1) {
  salesData.push({
    x: `${i + 1}月`,
    y: Math.floor(Math.random()*1000) + 200,
  });
}

// 定义表格要显示的内容
const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render: text => <a href="">{text}</a>,
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
}, {
  title: 'Tags',
  key: 'tags',
  dataIndex: 'tags',
  render: tags => (
    <span>
      {tags.map(tag => {
        let color = tag.length > 5 ? 'geekblue' : 'green';
        if (tag === 'loser') {
          color = 'volcano';
        }
        return <Tag color={color} key={tag}>{tag.toUpperCase()}</Tag>;
      })}
    </span>
  ),
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => (
    <span>
      <a href="">Invite {record.name}</a>
      <Divider type="vertical" />
      <a href="">Delete</a>
    </span>
  ),
}];

const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
  tags: ['nice', 'developer'],
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
  tags: ['loser'],
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
}];

@connect()
class InvestorMoney extends Component {
  state = {
    pieData: [
      {
        x: '净值',
        y: 1000
      },
      {
        x: '浮亏',
        y: 500
      }
    ]
  };

  render() {
    const {pieData} = this.state
    return (
      <GridContent>
        <Row className={styles.row} style={{height:300, marginBottom: 50}}>
          <Col span={6}>
            <Suspense fallback={<PageLoading />}>
              <ChartCard
                title="资金总额"
                action={
                  <Tooltip title="资金说明">
                    <Icon type="info-circle-o" />
                  </Tooltip>
                }
                total={() => <Yuan>126560</Yuan>}
                footer={
                  <Field label="当日资金交易额" value={numeral(123456).format("0.0")} />
                }
                contentHeight={46}
              >
                <span>
                  收入
                  <Trend flag="up" syle={{marginLeft:8, color: "rgba(0,0,0,.85)"}}>
                    12%
                  </Trend>
                </span>
                <span>
                  支出
                  <Trend flag="down" syle={{marginLeft:8, color: "rgba(0,0,0,.85)"}}>
                    12%
                  </Trend>
                </span>
              </ChartCard>
            </Suspense>
          </Col>
          <Col offset={4} span={12}>
            <Suspense fallback={<PageLoading />}>
              <Card
                className={styles.salesCard}
                style={{paddingTop: 0}}
              >
                <Pie
                  hasLegend
                  title="饼图"
                  subTitle="饼图"
                  total={<Yuan>{pieData.reduce((pre, now) => now.y + pre, 0)}</Yuan>}
                  data={pieData}
                  valueFormat={value => <Yuan>{value}</Yuan>}
                  width={50}
                  heigth={50}
                  lineWidth={3}
                  style={{top: -20}}
                />
              </Card>
            </Suspense>
          </Col>
        </Row>
        <Row className={styles.row}>
          <Col>
            <Card>
              <Bar
                height={200}
                title="柱状图"
                data={salesData}
              />
            </Card>
          </Col>
        </Row>
        <Table columns={columns} dataSource={data} />
      </GridContent>
    )
  }
}

export default InvestorMoney
