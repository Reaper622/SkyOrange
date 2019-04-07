import { routerRedux } from 'dva/router'
import { stringify } from 'qs';
import { fakeAccountLogin } from '@/services/api'
import { setAuthority } from '@/utils/authority'
import { reloadAuthorized } from '@/utils/Authorized';

export default {
  namespace: 'login',

  state : {
    status: undefined,
  },

  // 同步更新
  reducers: {
    changeLoginStatus(state, {payload}) {
      // 设置权限
      setAuthority(payload.currentAuthority)
      return {
        ...state,
        status: payload.status,
        type: payload.type
      }
    }
  },

  // 异步更新
  effects: {
    // payload为传递的参数
    *login({payload}, {call, put}) {
      const response = yield call(fakeAccountLogin, payload);
      yield put({
        type: 'changeLoginStatus',
        payload: response
      })
      // 成功登录
      if (response.status === 'ok') {
        reloadAuthorized();
        yield put(routerRedux.replace('/'))
      }
    }
  }
}
