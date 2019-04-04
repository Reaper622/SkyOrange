import React, { Component } from 'react'
import PageHeader from '@/components/PageHeader'
import { Card, Icon, Avatar, Row, Col } from 'antd'

const {Meta} = Card;


const HeaderContent = (
  <div>
    <p>投资者信息管理平台</p>
  </div>
)

const extra = (
  <div className="imgContainer">
    <img style={{ width: 200 }} alt="" src="https://gw.alipayobjects.com/zos/rmsportal/RzwpdLnhmvDJToTdfDPe.png" />
  </div>
);

const cardListData = [
  {id:1, name:'张三', description: '来自重庆的投资者'},
  {id:2, name:'张三', description: '来自重庆的投资者'},
  {id:3, name:'张三', description: '来自重庆的投资者'},
  {id:4, name:'张三', description: '来自重庆的投资者'},
  {id:5, name:'张三', description: '来自重庆的投资者'},
  {id:6, name:'张三', description: '来自重庆的投资者'},
  {id:7, name:'张三', description: '来自重庆的投资者'},
  {id:8, name:'张三', description: '来自重庆的投资者'}
]

const fakeAvatarUrl = "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1554379058&di=04c565d8258a79cba4e827425e60f6bc&src=http://img.zcool.cn/community/01a3865ab91314a8012062e3c38ff6.png@1280w_1l_2o_100sh.png"

class InvestorInfoManagement extends Component{
  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <PageHeader
          title="信息管理"
          content={HeaderContent}
          extraContent={extra}
        />
        <Row gutter={16}>
          {cardListData.map(item => (
            <Col span={6}>
              <Card
                key={item.id}
                style={{marginTop: 10}}
                actions={[<Icon type="setting" />, <Icon type="ellipsis" />]}
              >
                <Meta
                  avatar={<Avatar src={fakeAvatarUrl} />}
                  title={item.name}
                  description={item.description}
                />
              </Card>
            </Col>
          ))}
        </Row>

      </div>
    )
  }
}

export default InvestorInfoManagement
