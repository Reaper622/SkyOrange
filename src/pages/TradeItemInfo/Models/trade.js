import {  getFakeTradeItems } from '@/services/api'

export default {
  namespace: 'trade',

  state: {
    tradeItems: []
  },

  effects: {
    *getTradeItems({payload}, {call, put}) {
      const response = yield call(getFakeTradeItems, payload);
      yield put({
        type: 'tradeItems',
        payload: response
      })
    }
  },

  reducers: {
    tradeItems(state, actions) {
      return {
        ...state,
        tradeItems: actions.payload
      }
    }
  }
}
