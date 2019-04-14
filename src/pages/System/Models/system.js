import {  getMoneyDetails } from '@/services/api'

export default {
  namespace: 'system',

  state: {
    details: []
  },

  reducers: {
    details(state, { payload }) {
      return {
        ...state,
        details: payload
      }
    }
  },

  effects: {
    *getDetails({payload}, { call, put }) {
      const response = yield call(getMoneyDetails, payload);
      yield put({
        type: 'details',
        payload: response
      })
    }
  }

}
