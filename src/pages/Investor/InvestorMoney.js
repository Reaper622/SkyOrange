import React, { Component, Suspense } from 'react'
import { ChartCard, Field } from '@/components/Charts'
import Trend from '@/components/Trend'
import Yuan from '@/utils/Yuan'
import { Row, Col, Icon, Tooltip } from 'antd'
import numeral from 'numeral'
import GridContent from '@/components/PageHeaderWrapper/GridContent'
import { connect } from 'dva'
import styles from './InvestorMoney.less'
import PageLoading from '@/components/PageLoading';


@connect()
class InvestorMoney extends Component {
  state = {

  };

  render() {
    return (
      <GridContent>
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
      </GridContent>
    )
  }
}

export default InvestorMoney
